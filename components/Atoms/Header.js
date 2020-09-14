import React, { Component } from "react";
import Link from "next/link";

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      openFlag: true
    }
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick () {
    const NAVI = document.querySelector(".js-navigation");
    const ICON = document.querySelector(".js-menu_icon");
    const WRAP = document.querySelector(".container");
    const ITEM = document.createElement("div");
    ITEM.classList.add("js-overlay");
    NAVI.classList.toggle("is-open");
    ICON.classList.toggle("is-open");

    if(NAVI.classList.contains('is-open')) {
      WRAP.insertBefore(ITEM,WRAP.firstElementChild);
    } else {
      WRAP.removeChild(WRAP.childNodes.item(0));
    }
    this.overlayOpen(NAVI,ICON,WRAP,ITEM);
  }
  overlayOpen = (NAVI,ICON,WRAP,ITEM) => {
    ITEM.onclick = function () {
      WRAP.removeChild(WRAP.childNodes.item(0));
      NAVI.classList.toggle("is-open");
      ICON.classList.toggle("is-open");
    }
  }
  render() {
    if(this.props.NotNavigation) {
      return (
        <header className={"a-header--secondary"}>
          <h1 className={"a-header__logo is-pc"}>
            <Link href={"/"}>
              <a><img src={"/img/logo.svg"} /></a>
            </Link>
          </h1>
          <h1 className={"a-header__logo is-sp"}>
            <Link href={"/"}>
              <a><img src={"/img/logo.svg"} /></a>
            </Link>
          </h1>
        </header>
      )
    } else {
      return (
        <header className={"a-header"}>
          <h1 className={"a-header__logo"}>
            <Link href={"/"}>
              <a><img src={"/img/logo.svg"} /></a>
            </Link>
          </h1>
          <div className={"a-header__btn js-menu_icon"} onClick={this.handleClick}>
            <span></span>
            <span></span>
            <span></span>
          </div>
          <nav className={"a-header__nav js-navigation"}>
            <ul>
              <li>
                <Link href="/about">
                  <a>わたしについて</a>
                </Link>
              </li>
              <li>
                <Link href="/works">
                  <a>これまでやってきたこと</a>
                </Link>
              </li>
              <li>
                <Link href="/contact">
                  <a>お問い合わせ</a>
                </Link>
              </li>
            </ul>
          </nav>
          <style jsx>{`
            a {
              color: black;
            }
      `  }</style>
        </header>
      )
    }
  }
}
export default Header;
