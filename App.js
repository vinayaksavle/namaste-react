import React from "react";
import ReactDOM from "react-dom/client";

const heading = React.createElement("div", { id: "parent" }, 
    React.createElement("div", { id: "child" }, 
        [React.createElement("h1", {},"h1 tag 1"), React.createElement("h2", {},"h2 tag")]));

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(heading);
