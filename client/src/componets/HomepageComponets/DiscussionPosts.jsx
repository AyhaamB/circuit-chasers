export default function DiscussionPost({ posts }) {
  
  const randomIndex = Math.floor(Math.random() * posts.length);
  const randomPost = posts[randomIndex];
  return (
    <>
      <h3 className="random-post-title">Join The Discussion!</h3>
      <div>
        <div className="random-post-container">
          {randomPost && (
            <a className="random-post" href="/community">
              <div className="random-post-content" key={randomPost.id}>
                <h4>What's Trending</h4>
                <p>{randomPost.title}</p>
                <p>{randomPost.content}</p>
              </div>
            </a>
          )}
        </div>
      </div>
    </>
  );
}
