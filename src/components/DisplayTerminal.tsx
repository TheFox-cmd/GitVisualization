import { useContext, useState } from "react";
import Grid from "@mui/material/Grid2";
import InputBase from "@mui/material/InputBase";
import Typography from "@mui/material/Typography";
import { DirectoryContext } from "../contexts/DirectoryContext";
import { Node } from "../types/types";

const DisplayTerminal = () => {
  const [command, setCommand] = useState<string>("");
  const [commandList, setCommandList] = useState<string[]>([]);

  const [display, setDisplay] = useState<string[]>([]);

  const [root] = useContext(DirectoryContext);
  const [path, setPath] = useState<string>("/root/home");

  const user = "test@javascript:";
  const trail = "$ ";
  const handleKeyDown = (
    e: React.KeyboardEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    if (e.key !== "Enter") return;

    const args = command.split(" ");

    const displayCommand = user + path + trail + command;
    const executable = args[0];

    switch (executable) {
      case "echo": {
        setDisplay([...display, displayCommand, args.slice(1).join(" ")]);
        break;
      }
      case "cd": {
        const nodes = path.split("/").filter(Boolean);
        nodes.shift();
        break;
      }
      case "ls": {
        const nodes = path.split("/").filter(Boolean);
        nodes.shift();
        let currentNode = root;

        for (const node of nodes) {
          if (!currentNode.children) {
            console.log(`${currentNode.name}: It's a file, not a directory.`);
            return;
          }

          const nextNode = currentNode.children.find(
            (child) => child.name === node
          );

          if (!nextNode) {
            console.log("ERROR: Directory not found");
            return;
          }

          currentNode = nextNode;
        }

        const childrenNames = currentNode.children?.map((child) => child.name) || [];
        setDisplay([...display, displayCommand, ...childrenNames]);
        break;
      }
      case "pwd": {
        setDisplay([...display, displayCommand, path]);
        break;
      }
      case "touch": {
        const fileObject : Node = {
          id: "Someid",
          name: args[1],
          path: path + "/" + args[1],
          type: "file",
          parent: path.split("/").pop() || "",
        };

        const nodes = path.split("/").filter(Boolean);
        nodes.shift();
        let currentNode = root;

        for (const node of nodes) {
          if (!currentNode.children) {
            console.log(`${currentNode.name}: It's a file, not a directory.`);
            return;
          }

          const nextNode = currentNode.children.find(
            (child) => child.name === node
          );

          if (!nextNode) {
            console.log("ERROR: Directory not found");
            return;
          }

          currentNode = nextNode;
        }

        currentNode.children?.push(fileObject);
        console.log(displayCommand);
        setDisplay([...display, displayCommand]);
        break;
      }
      case "mkdir": {
        break;
      }
      case "clear": {
        setDisplay([]);
        break;
      }
      default: {
        const displayCommand = user + path + trail + executable;
        const displayOutput = command + ": Command not found";
        setDisplay([...display, displayCommand, displayOutput]);
        break;
      }
    }

    setCommandList([...commandList, command]);
    setCommand("");
  };

  return (
    <Grid
      padding={2}
      sx={{
        backgroundColor: "var(--terminal-bg-color)",
        color: "var(--terminal-text-color)",
      }}
      width="100%"
      height="100vh"
    >
      <Grid container direction="column">
        {display.map((line, index) => (
          <Grid key={index}>{line}</Grid>
        ))}
      </Grid>
      <Grid container display="flex" alignItems="center">
        <Typography sx={{ whiteSpace: "pre" }}>
          {user + path + trail}
        </Typography>
        <InputBase
          type="text"
          value={command}
          onChange={(e) => setCommand(e.target.value)}
          onKeyDown={(e) => handleKeyDown(e)}
          autoFocus
          sx={{ flexGrow: 1, color: "var(--terminal-text-color)" }}
        />
      </Grid>
    </Grid>
  );
};

export default DisplayTerminal;
