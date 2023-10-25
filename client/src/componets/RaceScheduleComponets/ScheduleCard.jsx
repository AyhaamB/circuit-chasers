export default function ScheduleCard(props) {
    console.log(props.Circuit.RaceName._text)
    return (
      <div className="RaceSchedule">
        <p className="RaceName"> {props.Circuit.RaceName._text}</p>
        <p className="RaceDate"> {props.Circuit.Date._text}</p>
        <p className="CircuitName">{props.Circuit.Circuit.CircuitName._text}</p>
      </div>
    );
  }