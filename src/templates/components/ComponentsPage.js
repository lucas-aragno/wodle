import Layout from './Layout'
import SideBar from './SideBar'
import Nav from './Nav'
import ArticleList from './ArticleList'
import Main from './Main'
import Title from './Title'

import sideBarOptions from '../content/sideBarOptions'
import componentsArticles from '../content/componentsArticles'

const ComponentsPage = ({ children }) => <div>
  <Layout>
    <Title title={'Components'} />
    <SideBar>
      <Nav items={sideBarOptions} />
    </SideBar>
    <Main>
      <ArticleList articles={componentsArticles} listTitle={'Components'} />
    </Main>
  </Layout>
</div>

export default ComponentsPage
