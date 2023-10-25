export default function OtherStories({ news }) {
  if (!news) {
    return <div>Loading...</div>; // Display "Loading..." when data is not available.
  }

  if (news.length < 6) {
    return null; // Return nothing if there are not enough news items.
  }

  const newsSlice = news.slice(1, 6); // Get the news items from index 1 to 5.

  return (
    <>
      {newsSlice.map((story, index) => (
        <div
          className="other-image"
          key={index}
          style={{ backgroundImage: `url("${story.urlToImage}")` }}
        >
          <a href={story.url}>
            <h4 className="other-title">{story.title}</h4>
          </a>
        </div>
      ))}
    </>
  );
}
