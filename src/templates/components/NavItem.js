import Link from 'next/link'

const NavItem = ({ item, className }) => <li className={`dib db-ns db-m pl4-ns pl4-m hover-bg-light-gray mw-100 ${className}`}>
  <Link prefetch href={item.href} className='pv2'>
    <a className='link dt w-100 pv3 ph3 mt2 dim blue truncate'>
      {item.text}
    </a>
  </Link>
</li>

export default NavItem
