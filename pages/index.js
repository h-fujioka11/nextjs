import Header from "../components/Atoms/Header";
import SliderThumbnail from "../components/Atoms/Slider_thumbnail";
import Conversation from "../components/Molecules/Conversation";
import Introduce from "../components/Molecules/Introduce";
import React from "react";
import Fade from 'react-reveal/Fade';
import Link from "next/link";
import "../styles/style.scss";
import Heads from "../components/Atoms/Head";

const Home = (props) => {
  const Link_Style = {
    textDecoration: "underline",
  }
  return (
    <div className="container">
      <Heads
        title={'トップページ | UIデザイン | 藤岡造形デザイン'}
        description={'藤岡造形デザインはデジタルサービスのUI画面の制作支援を​受託する個人事業主です'}
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
              <h1 className={"sectionArea__title"}>UI設計の制作支援を​受託する個人事業主です</h1>
              <p style={{marginBottom: "32px"}}>私は屋号名「藤岡造形デザイン」としてスマートフォンアプリやウェブのUIデザインを提供している個人事業主です。WEBサービスの改善や新規事業の立ち上げに対し、デザイン分野の専門性を生かしてサービスの中での理想の体験を設計・スタイリングしていきます。</p>
              <p style={Link_Style}>
                <Link href={"/about"}>
                  <a>わたしについて</a>
                </Link>
              </p>
            </section>
          </Fade>
        </div>
        <div className={"sectionWork"}>
          <Fade bottom cascade>
            <section className={"sectionArea__inner"}>
              <h1 className={"sectionArea__title"}>これまでやってきたこと</h1>
              <div className={"m-flex--4"}>
                <img src={"/img/works/full/img01.png"} />
                <img src={"/img/works/food/img01.png"} />
                <img src={"/img/works/akasaka/img01.png"} />
                <img src={"/img/works/kioi/img01.png"} />
              </div>
              <p style={{marginBottom:"24px"}} className={"sectionWork__text"}>WEBサービスの運用開発をはじめ、企業のコーポレートサイトなどデザイン提供は多岐に渡ります。デザイン・設計の他にもエンジニアとの協業経験も豊富にあり実装に関しても対応可能です。</p>
              <p style={Link_Style}>
                <Link href={"/works"}>
                  <a>実績をみる</a>
                </Link>
              </p>
            </section>
            <section className={"sectionArea__inner--archive"}>
              <h1 className={"sectionArea__title"}>直近の運用・取引実績</h1>
              <ul className={"sectionWork__text"}>
                <li>Find Job! (株式会社ミクシィ)</li>
                <li>SKILAS DANCE (株式会社ミクシィ)</li>
                <li>シェアクラ（データサイエンスプロフェッショナル株式会社）</li>
                <li>HWC (ホームワーカーズコミュニティ)</li>
                <li>ハタラクティブ (レバレジーズ株式会社)</li>
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
        .sectionArea__inner h1,
        .sectionArea__inner--archive h1 {
          font-size: 2.8rem;
          @media screen and(max-width:1100px) {
            font-size: 2rem;
            line-height: 2;
            margin-bottom: 16px;
          }
        }
        .sectionArea__inner p {
          width: 60%;
          @media screen and(max-width:1000px) {
            width: 100%;
            font-size: 1.6rem;
            line-height: 2.2;
          }
        }
        .sectionArea .sectionArea__inner {
          @media screen and(max-width:1100px) {
            padding: 24px 16px 40px;
            width: 100%;
          }
          @media screen and(min-width:1100px) {
            padding: 70px 0 140px;
            width: 880px;
            margin: 0 auto;
            background: url("/img/top/intro_text.png") 90% 80px no-repeat;
            background-size: 130px auto;
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
         .sectionWork .sectionArea__title {
          @media screen and(min-width:1100px) {
            padding-bottom: 16px;
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
         .m-flex--4 {
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
             font-size: 1.6rem;
             line-height: 1.6;
             margin-bottom: 12px;
           }
         }
      `}</style>
    </div>
  )
}
export default Home;
