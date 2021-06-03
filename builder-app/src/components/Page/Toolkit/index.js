import React from 'react'
import Component from "../../../Handler/components"

function Toolkit(props) {
    return (
      <div className="tool_config">
        {props.content.body.map((block) => {
          return <Component key={block._uid} block={block} />;
        })}
      </div>
    );
}

export default Toolkit
