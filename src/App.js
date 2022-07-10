import logo from "./logo.svg";
import "./App.css";
import Tree from "./components/Tree";
import React,{ useState } from "react";
import { TreeContext } from "./TreeContext"
import { treeData } from "./TreeData";



function App() {
  const [data,setData] = useState(treeData)
  return (
    <TreeContext.Provider value={{data,setData}}>
    <div className="App">
      <header className="App-header">
        <h1>
        React Nested Checkbox
        </h1>
      <div className="row">
        <div className="col text-center">
          <p className="mt-3">
            <div className="row mt-3 d-flex justify-content-center">
              <div className="col-lg-8 text-left text-dark">
                <Tree />
              </div>
            </div>
          </p>
        </div>
      </div>
      </header>
    </div>
    </TreeContext.Provider>
  );
}

export default App;
