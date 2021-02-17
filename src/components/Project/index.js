import React from 'react';

function Project (props) {
  return (
    <div className="grid-item" style={props.style}>
      <div class="projectName" className="project-info">
        <a href={props.liveUrl} target="_blank" rel="noreferrer" className="project-title">{props.name}</a>
        <br></br>
        <br></br>
        <a href={props.gitUrl} target="_blank" rel="noreferrer">
          <p className="project-title">Github</p>
        </a>
      </div>
    </div>
  )
}

export default Project;