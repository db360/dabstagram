import { collection, onSnapshot, orderBy, query } from "@firebase/firestore";
import { useEffect, useState } from "react"
import { db } from "../firebase";
import Post from "./Post"

const posts = [
    {
        id: '1',
        username: 'sssarandonga',
        userImg: 'https://links.papareact.com/3ke',
        img: 'https://links.papareact.com/3ke',
        caption: 'Dab Web Developing'
    },
    {
        id: '2',
        username: 'sssarandonga',
        userImg: 'https://links.papareact.com/3ke',
        img: 'https://links.papareact.com/3ke',
        caption: 'Dab Web Developing'
    },
    {
        id: '3',
        username: 'sssarandonga',
        userImg: 'https://links.papareact.com/3ke',
        img: 'https://links.papareact.com/3ke',
        caption: 'Dab Web Developing'
    }
]

const Posts = () => {

    const [posts, setPosts] = useState([]);

    useEffect(
        () =>     // cuando carga el componente posts, actualiza el componente del useEffect
            onSnapshot(
                query(collection(db,'posts'), orderBy('timestamp', 'desc')),
                (snapshot) => {
                setPosts(snapshot.docs);  //cuando cambian los datos en el backend actualiza el state con los ultimos docs
                }
            ),
        [db] // cuando cambia db se ejecuta el useEffect
    );

    console.log(posts)

    return (
        <div>
            {posts.map(post => (
                <Post
                    key={post.id}
                    id={post.id}
                    username={post.data().username}
                    userImg={post.data().profileImg}
                    img={post.data().image}
                    caption={post.data().caption}
                />
            ))}


        </div>
    )
}

export default Posts
