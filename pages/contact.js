import React from "react";
import Flip from 'react-reveal/Flip';
import Router from 'next/router'
import Header from "../components/Atoms/Header";
import { useForm } from "react-hook-form";
import { Container, Grid,Radio,RadioGroup,FormControlLabel,FormControl, TextField,TextareaAutosize } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import "../styles/style.scss";
import Heads from "../components/Atoms/Head";

const useStyles = makeStyles((theme) => ({
  root: {
    '& .PrivateNotchedOutline-legendLabelled-4': {
      fontSize: "1.2em",
    },
    '& .MuiFormControlLabel-label': {
      fontSize: 16,
    },
    '& .MuiFormControlLabel-root': {
      marginRight: "24px",
    },
    '& .PrivateNotchedOutline-legendLabelled-6': {
      width: "120px",
    },
  },
  GridItem: {
    marginBottom: "0"
  },
  RadioItem: {
    display: "flex"
  },
  TextAreaItem: {
    border: "1px solid #ccc",
    borderRadius: "4px",
    padding: "8px",
    width: "100%"
  },
  errorItem: {
    color: "#ff0000",
    fontSize: "1.4rem"
  },
  nameItem: {
    fontWeight: "bold",
    fontSize: "1.4rem"
  },
  required: {
    color: "#ff0000"
  }
}));

const Contact = (props) => {
  const classes = useStyles();
  const { register,errors,handleSubmit,reset } = useForm();
  const onSubmit = data => {
    const contact = {
      $company: data.companyname,
      name: data.names,
      $sex: data.sex,
      email: data.mail,
      subject: 'お問い合わせ',
      message: data.textname,
      accessKey: 'e0bce324-531b-4ff6-aed1-4f90b88a37fe' // get your access key from https://www.staticforms.xyz
    }
    const json_text = JSON.stringify(contact);
    const xhr = new XMLHttpRequest;
    xhr.onload = function(){
      var res = xhr.responseText;
      if (res.length>0) Router.push('/complate');
    };
    xhr.onerror = function(){       //エラーが起きた時の処理（非同期）
      alert("error!");
    }
    xhr.open('post', "https://api.staticforms.xyz/submit", true);
    xhr.setRequestHeader('Content-Type', 'application/json');
    xhr.send(json_text);
  };
  return (
    <div className="container">
      <Heads
        title={'お問い合わせ | UIデザイン'}
        description={'デジタルサービスのUI画面の制作支援を​受託する個人事業主です'}
        keyword={'UIデザイン, ウェブデザイン'}
        image={'https://editioninc.tokyo/img.jpg'}
        url={'https://editioninc.tokyo/ontact'}
      />
      <main>
        <Header NotNavigation={true} />
        <section className={"o-static"}>
          <Flip bottom cascade>
            <h1 className={"o-static__title"}>業務に関するお問い合わせ</h1>
          </Flip>
          <form
            action="https://api.staticforms.xyz/submit"
            className={classes.root}
            onSubmit={handleSubmit(onSubmit)}>
            <Container maxWidth={"md"}>
              <p style={{textAlign:"left", color: "#333", marginBottom: "24px", fontSize:"1.2rem", fontWeight: "bold"}}>入力内容は<span style={{color:"#ff0000"}}>すべて必須</span>です。</p>
              <Grid container spacing={2}>
                <Grid item xs={12} className={classes.GridItem}>
                  <p className={classes.nameItem}>会社名・団体名<span className={classes.required}>（必須）</span></p>
                  <TextField
                    label="会社・団体名"
                    id="outlined-margin-none"
                    fullWidth
                    inputProps={{
                      style: {fontSize: 16}
                    }}
                    InputLabelProps={{style: {fontSize: 16}}}
                    defaultValue=""
                    helperText=""
                    variant="outlined"
                    name="companyname"
                    inputRef={register({required: true})}
                  />
                  <p className={classes.errorItem}>{errors.companyname && errors.companyname.type === "required" && "会社・団体名の入力は必須です"}</p>
                </Grid>
                <Grid item xs={12} className={classes.GridItem}>
                  <div>
                    <p className={classes.nameItem}>お名前<span className={classes.required}>（必須）</span></p>
                    <TextField
                      label="お名前"
                      id="outlined-margin-none"
                      fullWidth
                      inputProps={{
                        style: {fontSize: 16}
                      }}
                      InputLabelProps={{style: {fontSize: 16}}}
                      defaultValue=""
                      helperText=""
                      variant="outlined"
                      name="names"
                      autoComplete="name"
                      inputRef={register({required: true})}
                    />
                    <p className={classes.errorItem}>{errors.names && errors.names.type === "required" && "名前の入力は必須です"}</p>
                  </div>
                </Grid>
                <Grid item xs={12} className={classes.GridItem}>
                  <div>
                    <p className={classes.nameItem}>性別<span className={classes.required}>（必須）</span></p>
                    <FormControl component="fieldset">
                      <RadioGroup>
                        <div className={classes.RadioGroup}>
                          <FormControlLabel value="female" control={<Radio />} label="男性" name="sex" value="female" autoComplete="sex" inputRef={register({required: true})} />
                          <FormControlLabel value="male" control={<Radio />} label="女性" name="sex" value="male" autoComplete="sex" inputRef={register({required: true})} />
                        </div>
                      </RadioGroup>
                    </FormControl>
                    <p className={classes.errorItem}>{errors.sex && errors.sex.type === "required"&& "性別を選択してください"}</p>
                  </div>
                </Grid>
                <Grid item xs={12} className={classes.GridItem}>
                  <div>
                    <p className={classes.nameItem}>メールアドレス<span className={classes.required}>（必須）</span></p>
                    <TextField
                      label="メールアドレス"
                      name="mail"
                      id="outlined-margin-none"
                      fullWidth
                      inputProps={{
                        style: {fontSize: 16}
                      }}
                      InputLabelProps={{style: {fontSize: 16}}}
                      defaultValue=""
                      helperText=""
                      variant="outlined"
                      autoComplete="email"
                      inputRef={register({required: true, pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i })} />
                    <p className={classes.errorItem}>{errors.mail && errors.mail.type === "required" && "メールアドレス入力は必須です"}</p>
                    <p className={classes.errorItem}>{errors.mail && errors.mail.type === "pattern" && "メール形式で入力してください"}</p>
                  </div>
                </Grid>
                <Grid item xs={12} className={classes.GridItem}>
                  <p className={classes.nameItem}>お問い合わせ内容<span className={classes.required}>（必須）</span></p>
                  <TextareaAutosize
                    className={classes.TextAreaItem}
                    rows={4}
                    placeholder="お問い合わせ内容を入力ください"
                    name="textname"
                    ref={register({required: true, minLength: 4})}
                  />
                  <p className={classes.errorItem}>{errors.textname && errors.textname.type === "required" && "お問い合わせ内容入力は必須です"}</p>
                  <p className={classes.errorItem}>{errors.textname && errors.textname.type === "minLength" && "4文字以上の入力でお問い合わせください"}</p>
                </Grid>
                <Grid item xs={7}>
                  <button className={"a-btn"} type="submit">
                    送信する
                  </button>
                </Grid>
                <Grid item xs={5}>
                  <button className={"a-btn--secondary"} type="button" onClick={() => reset()}>
                    リセット
                  </button>
                </Grid>
              </Grid>
            </Container>
          </form>
        </section>
      </main>
    </div>
  )
}
export default Contact;