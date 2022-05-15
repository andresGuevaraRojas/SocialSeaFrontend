import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import Post from "../../components/Post/Post"
import PostService from "../../services/PostService"
import PostCategories from "../../shared/PostCategories"
import Nav from "./Nav"
import style from "./Posts.module.css"

function Posts() {

    let params = useParams()
    let category = params.category || 'claps'

    const [posts, setPosts] = useState([])

    useEffect(() => {
        const getPosts = () => {
            const postsData = PostService.getByCategory(category)
            setPosts(postsData)
        }

        getPosts()
    }, [category])


    return (
        <>
            <Nav/>
            <section className={style.posts}>
                <h1>
                    {
                        PostCategories[category]
                    }
                </h1>
                <div className={style.container}>
                    {
                        posts.map(post => (
                            <Post
                                image={post.image}
                                location={post.location}
                                description={post.description}
                            />
                        ))
                    }
                </div>
            </section>
        </>
    )
}

export default Posts