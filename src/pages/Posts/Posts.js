import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import NavOfSection from "../../components/NavOfSection/NavOfSection"
import Post from "../../components/Post/Post"
import PostService from "../../services/PostService"
import PostCategories from "../../shared/PostCategories"
import routesNav from "./routesNav"
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
            <NavOfSection routes={routesNav}/>
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