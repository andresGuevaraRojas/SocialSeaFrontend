import { useParams } from "react-router-dom"
import Post from "../../components/Post/Post"
import PostCategories from "../../shared/PostCategories"
import style from "./Posts.module.css"

function Posts(){

    let params = useParams()
    let category = params.category
    return (
        <section className={style.posts}>
           <h1>
               {
                   PostCategories[category]|| PostCategories.claps
               }               
           </h1>
           <div className={style.container}>
                <Post 
                    image={'https://cdn.pixabay.com/photo/2019/11/07/08/12/sea-4608198_960_720.jpg'}   
                    location={'Playa del carmen'}
                    description={'Residuos plasticos'}                                      
                />
                <Post 
                    image={'https://cdn.pixabay.com/photo/2019/11/07/08/12/sea-4608198_960_720.jpg'}   
                    location={'Playa del carmen'}
                    description={'Residuos plasticos'}                                      
                />
           </div>           
        </section>
    )
}

export default Posts