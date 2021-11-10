import React from "react";
import Link from "next/link";
import Fade from 'react-reveal/Fade';
import Button from '@mui/material/Button';

const Conversation = (props) => {
  return (
    <Fade bottom cascade>
      <div className={"m-conversation"}>
        <p className={"m-conversation__title"}>なにはともあれ、<br />まずはざっくばらんにご相談いただけると嬉しいです。<br />ぜひ、一緒にお仕事しましょう。</p>
        <p className={"m-conversation__img"}><img src={"/img/logo.svg"} /></p>
        <Link href="/contact">
          <a className={"a-btn"}>お問い合わせ</a>
        </Link>
        <style jsx>{`
        .m-conversation {
          padding: 60px 0 80px;
          text-align: center;
          @media screen and(max-width:1100px) {
            padding: 40px 24px;
          }
        }
        .m-conversation__title {
          margin-bottom: 40px;
      
          @media screen and(max-width:1100px) {
            line-height: 2;
          }
        }
        .m-conversation__img {
          width: 80px;
          margin: auto;
          margin-bottom: 40px;
          @media screen and(max-width:1100px) {
            width: 60px;
          }
        }
        .a-btn {
          width: 280px;
          margin: auto;
        }
      `}</style>
      </div>
    </Fade>
  )
}
export default Conversation;
