import React, { useState } from 'react'

import { FaUsers, FaCartPlus } from 'react-icons/fa'
import * as AiIcons from 'react-icons/ai'
import { BsFillPentagonFill } from 'react-icons/bs'

import { Link } from 'react-router-dom'
import './sidebar.css'

import { IconContext } from 'react-icons'

export const SidebarData = [
  {
    title: 'Home',
    path: '/',
    icon: <AiIcons.AiFillHome />,
    cName: 'nav-text',
  },
  {
    title: 'Users',
    path: '/users',
    icon: <FaUsers />,
    cName: 'nav-text',
  },
  {
    title: 'Products',
    path: '/products',
    icon: <FaCartPlus />,
    cName: 'nav-text',
  },
  {
    title: 'Kategoriler',
    path: '/categories',
    icon: <BsFillPentagonFill />,
    cName: 'nav-text',
  },
]

function Aside() {
  const [sidebar, setSidebar] = useState(false)

  const showSidebar = () => setSidebar(!sidebar)
  return (
    <IconContext.Provider value={{ color: '#fff' }}>
      <nav className={'nav-menu active'}>
        <ul className='nav-menu-items' onClick={showSidebar}>
          {SidebarData.map((item, index) => {
            return (
              <li key={index} className={item.cName}>
                <Link to={item.path}>
                  {item.icon}
                  <span>{item.title}</span>
                </Link>
              </li>
            )
          })}
        </ul>
      </nav>
    </IconContext.Provider>
  )
}

export default Aside
