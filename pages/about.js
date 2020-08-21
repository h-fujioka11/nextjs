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
        title={'自己紹介 | UIデザイン'}
        description={'デジタルサービスのUI画面の制作支援を​受託する個人事業主です'}
        keyword={'UIデザイン, ウェブデザイン'}
        image={'https://editioninc.tokyo/img.jpg'}
        url={'https://editioninc.tokyo/about'}
      />
      <main>
        <Header />
        <section className={"o-static"}>
          <Fade bottom cascade>
            <Flip bottom cascade>
              <h1 className={"o-static__title"}>自己紹介</h1>
            </Flip>
            <div className={"o-static__inner"}>
              <h2 className={"title"}>これまでのキャリアに関して</h2>
              <p>2009年より、都内ウェブプロダクションでデザイナー及びFlasher(フラッシュを扱う人)としてキャリアをスタート。広告訴求の色が強かった当時のウェブサイトの需要から、TVCMと連動したウェブプロモーション(ヴィダルサスーンやスターバックスなど)やメディア制作に携わり、近年は都内ITベンチャー企業数社のウェブサービス開発・提案などに携わっています。</p>
            </div>
            <div className={"o-static__inner"}>
              <h2 className={"title"}>プロダクト開発におけるエンジニアとの協業経験が豊富</h2>
              <p>様々なウェブメディアやサービスサイトの開発に関わっており画面デザインをつくる事に関しては高水準のクオリティで対応可能です。またプロダクト開発におけるエンジニアとの協業経験も豊富にあり、現代のデザイナーが必要とされるプロダクト開発スキルをもって提供することをお約束いたします。</p>
            </div>
            <div className={"o-static__inner"}>
              <h2 className={"title"}>デザインだけでなく実装も得意です</h2>
              <p>私のハードスキルにおける特徴は、「インブラウザ・デザイン」を高レベルで実践できることにあります。この「インブラウザ・デザイン」とはソースコードを書きながら実際のブラウザ上でラフを起こしていく手法のことです。</p>
              <p>従来のPhotoshopやIllustratorで一枚画像にしてラフデザインを展開するような手法だけではなく、UIデザインを作る場合は全体像や実装パーツをコードを書きながら作ることも可能です。</p>
              <p> デザイナーの中にはデザインとコーディングを分業して対応するケースもありますが、私の場合はそれも当てはまりません。デザイン・コーディング（コードの精度も含め）とも高水準で対応可能です。</p>
            </div>
            <div className={"o-static__inner"}>
              <h2 className={"title"}>これまでやってきたこと</h2>
              <p>直近のサービス運用・取引実績などの一部はこちらから参照ください。</p>
              <p style={{color:"#518ba2",textDecoration:"underline"}}><Link href={"/works"}><a>実績をみる</a></Link>。</p>
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

