import NavItem from './NavItem'

const Nav = ({ items }) => <div>
  <ul className='list w-100 pa0 tc tl-ns tl-m'>
    {
      items.map((item, index) =>
        <NavItem item={item} key={index} className={index === 0 ? `b-m b-ns f2-ns f3-m f4` : 'f3-ns f3-m f5'} />
      )
    }
  </ul>
</div>

export default Nav
