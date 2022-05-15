import style from './PostPreview.module.css'
function PostPreview ({image}){
    return(
        <div className={style.post}>
            <img src={image}/>
        </div>
    )
}

export default PostPreview