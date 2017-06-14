import ArticleItem from './ArticleItem'

const ArticleList = ({ articles, listTitle }) =>
  <section className='w-70 center'>
    <h2 className='athelas ph3 ph0-l f2'>{ listTitle }</h2>
    {
      articles.map((article, index) => <ArticleItem article={article} />)
    }
  </section>
export default ArticleList
