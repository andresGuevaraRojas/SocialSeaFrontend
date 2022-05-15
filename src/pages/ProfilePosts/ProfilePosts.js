import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import PostCategories from "../../shared/PostCategories"
import style from './ProfilePosts.module.css'
function ProfilePosts() {
    let params = useParams()
    let category = params.category || 'claps'

    const [posts, setPosts] = useState([])

    return (
        <section className={style.posts}>
            <h1>
                {
                    PostCategories[category]
                }
            </h1>
            <div className={style.container}>
                
            </div>
        </section>
    )
}
export default ProfilePosts