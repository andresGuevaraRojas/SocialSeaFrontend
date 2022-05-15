import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import PostPreview from "../../components/PostPreview/PostPreview"
import PostCategories from "../../shared/PostCategories"
import style from './ProfilePosts.module.css'
function ProfilePosts() {
    let params = useParams()
    let category = params.category || 'claps'

    const [posts, setPosts] = useState([])

    useEffect(()=>{
        const getPosts = ()=>{
            setPosts([])
        }
        getPosts()

        console.log(posts)
    },[category])

    return (
        <section className={style.posts}>
            <h1>
                {
                    PostCategories[category]
                }
            </h1>
            <div className={style.container}>
                <PostPreview image={'https://oceanfdn.org/wp-content/uploads/2010/08/SargassoSea-1-1200x600.jpg'}/>
                <PostPreview image={'https://oceanfdn.org/wp-content/uploads/2010/08/SargassoSea-1-1200x600.jpg'}/>
                <PostPreview image={'https://oceanfdn.org/wp-content/uploads/2010/08/SargassoSea-1-1200x600.jpg'}/>
                <PostPreview image={'https://oceanfdn.org/wp-content/uploads/2010/08/SargassoSea-1-1200x600.jpg'}/>
                <PostPreview image={'https://oceanfdn.org/wp-content/uploads/2010/08/SargassoSea-1-1200x600.jpg'}/>
                <PostPreview image={'https://oceanfdn.org/wp-content/uploads/2010/08/SargassoSea-1-1200x600.jpg'}/>
                <PostPreview image={'https://oceanfdn.org/wp-content/uploads/2010/08/SargassoSea-1-1200x600.jpg'}/>
            </div>
        </section>
    )
}
export default ProfilePosts