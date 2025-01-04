import { Function } from "../types/types";

type FunctionList = { [key: string]: Function };

const functions: FunctionList = {
  echo: (_display, setDisplay, _path, _setPath, args) => {
    setDisplay([..._display, args.slice(1).join(" ")]);
  },

  ls: (_display, _setDisplay, _path, _setPath, _args) => {},

  cd: (_display, _setDisplay, _path, _setPath, _args) => {},

  pwd: (display, setDisplay, path, _setPath, _args) => {
    setDisplay([...display, path]);
  },

  touch: (_display, _setDisplay, _path, _setPath, _args) => {},

  cat: (_display, _setDisplay, _path, _setPath, _args) => {},

  mkdir: (_display, _setDisplay, _path, _setPath, _args) => {},

  chmod: (_display, _setDisplay, _path, _setPath, _args) => {},

  mv: (_display, _setDisplay, _path, _setPath, _args) => {},

  cp: (_display, _setDisplay, _path, _setPath, _args) => {},

  rm: (_display, _setDisplay, _path, _setPath, _args) => {},

  man: (_display, _setDisplay, _path, _setPath, _args) => {},

  clear: (_display, setDisplay, _path, _setPath, _args) => {
    setDisplay([]);
  },

  help: (display, setDisplay, path, _setPath, args) => {
    const command = args[0];
    const latestCommand: string = path + " " + command;
    const commands = Object.keys(functions);
    setDisplay([...display, latestCommand, ...commands]);
  },
};

export default functions;
