import Head from "next/head";
import "../styles/style.scss";
import Header from "../components/Atoms/Header";
import Heads from "../components/Atoms/Head";
import Post from "../components/Post";
import { getAllPostsData } from "../lib/posts";

const Blog = ({ posts }) => {
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
        {posts && posts.map((post) => <Post key={post.id} post={post} />)}
      </main>
    </div>
  );
};

export async function getStaticProps() {
  const posts = await getAllPostsData();
  return {
    props: { posts },
  };
}

export default Blog;
