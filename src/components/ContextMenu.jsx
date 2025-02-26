import React from "react";

const ContextMenu = ({menuPosition, setMenuPosition}) => {
  // if (!menuPosition.left) return
  return (
    <div className="context-menu" style={menuPosition}>
      <div
      onClick={()=> {
        console.log('editing')
        setMenuPosition({})
      }}
      >Edit</div>
      <div
      onClick={() => {
        console.log('deleting')
        setMenuPosition({})
      }}
      >Delete</div>
    </div>
  );
};

export default ContextMenu;
