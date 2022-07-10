import React, {useContext,useState } from 'react'
import Tree from './Tree';
import { faCaretRight } from "@fortawesome/free-solid-svg-icons";
import { get, set } from "lodash";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { TreeContext } from "../TreeContext";

const TreeNode = ({ node, dataKey }) => {
    const [childVisible, setChildVisiblity] = useState(false);
    const { data, setData } = useContext(TreeContext);
  
    const hasChild = node?.children?.length ? true : false;
   
    const handleChange = (event) => {
      const dataItem = get(data, dataKey);
      const parents = [];
      dataItem.checked = event.target.checked;
      dataItem.indeterminate= false
      for (let index = dataKey.length - 1; index >= 0; index--) {
        const element = dataKey[index];
        if (element === ".") {
          parents.push(dataKey.slice(0, index));
        }
      }
      if (hasChild) {
          if(dataItem.checked && dataItem?.children?.length)
         dataItem.children =  handleCheckChildren(dataItem.children,true)
          else if(!dataItem.checked &&dataItem?.children?.length)
          dataItem.children = handleCheckChildren(dataItem.children,false)
      } 
      parents.forEach((item) => {
        const parentItem = get(data, item);
        const allChild = get(data, item).children.map((item) => item.checked);
        const allChildIndeterinate = get(data,item).children.map(item=>item.indeterminate)


        if (allChild.every((child) => child )) {
          parentItem.checked = true;
          parentItem.indeterminate = false
        }
        else if(allChild.every((child) =>!child)) {
          parentItem.checked = false;
          if(allChildIndeterinate.some(child=>child))
          {
            parentItem.indeterminate =true;
          }
          else{
            parentItem.indeterminate = false
          }  
        }
        else if(allChild.some(child=>!child)){
          parentItem.checked = false;
          parentItem.indeterminate =true  
        }
        set(data, item, parentItem);
      });
      const newData = [...data];
      set(newData, dataKey, dataItem);
      setData(newData);
    };
    const handleCheckChildren = (dataItem,state) => {
      const newChildren = dataItem.map((item) => {
        item.checked = state
        if (item.children && item.children.length) {
          item.children = handleCheckChildren(item.children,state);
        }
        return item
      });
      return newChildren
    };
    return (
      <li className="d-tree-node">
        <div className="d-flex">
          {hasChild && (
            <div
              className={`d-inline d-tree-toggler ${
                childVisible ? "active" : ""
              }`}
              onClick={(e) => setChildVisiblity((v) => !v)}
            >
              <FontAwesomeIcon icon={faCaretRight} style={{ color: "#FFFFFF" }} />
            </div>
          )}
  
          <div className="d-flex d-tree-head">
            <FontAwesomeIcon className={`ml-2 mr-2`} icon={node.icon}  style={{ color: "#FFFFFF" }} />
            <div
              className="d-flex"
              style={{alignItems:"center"}}
            >
              <input
                type="checkbox"
                checked={node.checked}
                ref={(input) => {
                  if (input) {
                    if (node.indeterminate && !node.checked) {
                      input.indeterminate = true;
                    } else {
                      input.indeterminate = false;
                    }
                  }
                }}
                className="checkbox"
                onChange={handleChange}
              />
              <div className='ml-2 d-node-title'>{node.label}</div>
            </div>
          </div>
        </div>
  
        {hasChild && childVisible && (
          <div className="d-tree-content">
            <ul className="d-flex d-tree-container flex-column">
              <Tree dataKey={`${dataKey}.children`} />
            </ul>
          </div>
        )}
      </li>
    );
  };

export default TreeNode;  