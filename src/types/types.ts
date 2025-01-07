export type ReactSetState<T> = React.Dispatch<React.SetStateAction<T>>;
export type Function = (
  display: string[],
  setDisplay: ReactSetState<string[]>,
  path: string,
  setPath: ReactSetState<string>,
  args: string[]
) => void;
export type Node = {
  id: string;
  name: string;
  path: string;
  type: "folder" | "file";
  parent: string;
  children?: Node[];
};
