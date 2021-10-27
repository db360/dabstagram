import Post from "./Post"

const posts = [
    {
        id: '123',
        username: 'sssarandonga',
        userImg: 'https://links.papareact.com/3ke',
        img: 'https://links.papareact.com/3ke',
        caption: 'Dab Web Developing'
    },
    {
        id: '123',
        username: 'sssarandonga',
        userImg: 'https://links.papareact.com/3ke',
        img: 'https://links.papareact.com/3ke',
        caption: 'Dab Web Developing'
    },
    {
        id: '123',
        username: 'sssarandonga',
        userImg: 'https://links.papareact.com/3ke',
        img: 'https://links.papareact.com/3ke',
        caption: 'Dab Web Developing'
    }
]

const Posts = () => {
    return (
        <div>
            {posts.map(post => (
                <Post
                    key={post.id}
                    id={post.id}
                    username={post.username}
                    userImg={post.userImg}
                    img={post.img}
                    caption={post.caption}
                />
            ))}


        </div>
    )
}

export default Posts
