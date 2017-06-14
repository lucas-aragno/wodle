import Layout from './Layout'
import SideBar from './SideBar'
import Nav from './Nav'
import MainArticle from './MainArticle'
import Main from './Main'
import Title from './Title'

import sideBarOptions from '../content/sideBarOptions'
import tachyonsArticle from '../content/tachyonsArticle'

const TachyonsPage = ({ children }) => <div>
  <Layout>
    <Title title={'Tachyons'} />
    <SideBar>
      <Nav items={sideBarOptions} />
    </SideBar>
    <Main>
      <MainArticle article={tachyonsArticle} />
    </Main>
  </Layout>
</div>

export default TachyonsPage
