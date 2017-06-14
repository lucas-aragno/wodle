import Layout from './Layout'
import SideBar from './SideBar'
import Nav from './Nav'
import MainArticle from './MainArticle'
import Main from './Main'
import Title from './Title'

import sideBarOptions from '../content/sideBarOptions'
import functionalCssArticle from '../content/functionalCssArticle'

const FunctionalCssPage = ({ children }) => <div>
  <Layout>
    <Title title={'Functional Css'} />
    <SideBar>
      <Nav items={sideBarOptions} />
    </SideBar>
    <Main>
      <MainArticle article={functionalCssArticle} />
    </Main>
  </Layout>
</div>

export default FunctionalCssPage
