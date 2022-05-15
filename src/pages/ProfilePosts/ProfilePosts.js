import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import Post from "../../components/Post/Post"
import PostPreview from "../../components/PostPreview/PostPreview"
import PostService from "../../services/PostService"
import PostCategories from "../../shared/PostCategories"
import style from './ProfilePosts.module.css'
function ProfilePosts() {
    let params = useParams()
    let category = params.category || 'claps'

    const [posts, setPosts] = useState([])
    const [selectedPost,setSelectedPost] = useState(null)

    const onClickPreviewPost = (id)=>{
        const post = posts.find(post=>post.id === id)
        setSelectedPost(post)
    }

    useEffect(()=>{
        const getPosts = ()=>{
            setSelectedPost(null)
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
                        <PostPreview image={post.image} onClick={()=>{onClickPreviewPost(post.id)}}/>        
                    ))
                }                
            </div>
            {
                selectedPost&&
                <Post image={selectedPost.image} location={selectedPost.location} description={selectedPost.description}/>
            }
        </section>
    )
}
export default ProfilePosts