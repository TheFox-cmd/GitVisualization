import { useState } from "react";
import Functions from "../utils/functions";

const GitTerminal = () => {
  const [command, setCommand] = useState<string>("");
  const [commandList, setCommandList] = useState<string[]>([]);
  const functions = Functions();

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key !== "Enter") return;

    const args = command.split(" ");
    console.log(args);

    const commandName = args[0];
    switch (commandName) {
      case "ls":
        functions.ls();
        break;
      case "cd":
        functions.cd();
        break;
      case "help":
        functions.help();
        break;
      default:
        console.log("Command not found");
    }

    setCommandList([...commandList, command]);
    setCommand("");
  };

  return (
    <div>
      <input
        type="text"
        value={command}
        onChange={(e) => setCommand(e.target.value)}
        onKeyDown={(e) => handleKeyDown(e)}
      />
    </div>
  );
};

export default GitTerminal;
