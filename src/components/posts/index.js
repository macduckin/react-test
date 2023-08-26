import Post from '../posts/post/index'
export default function Posts({ posts }) {
    const showPosts = posts.map(item => <Post item={item} />)
    return (
        <div className="posts-inner container">
            <div className="minihead">
                <hr />
                <p>posts</p>
                <div className="posts">
                    {showPosts}
                </div>
            </div>
        </div>
    )
}