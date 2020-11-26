import { useRouter } from "next/router";
import ErrorPage from "next/error";

import Layout from '../../components/layout'
import BlogHeader from "../../components/blog-header";
import BlogBody from "../../components/blog-body";
import blogStyles from "../../styles/Blog.module.css";

import { getPostBySlug, getAllPostsWithSlug } from "../../lib/contentfulPosts";



export async function getStaticPaths() {
  const allPosts = await getAllPostsWithSlug();
  return {
    paths: allPosts?.map(({ slug }) => `/posts/${slug}`) ?? [],
    fallback: true,
  };
}

export async function getStaticProps({ params }) {
  const post = await getPostBySlug(params.slug);
  return {
    props: {
      post: post ? post : null,
    },
    revalidate: 1,
  };
}

const Blog = ({ post }) => {
  const router = useRouter();

  if (!router.isFallback && !post) {
    return <ErrorPage statusCode={404} />;
  }

  return (
    <Layout>
      <main className={blogStyles.container}>
        <BlogHeader
          title={post?.fields.title}
          date={post?.fields.date}
        />
        <BlogBody content={post?.fields.content} />
      </main>      
    </Layout>
  );
};

export default Blog;