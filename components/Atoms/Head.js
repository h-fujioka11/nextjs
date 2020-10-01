import React, { Component } from "react";
import Head from "next/head";
class Heads extends Component {
  componentDidMount() {
    (function(d) {
      var config = {
          kitId: 'uho2mkd',
          scriptTimeout: 3000,
          async: true
        },
        h=d.documentElement,t=setTimeout(function(){h.className=h.className.replace(/\bwf-loading\b/g,"")+" wf-inactive";},config.scriptTimeout),tk=d.createElement("script"),f=false,s=d.getElementsByTagName("script")[0],a;h.className+=" wf-loading";tk.src='https://use.typekit.net/'+config.kitId+'.js';tk.async=true;tk.onload=tk.onreadystatechange=function(){a=this.readyState;if(f||a&&a!="complete"&&a!="loaded")return;f=true;clearTimeout(t);try{Typekit.load(config)}catch(e){}};s.parentNode.insertBefore(tk,s)
    })(document);
  }
  render() {
    return (
      <Head>
        <title>{this.props.title}</title>
        <meta property="og:title" content={this.props.title} />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <meta property="og:description" content={this.props.description} />
        <meta name="keywords" content={'props.keyword'} />
        <meta property="og:type" content="blog" />
        <meta property="og:url" content={this.props.url} />
        <meta property="og:image" content={this.props.image} />
        <meta property="og:site_name" content={this.props.title} />
        <link rel="canonical" href={this.props.url} />
        <script type="text/javascript" src="//webfont.fontplus.jp/accessor/script/fontplus.js?eLt8kT4ATAE%3D&box=IFkbEH~muqY%3D&aa=1&ab=2" charSet="utf-8"></script>
      </Head>
    )
  }
}
export default Heads;
