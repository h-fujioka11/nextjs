import React, { Component } from "react";

class SliderItem extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const Src = this.props.data.map((value) => {
      return (
        <li>
          <img src={value} />
        </li>
      )
    })
    return (
      <ul>
        {Src}
      </ul>
    )
  }
}
export default SliderItem;
