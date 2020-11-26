import { getAllPosts } from '../lib/contentfulPosts'
import { getAllArticles } from '../lib/contentfulArticles'

import Layout from '../components/layout'
import MainHome from '../components/main-home'
import Post from '../components/post'
import Article from '../components/article'
import homeStyles from '../styles/Home.module.css'

export async function getStaticProps() {
  const posts = await getAllPosts();
  const articles = await getAllArticles();
  return { props: { posts, articles } };
}

export default function HomePage({posts, articles}) {
 

  return (
    <Layout home>
      <MainHome />
      <section className={homeStyles.article__wrap}>
        {articles?.map(({fields}) => {
          return <Article key={fields.title} title={fields.title} slug={fields.slug} coverImage={fields.coverImage.fields.file.url} excerpt={fields.excerpt} textOnButton={fields.textOnButton} />
        })}        
      </section>  
      <section className={homeStyles.news}>
        <h2>News & Events</h2>
        {posts?.map(({fields}) => {
          return <Post key={fields.date} title={fields.title} excerpt={fields.excerpt} slug={fields.slug} coverImage={fields.coverImage.fields.file.url} textOnButton={fields.textOnButton} authorName={fields.author.fields.name} date={fields.date} />
        })} 
      </section>
    </Layout>
  )
}
