export default function Post({ item }) {
    return (
        <div className="post">
            <img src={item.url} />
        </div>
    )
}