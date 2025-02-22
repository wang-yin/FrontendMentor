import "../styles/Stats.css"

function Stats({ stats }) {
  return (
    <div className="user-stats">
      {stats.map((stat, index) => {
        const [label, value] = Object.entries(stat)[0];
        return (
          <div className="stat" key={index}>
            <h2>{value}</h2>
            <p>{label}</p>
          </div>
        );
      })}
    </div>
  );
}

export default Stats;
