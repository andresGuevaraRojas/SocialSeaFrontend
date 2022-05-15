import style from "./AboutProfile.module.css"
function AboutProfile({image,name,about}){
    return(
        <div className={style.container}>
            <div className={style.image__container}>
                <img src={image} />
            </div>
            <div className={style.about}>
                <span className={style.name}>{name}</span>
                <span className={style.content}>{content}</span>
            </div>
        </div>
    )
}

export default AboutProfile;