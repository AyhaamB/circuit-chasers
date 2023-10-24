export default function CatagoryCard(props) {
    return (
      <>
        <div className="browse-post">
          <p>{props.title}</p>
          <img src={props.image}></img>
          <p>{props.desc}</p>
        </div>
      </>
    );
  }