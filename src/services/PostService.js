import posts from "../data/Posts";

class PostService{
    static getByCategory(category){
        return posts.filter(post=>post.category === category);
    }
}

export default PostService