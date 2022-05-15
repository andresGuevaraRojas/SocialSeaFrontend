import style from './Post.module.css';
function Post({title,date,image}){
    return(
        <article className={style.post}>
            <h2>{title}</h2>
            <span>{date}</span>
            {
                image&&
                <img src={image}/>
            }
        </article>
    )    
}

export default Post