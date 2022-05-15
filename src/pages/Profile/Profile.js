import { Outlet } from "react-router-dom"
import AboutProfile from "../../components/AboutProfile/AboutProfile"
import NavOfSection from "../../components/NavOfSection/NavOfSection"
import style from "./Profile.module.css"
import routesNav from "./routesNav"

function Profile() {
    return(
        <main className={style.main}>
            <section className={style.about}>
                <AboutProfile 
                    name={'Nanci Carrillo'} 
                    image={'https://images.pexels.com/photos/10896817/pexels-photo-10896817.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'} 
                    about={'👑'}
                />                
            </section>            
            <NavOfSection routes={routesNav}/>
            <Outlet/>
        </main>
    )
}

export default Profile