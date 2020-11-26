import homeStyles from '../styles/Home.module.css'
import Link from 'next/link'

function Article({ title, slug, coverImage, excerpt, textOnButton}) {
  
    return (
      <div className={homeStyles.article} 
           style={{backgroundImage: `url(${coverImage})`,}}>        

        <h3 className={homeStyles.article__title}>
          <Link as={`/articles/${slug}`} href="/articles/[slug]">
            <a>{title}</a>
          </Link>
        </h3>

        <p className={homeStyles.article__text}>{excerpt}</p>

        <Link as={`/articles/${slug}`} href="/articles/[slug]">
            <a className={homeStyles.btn}>{textOnButton}</a>
        </Link>
                
      </div>
    )
  }
  
  export default Article