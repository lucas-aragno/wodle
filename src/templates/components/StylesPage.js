import Layout from './Layout'
import SideBar from './SideBar'
import Nav from './Nav'
import ArticleList from './ArticleList'
import Main from './Main'
import Title from './Title'

import sideBarOptions from '../content/sideBarOptions'
import stylesArticles from '../content/styleArticles'

const StylesPage = ({ children }) => <div>
  <Layout>
    <Title title={'Styles'} />
    <SideBar>
      <Nav items={sideBarOptions} />
    </SideBar>
    <Main>
      <ArticleList articles={stylesArticles} listTitle={'Styles'} />
    </Main>
  </Layout>
</div>

export default StylesPage
