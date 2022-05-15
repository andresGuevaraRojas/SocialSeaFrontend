import style from './PostPreview.module.css'
function PostPreview ({image,onClick}){
    return(
        <div className={style.post} onClick={onClick}>
            <img alt={''} src={image}/>
        </div>
    )
}

export default PostPreview