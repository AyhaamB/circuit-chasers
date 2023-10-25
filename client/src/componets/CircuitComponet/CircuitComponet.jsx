export default function CircuitComponet(props) {
    
console.log(props)

  return (
        <table>
        <tr>
          <th>Circuit</th>
          <th>Locality</th> 
          <th>Country</th>
        </tr>

        {props.Circuits.Circuit.map((Circuit) => {
          console.log(Circuit)
          return(<tr>
          <td>{Circuit.CircuitName._text}</td>
          <td>{Circuit.Location.Locality._text}</td>
          <td>{Circuit.Location.Country._text}</td>
        </tr>)
        })}
        
      </table>
    );
  }