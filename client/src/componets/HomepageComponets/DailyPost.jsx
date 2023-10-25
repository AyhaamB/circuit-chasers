export default function DailyPost({ news }) {
  if (!news || news.length === 0) {
    return <div>Loading...</div>;
  }

  const firstNews = news[0];
  console.log(firstNews)

  const backgroundStyle = {
    backgroundImage: `url("${firstNews.urlToImage}")`,
  };

  return (
    <>
      <div style={backgroundStyle}className="daily-post" key={firstNews.title}>
        <div className="top-news-title">
          <a href={firstNews.url}>
            <h2 className="top-news-title">{firstNews.title}</h2>
          </a>
        </div>
        <div className="top-news-desc">
          <p>{firstNews.description}</p>
        </div>
      </div>
    </>
  );
}
