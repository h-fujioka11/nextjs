import Head from 'next/head'
import "../styles/style.scss";
import Header from "../components/Atoms/Header";
import React from "react";
import Fade from 'react-reveal/Fade';
import Flip from 'react-reveal/Flip';
import Link from "next/link";
import Conversation from "../components/Molecules/Conversation";
import Introduce from "../components/Molecules/Introduce";
import Heads from "../components/Atoms/Head";
const Works = (props) => {
  return (
    <div className="container">
      <Heads
        title={'藤岡造形デザインとは | UIデザイン | 藤岡造形デザイン'}
        description={'藤岡造形デザインはデジタルサービスのUI画面の制作支援を​受託する個人事業主です'}
        keyword={'UIデザイン, ウェブデザイン'}
        image={'https://editioninc.tokyo/img.jpg'}
        url={'https://editioninc.tokyo/about'}
      />
      <main>
        <Header />
        <section className={"o-static"}>
          <Fade bottom cascade>
            <Flip bottom cascade>
              <h1 className={"o-static__title"}>わたしについて</h1>
            </Flip>
            <div className={"o-static__inner"}>
              <h2 className={"title"}>これまでのキャリアに関して</h2>
              <p>2009年より、都内ウェブプロダクションでデザイナー及びFlasher(フラッシュを扱う人)としてキャリアをスタート。広告訴求の色が強かった当時のWebサイトの需要から、TVCMと連動したウェブプロモーション(ヴィダルサスーンやスターバックスなど)やメディア制作に携わり、近年は都内ITベンチャー企業数社のウェブサービス開発・提案などに携わっています。</p>
            </div>
            <div className={"o-static__inner"}>
              <h2 className={"title"}>デザイナーですがエンジニアとの協業経験を豊富にもっています</h2>
              <p>様々なウェブメディアやサービスサイトの開発に関わっており、画面デザインをつくる事に関しては高水準のクオリティで対応可能です。エンジニアとの協業経験が豊富にあるため現代のデザイナーが開発チームに必要な一定スキルを提供できます。</p>
            </div>
            <div className={"o-static__inner"}>
              <h2 className={"title"}>デザインだけでなく実装も得意です</h2>
              <p>私のハードスキルにおける特徴は、「インブラウザ・デザイン」を高レベルで実践できることにあります。「インブラウザ・デザイン」とは、従来のPhotoshopやIllustratorで一枚画像にしてラフデザインを展開するような手法ではなく、ソースコードを書きながら実際のブラウザ上でラフを起こしていく手法です。</p>
              <p> Uiデザインを作る場合は全体像や実装パーツをコードを書きながら作ることも可能。デザイナーの中にはデザインとコーディングを分業して対応するケースもありますが、私の場合はそれも当てはまりません。デザイン・コーディング（コードの精度も含め）とも高水準で対応可能です。</p>
            </div>
            <div className={"o-static__inner"}>
              <h2 className={"title"}>これまでやってきたこと</h2>
              <p>直近のサービス運用・取引実績などの一部は<span style={{color:"#518ba2",textDecoration:"underline"}}><Link href={"/works"}><a>こちら</a></Link></span>。その他に関しては問い合わせフォームよりご連絡くださいませ。</p>
            </div>
          </Fade>
        </section>
        <Introduce />
        <Conversation />
      </main>
      <style jsx>{`
        .o-static__title {
          width: 540px;
          margin: auto;
          @media screen and(max-width:1100px) {
            width: 100%;
          }
        }
      `}</style>
    </div>
  )
}
export default Works;
