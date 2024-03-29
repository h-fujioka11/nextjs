import Head from "next/head";
import "../styles/style.scss";
import Header from "../components/Atoms/Header";
import React from "react";
import Fade from "react-reveal/Fade";
import Flip from "react-reveal/Flip";
import Conversation from "../components/Molecules/Conversation";
import Introduce from "../components/Molecules/Introduce";
import Heads from "../components/Atoms/Head";
import WorkList from "../components/Atoms/WorkList";
const WorkTitle = {
  marginBottom: "16px",
};
const Full = [
  "/img/works/full/img01.png",
  "/img/works/full/img02.png",
  "/img/works/full/img03.png",
  "/img/works/full/img04.png",
];
const Food = [
  "/img/works/food/img01.png",
  "/img/works/food/img02.png",
  "/img/works/food/img03.png",
  "/img/works/food/img04.png",
];
const Akasaka = [
  "/img/works/akasaka/img01.png",
  "/img/works/akasaka/img02.png",
  "/img/works/akasaka/img03.png",
  "/img/works/akasaka/img04.png",
];
const Kioi = [
  "/img/works/kioi/img01.png",
  "/img/works/kioi/img02.png",
  "/img/works/kioi/img03.png",
  "/img/works/kioi/img04.png",
];
const Works = (props) => {
  return (
    <div className="container">
      <Heads
        title={"これまでやってきたこと | UIデザイン"}
        description={
          "デジタルサービスのUI画面の制作支援を​受託する個人事業主です"
        }
        keyword={"UIデザイン, ウェブデザイン"}
        image={"https://editioninc.tokyo/img.jpg"}
        url={"https://editioninc.tokyo/works"}
      />
      <main>
        <Header />
        <section className={"o-static"}>
          <Flip bottom cascade>
            <h1 className={"o-static__title"}>これまでやってきたこと</h1>
          </Flip>
          <Fade bottom cascade>
            <section className={"o-static__inner"}>
              <h2 className={"title"} style={WorkTitle}>直近のサービス運用・取引実績</h2>
              <ul className={"sectionWork__text"}>
                <li>株式会社ミクシィ</li>
                <li>ストリートアカデミー株式会社</li>
                <li>レバレジーズ株式会社</li>
                <li>シェアクラ（宅配型トランクルーム）</li>
                <li>株式会社日宣</li>
                <li>株式会社松森</li>
                <li>HWC (ホームワーカーズコミュニティ)</li>
                <li>以上一部抜粋</li>
              </ul>
            </section>
          </Fade>
          <Fade bottom cascade>
            <section className={"o-static__inner"}>
              <h2 className={"title"}>フルスロットル</h2>
              <p className={"text"}>https://www.fullthrottle.co.jp/</p>
              <WorkList data={Full} />
            </section>
          </Fade>
          <Fade bottom cascade>
            <section className={"o-static__inner"}>
              <h2 className={"title"}>赤坂クラシックハウス</h2>
              <p className={"text"}>https://akasakaprince.com/</p>
              <WorkList data={Akasaka} />
            </section>
          </Fade>
          <Fade bottom cascade>
            <section className={"o-static__inner"}>
              <h2 className={"title"}>東京ガーデンテラス紀尾井町</h2>
              <p className={"text"}>https://www.tgt-kioicho.jp/residence/</p>
              <WorkList data={Kioi} />
            </section>
          </Fade>
          <Fade bottom cascade>
            <section className={"o-static__inner"}>
              <h2 className={"title"}>デリステーションX</h2>
              <p className={"text"}>https://deli-station.jp/kitchen</p>
              <WorkList data={Food} />
            </section>
          </Fade>
          <Fade bottom cascade>
            <section className={"o-static__inner"}>
              <h2 className={"title"} style={WorkTitle}>
                過去の実績
              </h2>
              <p className={"o-static__text"}>
                表参道ヒルズ, 小田急SC, ジョンブル, ナイキジャパンSKU,
                月間メンズアデランス, minx, nico and …Chice（チョイス),
                コールハーン, ロッテオンラインECサイト, 吉日屋ECサイト,
                スターバックスキャラメルフラペチーノカスタマイズ, エポスネット,
                横浜アリーナ, アクアシティお台場, 横浜コンベンションビューロ etc
              </p>
            </section>
          </Fade>
        </section>
        <Introduce />
        <Conversation />
      </main>
      <style jsx>{`
        .o-static__inner .title {
          line-height: 1.4;
          padding-bottom: 0;
          @media screen and(max-width:1100px) {
            margin-bottom: 0;
          }
        }
        .o-static__inner .text {
          font-size: 1.4rem;
          opacity: 0.6 !important;
        }
        .mb--40 {
          margin-bottom: 40px;
        }
      `}</style>
    </div>
  );
};
export default Works;
