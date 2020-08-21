import React from "react";

  const WorkList = (props) => {
  const WorkListItem = props.data.map((value,text) => {
    return (
      <img src={value} key={text} />
    )
  })
  return (
    <div className={"m-flex--4"}>
      {WorkListItem}
    </div>
  )
}
export default WorkList;
