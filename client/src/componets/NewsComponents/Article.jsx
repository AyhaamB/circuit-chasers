export default function Article({ news }) {
  return (
    <>
      {news.map((news) => (
        <div className="news-post">
            <div className="article-image">
                <img className="news-image" src={news.urlToImage}></img>
            </div>
            <div className="news-content">
              <a href={news.url}>
                <h2 className='article-title'>{news.title}</h2></a>
              <p>{news.description}</p>
            </div>
        </div>
      ))}
    </>
  );
}
