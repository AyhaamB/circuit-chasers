export default function Post({ posts }) {
  console.log(posts)
  return (
    <>
      {posts.map((post) => (
        <div className="disc-post">
          <div key={post.id}>
            <h4>{post.title}</h4>
            <p>{post.content}</p>
          </div>
        </div>
      ))}
    </>
  );
}
