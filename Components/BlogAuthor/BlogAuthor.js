import React from "react";
import { OverlayTrigger, Tooltip } from "react-bootstrap";

export default function ({ authorInfo }) {
  const { name, imgUrl, bio } = authorInfo;

  const tooltip = (
    <Tooltip id="tooltip">
      <p className="p-2">{bio}</p>
    </Tooltip>
  );

  return (
    <div>
      <OverlayTrigger placement="right" overlay={tooltip}>
        <img className="imgauthor" src={imgUrl} alt={name}></img>
      </OverlayTrigger>
      <span className="mx-2"><a>{name}</a></span>
    </div>
  );
}
