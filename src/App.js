import { Link, Outlet } from "react-router-dom";

import style from './App.module.css';
import SearhBarInput from "./components/SearchBarInput/SearchBarInput";
import routes from "./routes";
import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import MapRoundedIcon from '@mui/icons-material/MapRounded';
import AddBoxRoundedIcon from '@mui/icons-material/AddBoxRounded';
import PersonRoundedIcon from '@mui/icons-material/PersonRounded';
function App() {
  return (
    <>
      <header className={style.header}>
        <div className={style.header__main}>
          <span>SocialSea</span>        
          <SearhBarInput/>
        </div>        
        <div className={style.header__actions}>
          <ul>
            <li>
              <Link to={'/'}>
                <HomeRoundedIcon fontSize="large" className={style.icon__action}/>
              </Link>              
            </li>
            <li>
              <Link to={'/'}>
                <MapRoundedIcon fontSize="large" className={style.icon__action}/>
              </Link>              
            </li>
            <li>
              <Link to={'/'}>
                <AddBoxRoundedIcon fontSize="large" className={style.icon__action}/>
              </Link>              
            </li>
            <li>
              <Link to={routes.profile}>
                <PersonRoundedIcon fontSize="large" className={style.icon__profile}/>
              </Link>              
            </li>
          </ul>
        </div>
      </header>      
      <Outlet />
    </>
  );
}

export default App;
