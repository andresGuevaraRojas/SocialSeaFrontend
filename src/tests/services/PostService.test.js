import PostService from "../../services/PostService"

describe('Test for PostService Class',()=>{
    test('Get posts by tag',()=>{
        const postsClaps = PostService.getByCategory('claps')
        const postsDolphins = PostService.getByCategory('dolphins')
        const postsFlutters = PostService.getByCategory('flutters')

        expect(postsClaps.length).toBe(2)
        expect(postsDolphins.length).toBe(1)
        expect(postsFlutters.length).toBe(1)
    })

    test('Get posts by userId',()=>{
        const postsOfUser = PostService.getByUser(12)

        expect(postsOfUser.length).toBe(3)
    })

    test('Get posts by userId and category',()=>{
        const postsClapsOfUser = PostService.getByUserAndCategory(12,'claps')
        const postsDolphinsOfUser = PostService.getByUserAndCategory(12,'dolphins')
        const postsFluttersOfUser = PostService.getByUserAndCategory(12,'flutters')

        expect(postsClapsOfUser.length).toBe(1)
        expect(postsDolphinsOfUser.length).toBe(1)
        expect(postsFluttersOfUser.length).toBe(1)

    })

    test('Add a new post',()=>{

        const newPost = {            
            id:5,
            userId:12,
            category:'dolphins',
            image:'https://img.freepik.com/free-photo/beautiful-shot-sea-with-mountain-distance-clear-sky_181624-2248.jpg?size=626&ext=jpg&ga=GA1.2.1518270500.1634515200',
            location:'Playa Tortuga',
            description:'Compre esto alternativo a X'
        }


        const posts = PostService.addNewPost(newPost)       

        expect(posts.length).toBe(5)        
    })
})