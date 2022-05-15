import { Link } from "react-router-dom"
import style from './NavOfSection.module.css'
function NavOfSection({routes}){
    return(
        <nav className={style.nav}>
        <ul>            
            {
                routes.map(route=>(
                    <li>
                        <Link to={route.path}>{route.text}</Link>        
                    </li>                    
                ))
            }
          </ul>
      </nav>
    )
}

export default NavOfSection