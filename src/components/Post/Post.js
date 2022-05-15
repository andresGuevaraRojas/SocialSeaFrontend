function Post({title,date,image}){
    return(
        <article>
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