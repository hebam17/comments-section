import React from "react";
import Edit from "./Edit";
import Reply from "./Reply";
import Scores from "./Scores";

export default function Comment() {
  return (
    <div>
      <Scores />
      <Reply active={false} />
      <Edit />
    </div>
  );
}
