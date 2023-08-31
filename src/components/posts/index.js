import Post from '../posts/post/index'
import Image from 'next/image'
import post from '../../../public/images/post.svg'
export default function Posts({ posts }) {
    const showPosts = posts.map(item => <Post item={item} />)
    return (
        <div className="posts-inner container">
            <div className="minihead">
                <div className='hr-p'>
                    <hr />
                    <hr />
                    <p><span><Image src={post} /> </span>posts</p>
                </div>
                <div className="posts">
                    {showPosts}
                </div>
            </div>

        </div>
    )
}