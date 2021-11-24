import Link from "next/link";
import { Fragment } from "react";
import { getAllPostIds, getPostData } from "../../lib/posts";

export default function Post({ post }) {
  if (!post) {
    return <div>Loading...</div>;
  }
  return (
    <Fragment>
      <p>{post.id}</p>
      <p>{post.title}</p>
      <p>{post.body}</p>
    </Fragment>
  );
}

export async function getStaticPaths() {
  const paths = await getAllPostIds();

  return {
    paths,
    fallback: false,
  };
}
export async function getStaticProps({ params }) {
  //const { post: post } = await getPostData(params.id);
  const post = await getPostData(params.id);
  return {
    props: {
      post,
    },
  };
}
