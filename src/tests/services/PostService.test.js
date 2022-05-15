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
})