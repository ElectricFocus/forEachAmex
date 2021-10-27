import "./styles.css";
//Write array below
export default function App() {
  let Names = [
    "Omari",
    "Melody",
    "Keturah",
    "Aldo",
    "Reginea",
    "Laurent",
    "Ye ☜(ﾟヮﾟ☜)",
    "Matt",
    "Judy",
    "Sami",
    "Maxwell",
    "Groana",
    "Aland",
    "Jean",
    "Lorena"
  ];

  return (
    <div className="App">
      <table>
        <th>First Name</th>
        <tr></tr>
        {Names.map((name) => (
          <tr>
            <td id="hi">{name}</td>
          </tr>
        ))}
      </table>
    </div>
  );
}
