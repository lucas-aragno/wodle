import Layout from './Layout'
import SideBar from './SideBar'
import Nav from './Nav'
import ArticleList from './ArticleList'
import Main from './Main'
import Title from './Title'

import sideBarOptions from '../content/sideBarOptions'
import nextArticles from '../content/nextArticles'

const NextPage = ({ children }) => <div>
  <Layout>
    <Title title={'Next'} />
    <SideBar>
      <Nav items={sideBarOptions} />
    </SideBar>
    <Main>
      <ArticleList articles={nextArticles} listTitle={'Next.js'} />
    </Main>
  </Layout>
</div>

export default NextPage
