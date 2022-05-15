import routes from "../../routes"
import PostCategories from "../../shared/PostCategories"

const routesNav = [
    {
        path:routes.posts.claps,
        text:PostCategories.claps
    },
    {
        path:routes.posts.dolphins,
        text:PostCategories.dolphins
    },
    {
        path:routes.posts.flutters,
        text:PostCategories.flutters
    },
]

export default routesNav