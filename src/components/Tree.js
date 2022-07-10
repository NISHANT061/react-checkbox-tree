
import { get } from "lodash";
import React, { useContext } from "react";
import "./Tree.css";
import { TreeContext } from "../TreeContext";
import TreeNode from "./TreeNode";

const Tree = ({ dataKey = "" }) => {
  const { data } = useContext(TreeContext);
  const localData = dataKey ? get(data, dataKey) : data;

  return (
    <div className="d-tree">
      <ul className="d-flex d-tree-container flex-column">
        {localData.map((tree, index) => (
          <TreeNode node={tree} dataKey={`${dataKey}[${index}]`} />
        ))}
      </ul>
    </div>
  );
};



export default Tree;
