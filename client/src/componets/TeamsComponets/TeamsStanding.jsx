export default function TeamsStanding(props) {
    
console.log(props)

  return (
        <table>
        <tr>
          <th>Pos</th>
          <th>Constructor</th> 
          <th>Nationality</th>
          <th>Points</th>
          <th>Wins</th>
        </tr>

        {props.Teams.map((Team) => {
          console.log(Team)
          return(<tr>
          <td>{Team._attributes.position}</td>
          <td>{Team.Constructor.Name._text}</td>
          <td>{Team.Constructor.Nationality._text}</td>
          <td>{Team._attributes.points}</td>
          <td>{Team._attributes.wins}</td>
        </tr>)
        })}
        
      </table>
    );
  }