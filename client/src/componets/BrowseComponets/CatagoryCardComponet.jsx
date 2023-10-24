export default function CatagoryCard(props) {
    return (
      <>
        <div className="browse-post">
          <div>
          <p>{props.title}</p>
          </div>
          <div>
          <img src={props.image}></img>
          </div>
          <div>
          <p>{props.desc}</p>
          </div>
        </div>
      </>
    );
  }