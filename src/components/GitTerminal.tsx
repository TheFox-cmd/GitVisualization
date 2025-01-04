import { useState } from "react";
import functions from "../utils/functions";

const GitTerminal = () => {
  const [command, setCommand] = useState<string>("");
  const [commandList, setCommandList] = useState<string[]>([]);

  const [path, setPath] = useState<string>("/root");
  const [display, setDisplay] = useState<string[]>([]);


  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key !== "Enter") return;

    const args = command.split(" ");

    const commandName : string = args[0];
    if (!(commandName in functions)) setDisplay([...display, "Command not found"]);

    functions[commandName](display, setDisplay, path, setPath, args);

    setCommandList([...commandList, command]);
    setCommand("");
  };

  return (
    <div>
      {display.map((line, index) => (
        <div key={index}>{line}</div>
      ))}
      <div>
        <span>{path}</span>
        <input
          type="text"
          value={command}
          onChange={(e) => setCommand(e.target.value)}
          onKeyDown={(e) => handleKeyDown(e)}
          autoFocus
        />
      </div>
    </div>
  );
};

export default GitTerminal;
