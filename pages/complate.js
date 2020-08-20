import React from "react";
import Head from 'next/head'
import Header from "../components/Atoms/Header";
import { Container } from '@material-ui/core';
import "../styles/style.scss";
import Link from "next/link";
const Complate = (props) => {
  return (
    <div className="container">
      <Head>
        <title>お問い合わせ完了 | UIデザイン | 藤岡造形デザイン</title>
      </Head>
      <main>
        <Header NotNavigation={true} />
        <section className={"o-static"}>
          <h1 className={"o-static__title"}>送信が完了しました</h1>
          <Container maxWidth={"sm"} style={{textAlign: "center"}} >
            <p style={{marginBottom: "40px", lineHeight:"2"}}>お問い合わせいただきありがとうございます。折り返し、担当者よりご連絡いたしますので恐れ入りますが、しばらくお待ちください。</p>
            <Link href={"/"}>
              <a style={{textDecoration: "underline"}}>トップページへ</a>
            </Link>
          </Container>
        </section>
      </main>
    </div>
  )
}
export default Complate;