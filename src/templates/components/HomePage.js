import Layout from './Layout'
import SideBar from './SideBar'
import Nav from './Nav'
import MainArticle from './MainArticle'
import Main from './Main'
import Title from './Title'

import sideBarOptions from '../content/sideBarOptions'
import mainArticle from '../content/mainArticle'

const HomePage = ({ children }) => <div>
  <Layout>
    <Title title={'Wodle'} />
    <SideBar>
      <Nav items={sideBarOptions} />
    </SideBar>
    <Main>
      <MainArticle article={mainArticle} />
    </Main>
  </Layout>
</div>

export default HomePage
