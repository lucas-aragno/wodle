import Layout from './Layout'
import SideBar from './SideBar'
import Nav from './Nav'
import MainArticle from './MainArticle'
import Main from './Main'
import Title from './Title'

import sideBarOptions from '../content/sideBarOptions'
import componentsArticle from '../content/componentArticle'

const ComponentArticlePage = ({ children }) => <div>
  <Layout>
    <Title title={'Components'} />
    <SideBar>
      <Nav items={sideBarOptions} />
    </SideBar>
    <Main>
      <MainArticle article={componentsArticle} />
    </Main>
  </Layout>
</div>

export default ComponentArticlePage
