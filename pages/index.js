import Header from "../components/Atoms/Header";
import SliderThumbnail from "../components/Atoms/Slider_thumbnail";
import Conversation from "../components/Molecules/Conversation";
import Introduce from "../components/Molecules/Introduce";
import React from "react";
import Fade from 'react-reveal/Fade';
import Link from "next/link";
import "../styles/style.scss";
import Heads from "../components/Atoms/Head";
import WorkList from "../components/Atoms/WorkList";
const Home = (props) => {
  const Link_Style = {
    textDecoration: "underline",
  }
  const WorkData = [
    "/img/works/full/img01.png",
    "/img/works/full/img02.png",
    "/img/works/akasaka/img01.png",
    "/img/works/kioi/img01.png"
  ]
  return (
    <div className="container">
      <Heads
        title={'トップページ | UIデザイン'}
        description={'フロントデザイン制作を受託する個人事業主です'}
        keyword={'UIデザイン, ウェブデザイン'}
        image={'https://editioninc.tokyo/img.jpg'}
        url={'https://editioninc.tokyo'}
      />
      <main>
        <Header />
        <SliderThumbnail />
        <div className={"sectionArea"}>
          <Fade bottom cascade>
            <section className={"sectionArea__inner"}>
              <h1 className={"sectionArea__title"}>フロントデザイン制作を受託する個人事業主です</h1>
              <p style={{marginBottom: "32px"}}>スマートフォンアプリやウェブのUI・フロントエンドデザインを提供している個人事業主です。ウェブサービスの改善や新規事業の立ち上げに対して、UI・フロントエンドデザイン分野の専門的な知識を生かした設計・スタイリングを展開し、サービスとユーザーを繋ぐ理想の体験を提供したいと思っています。</p>
              <p style={Link_Style}>
                <Link href={"/about"}>
                  <a>わたしについて</a>
                </Link>
              </p>
              <p className={"backgroundTitle"}><span>フロント実装も含め</span><br />お任せください。</p>              
            </section>
          </Fade>
        </div>
        <div className={"sectionWork"}>
          <Fade bottom cascade>
            <section className={"sectionArea__inner"}>
              <h1 className={"sectionArea__title"}>これまでやってきたこと</h1>
              <div className={"flexArea"}>
                <WorkList data={WorkData} />
              </div>
              <p style={{marginBottom:"24px"}} className={"sectionWork__text"}>ウェブサービスの運用・開発をはじめ、企業のコーポレートサイトやスマートフォンアプリなどフロントデザイン提供は多岐に渡ります。UIデザイン・設計の他にもエンジニアとの協業経験も豊富にあり、施策に対する実装に関しても幅広く対応可能です。</p>
              <p style={Link_Style}>
                <Link href={"/works"}>
                  <a>実績をみる</a>
                </Link>
              </p>
            </section>
            <section className={"sectionArea__inner--archive"}>
              <h1 className={"sectionArea__title"}>直近の運用・取引実績</h1>
              <ul className={"sectionWork__text"}>
                <li>株式会社ミクシィ</li>
                <li>パーソルキャリア</li>
                <li>ストリートアカデミー株式会社</li>
                <li>レバレジーズ株式会社</li>
                <li>シェアクラ（宅配型トランクルーム）</li>
                <li>株式会社日宣</li>
                <li>Noll +</li>
                <li>HWC (ホームワーカーズコミュニティ)</li>
                <li>以上一部抜粋</li>
              </ul>
            </section>
          </Fade>
        </div>
        <Introduce />
        <Conversation />
      </main>
      <style jsx>{`
        .sectionArea {
          background: #f1f1f1;
        }
        .sectionArea__inner {
          position: relative;
        }
        .sectionArea__inner h1,
        .sectionArea__inner--archive h1 {
          font-size: 2.6rem;
          @media screen and(max-width:1100px) {
            font-size: 2rem;
            line-height: 1.8;
            margin-bottom: 16px;
          }
        }
        .sectionArea__inner p {
          width: 60%;
          @media screen and(max-width:1000px) {
            width: 100%;
            font-size: 1.4rem;
            line-height: 2.2;
          }
        }
        .sectionArea .sectionArea__inner {
          @media screen and(max-width:1100px) {
            padding: 24px 16px 40px;
            width: 100%;
          }
          @media screen and(min-width:1100px) {
            padding: 80px 0 140px;
            width: 880px;
            margin: 0 auto;
          }
        }
        .sectionWork .sectionArea__inner {
          padding: 50px 0;
          width: 1100px;
          margin: 0 auto;
          @media screen and(max-width:1100px) {
            padding: 24px 16px 40px;
            width: 100%;
          }
         }
         .sectionArea__inner .backgroundTitle {
          font-size: 36px;
          writing-mode: vertical-rl;
          font-weight: 600;
          line-height: 90px;
          position: absolute;
          right: 30px;
          top: 80px;
          color: #333;
          white-space: nowrap;
          font-family: "FOT-筑紫Aオールド明朝 Pr6 R";
          @media screen and(max-width:1100px) {
            display: none;
          }
         }
         .sectionArea__inner .backgroundTitle span {
          color: #518ba2;
         }
         .sectionWork .sectionArea__title {
          @media screen and(min-width:1100px) {
            padding-bottom: 24px;
          }
         }
         .sectionWork .sectionArea__inner--archive {
           width: 1100px;
           margin: 0 auto;
           padding-bottom: 80px;
           @media screen and(max-width:1100px) {
            padding: 24px 16px 40px;
            width: 100%;
            border-top: 1px solid #ccc;
          }
         }
         .flexArea {
           margin-bottom: 50px;
           @media screen and(max-width:1100px) {
             margin-bottom: 24px;
           }
         }
         .sectionWork__text {
           @media screen and(min-width:1100px) {
             width: 50%;
           }
         }
         .sectionWork__text li {
           @media screen and(max-width:1100px) {
             font-size: 1.4rem;
             line-height: 1.4;
             margin-bottom: 12px;
           }
         }
      `}</style>
    </div>
  )
}
export default Home;

