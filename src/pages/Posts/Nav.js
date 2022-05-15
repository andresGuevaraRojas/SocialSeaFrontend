import { Link } from "react-router-dom"
import routes from "../../routes"
import PostCategories from "../../shared/PostCategories"
import style from './Nav.module.css'
function Nav(){
    return(
        <nav className={style.nav}>
        <ul>
            <li>
              <Link to={routes.posts.claps}>{PostCategories.claps}</Link>
            </li>
            <li>
            <Link to={routes.posts.dolphins}>{PostCategories.dolphins}</Link>  
            </li>
            <li>
            <Link to={routes.posts.flutters}>{PostCategories.flutters}</Link>
            </li>
          </ul>
      </nav>
    )
}

export default Nav