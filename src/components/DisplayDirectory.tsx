import { useContext } from "react";
import Directory from "./Directory";
import { DirectoryContext } from "../contexts/DirectoryContext";

const DisplayDirectory = () => {
  const directories = useContext(DirectoryContext)

  return (
    <div>
      <h1>Display Directory</h1>
      <Directory children={directories} />
    </div>
  );
};

export default DisplayDirectory;
