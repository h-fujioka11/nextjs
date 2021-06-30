import React from "react";
import Link from "next/link";
import Fade from 'react-reveal/Fade';

const Introduce = props => {
  return (
    <div className={"m-introduce"}>
      <Fade bottom cascade>
        <section className={"m-introduce__inner"}>
          <h1 className={"m-introduce__title"}>わたしについて</h1>
          <p className={"backgroundTitle"}><span>使命感を</span>もって<br />誠実に取り組みます。</p>
          <dl className={"m-introduce__item"}>
            <dt><img src={"/img/about/img01.png"} /></dt>
            <dd>スタートアップ・ウェブサービス企業を中心としたクライアントの「UIデザイン」「プロトタイプ制作」「フロントエンド実装」を提供します。ウェブサイトの改善提案やPDCA運用支援を行い、お客さまのウェブを活用したビジネス活動をサポートいたします。</dd>
          </dl> 
          <dl className={"m-introduce__table"}>
            <dt>屋号</dt>
            <dd>edition</dd>
            <dt>所在地</dt>
            <dd>〒154-0002 東京都世田谷区</dd>
            <dt>事業内容</dt>
            <dd>コンピュータグラフィックの企画、立案、制作</dd>
          </dl>
        </section>
      </Fade>

      <style jsx>{`
         .m-introduce {
           background: #f1f1f1;
           @media screen and(max-width:1100px) {
            padding: 24px 24px 32px;
           }
         }
         .m-introduce__inner .backgroundTitle {
          font-size: 36px;
          writing-mode: vertical-rl;
          font-weight: 600;
          line-height: 80px;
          position: absolute;
          left: 0;
          top: 80px;
          color: #333;
          white-space: nowrap;
          font-family: "FOT-筑紫Aオールド明朝 Pr6 R";
          @media screen and(max-width:1100px) {
            display: none;
          }
         }
         .m-introduce__inner .backgroundTitle span {
          color: #518ba2;
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
          position: relative;
           @media screen and(min-width:1100px) {
             padding: 50px 0 100px 280px;
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
           line-height: 2.6;
           @media screen and(min-width:1100px) {
             margin-top: -12px;
           }
           @media screen and(max-width:1100px) {
             font-size: 1.4rem;
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