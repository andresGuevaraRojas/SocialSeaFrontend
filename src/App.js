import { Link, Outlet } from "react-router-dom";

import style from './App.module.css';
import routes from "./routes";
import PostCategories from "./shared/PostCategories";
function App() {
  return (
    <>
      <header className={style.header}>
        <span>SocialSea</span>        
      </header>

      <nav className={style.menu}>
        <ul>
            <li>
              <Link to={routes.posts.claps}>{PostCategories.claps}</Link>
            </li>
            <li>
            <Link to={routes.posts.dolphins}>{PostCategories.dolphin}</Link>  
            </li>
            <li>
            <Link to={routes.posts.flutters}>{PostCategories.flutter}</Link>
            </li>
          </ul>
      </nav>

      <Outlet />
    </>
  );
}

export default App;
