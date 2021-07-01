import React, { useEffect, useState } from 'react';
import PostDetail from './PostDetail';
const Post = () => {
    const [allPost, setAllPost] = useState([])
    const [posts, setPost] = useState([]);
    console.log(posts)
    const [next, setNext] = useState(20)
    console.log(next)

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(response => response.json())
            .then(json => {

                setPost(json.slice(1, 10))
                setAllPost(json)
            })

    }, [])

    
  const handleShowMore = () =>{
    const Increse = next + 10;
    setNext(Increse)
      console.log(next)
      const SlicePost = allPost.slice(1,next);
      setPost(SlicePost)
  }
    return (
        <div className="container mt-5"> 
        <h3 className="text-center">All Posts</h3>
             <div className="row">  
            {
                posts.map(data => <PostDetail  post={data}></PostDetail>)
            }
             <p className="text-center ms-5" style={{cursor:"pointer"}} onClick={handleShowMore}>Load More...</p>
             </div>
        </div>
    );
};

export default Post;