import posts from "../data/Posts";

class PostService{
    static getByCategory(category){
        return posts.filter(post=>post.category === category);
    }

    static getByUser(userId){
        return posts.filter(post=>post.userId === userId)
    }
    static getByUserAndCategory(userId,category){
        return posts.filter(post=>post.userId === userId).filter(post=>post.category === category)
    }
    

    static addNewPost(post){
        return [...posts,post]
    }
}

export default PostService