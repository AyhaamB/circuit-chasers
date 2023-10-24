export default function Post({ posts }) {
  return (
    <>
      {posts.map((post) => (
        <div className="disc-post">
          <div key={post.id}>
            <p>{post.title}</p>
            <p>{post.content}</p>
          </div>
        </div>
      ))}
    </>
  );
}
