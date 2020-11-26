import homeStyles from '../styles/Home.module.css'
import DateComponent from './date'
import Link from 'next/link'

function Post({ title, excerpt, slug, coverImage, textOnButton, authorName, date }) {
    return (
      <div className={homeStyles.news__item}>
        <div>
          <Link href="/posts/[slug]" as={`/posts/${slug}`}>
            <a>
              <img src={coverImage}
                   alt={title} /> 
            </a>
           </Link>          
        </div>

        <div className={homeStyles.news__content}>
          <div className={homeStyles.news__tag}>News</div>
          <div className={homeStyles.news__meta}><span>By {authorName} </span> | <DateComponent dateString={date} /></div>
          <h3 className={homeStyles.news__title}>
            <Link href="/posts/[slug]" as={`/posts/${slug}`}>
              <a>{title} </a>
            </Link>
          </h3>
          <div className={homeStyles.news__text}>{excerpt}</div> 
          <Link href="/posts/[slug]" as={`/posts/${slug}`}>
              <a className={homeStyles.news__btn}>{textOnButton} </a>
          </Link>
        </div>               
      </div>
    )
  }
  
  export default Post

