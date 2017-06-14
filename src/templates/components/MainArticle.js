const MainArticle = ({ article }) =>
  <article className='tc'>
    <header>
      <h1 className='f3 f2-m f-subheadline-l measure lh-title fw1 mt0'> {article.title} </h1>
      <time className='f5 f4-l db fw1 baskerville mb4'> {article.date} </time>
    </header>
    <div className='ph3 ph4-m ph5-l'>
      {
        article.content.map((paragraph, index) =>
          <p
            className='f4 mb4 center measure lh-copy'
            key={index}
            dangerouslySetInnerHTML={{ __html: paragraph }} />
        )
      }
    </div>
  </article>

export default MainArticle
