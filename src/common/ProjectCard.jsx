import React from "react";

function ProjectCard({
  src,
  link,
  h3,
  p,
  firstTool,
  secondTool,
  thirdTool,
  fourthTool,
}) {
  return (
    <a href={link} target="_blank">
      <img className="hover" src={src} alt={`${h3} logo`} />
      <div className="tools">
        {firstTool && (
          <img className="toolsImg" src={firstTool} alt="tool logo" />
        )}

        {secondTool && (
          <img className="toolsImg" src={secondTool} alt="tool logo" />
        )}

        {thirdTool && (
          <img className="toolsImg" src={thirdTool} alt="tool logo" />
        )}

        {fourthTool && (
          <img className="toolsImg" src={fourthTool} alt="tool logo" />
        )}
      </div>
      <h3>{h3}</h3>
      <p>{p}</p>
    </a>
  );
}

export default ProjectCard;
