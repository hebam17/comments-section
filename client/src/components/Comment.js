import React from "react";
import Delete from "./Delete";
import Edit from "./Edit";
import Info from "./Info";
import Reply from "./Reply";
import Scores from "./Scores";

export default function Comment() {
  return (
    <div>
      <Scores />
      <Reply active={false} />
      <Edit />
      <Delete />
      <Info profileUser={"you-pic"} />
    </div>
  );
}
