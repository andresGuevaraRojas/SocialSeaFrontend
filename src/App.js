import { Link, Outlet } from "react-router-dom";

import style from './App.module.css';
import SearhBarInput from "./components/SearchBarInput/SearchBarInput";
import routes from "./routes";
import PostCategories from "./shared/PostCategories";
import Home from "@mui/icons-material/Home";
function App() {
  return (
    <>
      <header className={style.header}>
        <div className={style.header__main}>
          <span>SocialSea</span>        
          <SearhBarInput/>
        </div>        
        <div style={style.header__actions}>
          <ul>
            <li><Home/></li>
            <li></li>
            <li></li>
            <li></li>
          </ul>
        </div>
      </header>

      <nav className={style.menu}>
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

      <Outlet />
    </>
  );
}

export default App;
