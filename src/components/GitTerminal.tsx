import { useState } from "react";
import functions from "../utils/functions";
import Grid from "@mui/material/Grid2";
import InputBase from "@mui/material/InputBase";
import Typography from "@mui/material/Typography";

const GitTerminal = () => {
  const [command, setCommand] = useState<string>("");
  const [commandList, setCommandList] = useState<string[]>([]);

  const [path, setPath] = useState<string>("~");
  const [display, setDisplay] = useState<string[]>([]);

  const user = "test@javascript:";
  const trail = "$ ";
  const handleKeyDown = (
    e: React.KeyboardEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    if (e.key !== "Enter") return;

    const args = command.split(" ");

    const commandName: string = args[0];
    if (!(commandName in functions))
      setDisplay([...display, "Command not found"]);
    else functions[commandName](display, setDisplay, path, setPath, args);

    setCommandList([...commandList, command]);
    setCommand("");
  };

  return (
    <Grid padding={2} sx={{backgroundColor: "var(--terminal-bg-color)", color: "var(--terminal-text-color)"}} width="100%" height="100vh">
      <Grid container direction="column">
        {display.map((line, index) => (
          <Grid key={index}>{line}</Grid>
        ))}
      </Grid>
      <Grid container display="flex" alignItems="center">
        <Typography sx={{ whiteSpace: "pre" }}>{user + path + trail}</Typography>
        <InputBase
          type="text"
          value={command}
          onChange={(e) => setCommand(e.target.value)}
          onKeyDown={(e) => handleKeyDown(e)}
          autoFocus
          sx={{ flexGrow: 1, color: "#abb2bf" }}
        />
      </Grid>
    </Grid>
  );
};

export default GitTerminal;
