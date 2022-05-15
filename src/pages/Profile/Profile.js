import AboutProfile from "../../components/AboutProfile/AboutProfile"
import style from "./Profile.module.css"

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
        </main>
    )
}

export default Profile