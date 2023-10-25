export default function DriverStanding(props) {
    
  console.log(props)

  return (
        <table>
        <tr>
          <th>Pos</th>
          <th>Driver</th> 
          <th>Nationality</th>
          <th>Constructor</th>
          <th>Points</th>
          <th>Wins</th>
        </tr>

        {props.Drivers.map((driver) => {
          console.log(driver)
          return(<tr>
          <td>{driver._attributes.position}</td>
          <td>{driver.Driver.GivenName._text + " " + driver.Driver.FamilyName._text}</td>
          <td>{driver.Driver.Nationality._text}</td>
          <td>{driver.Constructor.Name._text}</td>
          <td>{driver._attributes.points}</td>
          <td>{driver._attributes.wins}</td>
        </tr>)
        })}
        
      </table>
    );
  }