import Head from "next/head";
import "../../styles/style.scss";
import Header from "../../components/Atoms/Header";
import React from "react";
import Fade from "react-reveal/Fade";
import Flip from "react-reveal/Flip";
import Link from "next/link";
import Conversation from "../../components/Molecules/Conversation";
import Introduce from "../../components/Molecules/Introduce";
import Heads from "../../components/Atoms/Head";

const AboutDetail = (props) => {
  return (
    <div className="container">
      <Heads
        title={"自己紹介 | UIデザイン"}
        description={
          "デジタルサービスのUI画面の制作支援を​受託する個人事業主です"
        }
        keyword={"UIデザイン, ウェブデザイン"}
        image={"https://editioninc.tokyo/img.jpg"}
        url={"https://editioninc.tokyo/about"}
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
              <p>
                都内のWeb・MotionGraphicsに関するプロダクションに入社しキャリアスタート。Vidal
                Sassoon（ヴィダルサスーン）やStarbucks
                Coffee（スターバックス）CMキャンペーンサイトのデザイン・モーション制作にアシスタントデザイナーとして関わる。
              </p>
              <p>
                退社後、都内数社の制作プロダクション・スタートアップ企業に在籍し、アパレルブランド、大型SCサイトなどのブランドサイトリニューアルに関わりました。
              </p>
              <p>
                2016年にフリーランスへ。現在までメガベンチャー・スタートアップ企業にフリーランスとして参画中。
              </p>
            </div>
            <div className={"o-static__inner"}>
              <h2 className={"title"}>
                デザインモック作りだけでなく実装も得意
              </h2>
              <p>
                近年の私のハードスキルにおける特徴は、「インブラウザ・デザイン」を高レベルで実践できることにあります。これは近年のプロダクト開発で得たスキルです。{" "}
              </p>
              <p>
                インブラウザ・デザインは、ソースコードを書きながら実際のブラウザ上で実装アイディアを起こしていく手法を言いますが、最大のメリットは実際のブラウザやアプリ上での描画をリアルかつスピーディに再現できることです。
              </p>
              <p>
                Figmaなどのデザインツールで静的ラフデザインを展開する手法だけではなく、実装に落とし込んだ際のプロトタイピングや実装パーツをコード上で作ることも可能で、そのあたりのスキルセットに対して一定量の評価をいただいています。
              </p>
            </div>
            <div className={"o-static__inner"}>
              <h2 className={"title"}>
                プロダクト開発におけるエンジニアとの協業経験が豊富
              </h2>
              <p>
                様々なウェブメディアやサービスサイトの開発に関わっており、高水準のクオリティで対応可能。またフロント・サーバーサイドエンジニアとの協業経験も豊富にあり、現代のプロダクト・サービス開発に必要とされるフロントエンドデザインと知識を提供することをお約束します。
              </p>
            </div>
            <div className={"o-static__inner"}>
              <h2 className={"title"}>
                結果として、クライアントやメンバー間のハブになれる
              </h2>
              <p>
                決してフルスタックではありませんが、様々なスキルセットに対する理解は持っているので、クライアントもしくはデザイナー・エンジニアといった開発メンバーの間の繋ぎの役回りに回ることも多いです。
              </p>
              <p>
                クライアントとの交渉まわりも含めた、制作・開発マネージメント・アサインといったディレクション業に関してもお任せください。
              </p>
            </div>
            <div className={"o-static__inner"}>
              <h2 className={"title"}>これまでやってきたこと</h2>
              <p>
                サービス運用・取引実績など、一部ですがこちらから参照ください。
              </p>
              <p style={{ color: "#518ba2", textDecoration: "underline" }}>
                <Link href={"/works"}>
                  <a>実績をみる</a>
                </Link>
              </p>
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
  );
};

export default AboutDetail;
