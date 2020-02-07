import React, {Component} from 'react'
import './NavBar.scss'

import {NavLink} from 'react-router-dom'

const navbarItems = [
    {path:'/news', name:'Новости'},
    {path:'/contest', name:'Соревнования'},
    {path:'/sponsors', name:'Спонсоры'},
    {path:'/neighbourhoods', name:'Районы'},
    {path:'/committees', name:'Комитеты'},
    {path:'/federation', name:'Федерация'},
    {path:'/gallery', name:'Галерея'},
    {path:'/contacts', name:'Контакты'}
] 

class NavBar extends Component {

  renderLinks() {
    return navbarItems.map ((item, index) => {

      return (
        <li key={new Date().getDay() + index}>
          
          <NavLink
            to={item.path}
            className="NavBar__link"
            activeClassName="NavBar__link-active"
          >
            {item.name}
          </NavLink>
        </li>
      )

    })
  }

  render() {
    return(
      <nav>
        <ul className="NavBar__list">
          {this.renderLinks()}
        </ul>
      </nav>
    )
  }
}



export default NavBar