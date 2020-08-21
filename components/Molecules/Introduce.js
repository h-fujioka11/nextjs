import React from "react";
import Link from "next/link";
import Fade from 'react-reveal/Fade';

const Introduce = props => {
  return (
    <div className={"m-introduce"}>
      <Fade bottom cascade>
        <section className={"m-introduce__inner"}>
          <h1 className={"m-introduce__title"}>わたしについて</h1>
          <dl className={"m-introduce__item"}>
            <dt><img src={"/img/about/img01.png"} /></dt>
            <dd>スタートアップ・ウェブサービス企業を中心としたクライアントの「UIデザイン」「プロトタイプ制作」「フロントエンド実装」を提供します。ウェブサイトの改善提案やPDCA運用支援を行い、お客さまのウェブを活用したビジネス活動をサポートいたします。</dd>
          </dl>
          <dl className={"m-introduce__table"}>
            <dt>屋号</dt>
            <dd>藤岡造形デザイン</dd>
            <dt>所在地</dt>
            <dd>〒154-0002 東京都世田谷区下馬</dd>
            <dt>事業内容</dt>
            <dd>グラフィックデザイン、コンピュータグラフィックの企画、立案、制作</dd>
          </dl>
        </section>
      </Fade>

      <style jsx>{`
         .m-introduce {
           background: #f1f1f1;
           padding: 24px 24px 32px;
         }
         .m-introduce__title {
           font-size: 2.8rem;
           @media screen and(min-width:1100px) {
             padding-bottom: 16px;
           }
           @media screen and(max-width:1100px) {
             font-size: 2rem;
             line-height: 2;
             margin-bottom: 16px;
           }
         }
         .m-introduce .m-introduce__inner {
           @media screen and(min-width:1100px) {
             padding: 50px 0 100px 240px;
             background: url("/img/top/intro_text02.png") 0 80px no-repeat;
             background-size: 100px auto;
             width: 1100px;
             margin: 0 auto;
           }
         }
         .m-introduce__item {
           @media screen and(min-width:1100px) {
             display: flex;
             margin-bottom: 24px;
           }
           margin-bottom: 40px;
         }
         .m-introduce__item dt {
           max-width: 280px;
           width: 280px;
           padding-right: 24px;
           @media screen and(max-width:1100px) {
             display: none;
           }
         }
         .m-introduce__item dt img {
           border-radius: 50%;
         }
         .m-introduce__item dd {
           @media screen and(max-width:1100px) {
             font-size: 1.6rem;
             line-height: 2.2;
           }
         }
         .m-introduce__table dt {
           font-weight: bold;
           line-height: 2rem;
           @media screen and(max-width:1100px) {
             line-height: 3rem;
           }
         }
         .m-introduce__table dd {
           padding-bottom: 16px;
           @media screen and(max-width:1100px) {
             line-height: 1.6;
           }
         }
         
      `}</style>
    </div>
  )
}
export default Introduce;