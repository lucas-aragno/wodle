import Link from 'next/link'

const ArticleItem = ({ article }) =>
  <article className='pv4 ph3 ph0-l'>
    <div className='flex flex-column flex-row-ns'>
      <div className='w-100 w-60-ns pr3-ns order-2 order-1-ns'>
        <Link prefetch href={article.href} className='pv2'>
          <h1 className='f3 athelas mt0 lh-title link pointer hover-light-gray'>{article.title}</h1>
        </Link>
        <p className='f5 f4-l lh-copy athelas'>
          {article.short}
        </p>
      </div>
    </div>
    <p className='f6 lh-copy gray mv0'>By <span className='ttu'>{article.author}</span></p>
    <time className='f6 db gray'>{article.date}</time>
  </article>

export default ArticleItem
