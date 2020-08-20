import React, { Component } from "react";
class SliderThumbnail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      urlData: [
        "/img/archive/archive01.png",
        "/img/archive/archive02.png",
        "/img/archive/archive03.png",
        "/img/archive/archive04.png",
        "/img/archive/archive05.png"
      ]
    }
  }
  componentDidMount() {
    this.handler();
  }
  handler = () => {
    const WRAP = document.querySelector(".js-loopSlider");
    const CLONE_ITEM = WRAP.firstElementChild.cloneNode(true);
    WRAP.appendChild(CLONE_ITEM);
  }
  render() {
    const WRAP_STYLE = {
      width: "100%",
      overflow: "hidden",
      display: "flex"
    }
    const WRAP_INNER_STYLE = {
      display: "flex"
    }
    const ITEM_STYLE = {
      minWidth: "320px"
    }
    const SRC = this.state.urlData.map((value,index) => {
      return(
        <p key={index} style={ITEM_STYLE} className={"js-loopSlider__item"}>
          <img src={value} />
        </p>
      )
    });
    return (
      <div style={WRAP_STYLE} className={"js-loopSlider"}>
          <div style={WRAP_INNER_STYLE} className={"js-loopSlider__inner"}>
            {SRC}
          </div>
        <style jsx>{`
        .js-loopSlider {
          background: #f1f1f1;
        }
        @keyframes loop {
          0% {transform: translateX(100%);}
            to {
              transform: translateX(-100%);
            }
          }
        @keyframes loop2 {
          0% {
            transform: translateX(0);
          }
          to {
            transform: translateX(-200%);
          }
        }
        .js-loopSlider__inner:first-child {
          animation: loop 70s -35s linear infinite;
         }
         .js-loopSlider__inner:last-child {
           animation: loop2 70s linear infinite;
         }
        `}</style>
      </div>
    )
  }
}
export default SliderThumbnail;
