import Layout from './Layout'
import SideBar from './SideBar'
import Nav from './Nav'
import MainArticle from './MainArticle'
import Main from './Main'
import Title from './Title'

import sideBarOptions from '../content/sideBarOptions'
import nextArticle from '../content/nextArticle'

const NextArticlePage = ({ children }) => <div>
  <Layout>
    <Title title={'Next'} />
    <SideBar>
      <Nav items={sideBarOptions} />
    </SideBar>
    <Main>
      <MainArticle article={nextArticle} />
    </Main>
  </Layout>
</div>

export default NextArticlePage
