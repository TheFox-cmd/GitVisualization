import { Node } from "../types/types";

const Directory: React.FC<{ children: Node[] }> = ({ children }) => {
  return (
    <div>
      {children.map((node) => (
        <div key={node.id}>
          <div>{node.name}</div>
          {node.children && <Directory children={node.children} />}
        </div>
      ))}
    </div>
  );
};

export default Directory;
