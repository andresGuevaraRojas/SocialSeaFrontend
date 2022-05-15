import style from './Post.module.css';
function Post({image,location,description}){
    return(
        <article className={style.post}>
            {
                image&&
                <img src={image}/>
            }
            <div className={style.content}>
                <div className={style.main}>
                    <span>{location}</span>
                    <p>{description}</p>                    
                </div>
                <div className={style.stats}>
                    <p>Flutters vs Claps</p>
                </div>
            </div>            
        </article>
    )    
}

export default Post