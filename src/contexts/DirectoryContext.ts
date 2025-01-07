import { createContext } from "react";
import { Node } from "../types/types";

export const DirectoryContext = createContext<Node[]>([
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
