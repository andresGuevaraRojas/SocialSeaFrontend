import style from './PostPreview.module.css'
function PostPreview ({image}){
    return(
        <div className={style.post}>
            <img alt={''} src={image}/>
        </div>
    )
}

export default PostPreview