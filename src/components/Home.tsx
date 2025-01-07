import DisplayDirectory from "./DisplayDirectory";
import DisplayTerminal from "./DisplayTerminal";
import { DirectoryContext } from "../contexts/DirectoryContext";
import { useState } from "react";
import { Node } from "../types/types";

const Home = () => {
  const [directory, setDirectory] = useState<Node[]>([
    {
      id: "root",
      name: "root",
      path: "/root",
      type: "folder",
      parent: "",
      children: [
        {
          id: "home",
          name: "home",
          path: "/root/home",
          type: "folder",
          parent: "root",
          children: [
            {
              id: "user",
              name: "user",
              path: "/root/home/user",
              type: "file",
              parent: "home",
            },
          ],
        },
      ],
    },
  ]);

  return (
    <>
      <DirectoryContext.Provider value={directory}>
        <DisplayDirectory />
        <DisplayTerminal />
      </DirectoryContext.Provider>
    </>
  );
};

export default Home;
