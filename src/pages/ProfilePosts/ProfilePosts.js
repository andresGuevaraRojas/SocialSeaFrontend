import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import PostPreview from "../../components/PostPreview/PostPreview"
import PostService from "../../services/PostService"
import PostCategories from "../../shared/PostCategories"
import style from './ProfilePosts.module.css'
function ProfilePosts() {
    let params = useParams()
    let category = params.category || 'claps'

    const [posts, setPosts] = useState([])

    useEffect(()=>{
        const getPosts = ()=>{
            const postsData = PostService.getByUserAndCategory(12,category)
            setPosts(postsData)
        }
        getPosts()        
    },[category])

    return (
        <section className={style.posts}>
            <h1>
                {
                    PostCategories[category]
                }
            </h1>
            <div className={style.container}>
                {
                    posts.map(post=>(
                        <PostPreview image={post.image}/>        
                    ))
                }                
            </div>
        </section>
    )
}
export default ProfilePosts