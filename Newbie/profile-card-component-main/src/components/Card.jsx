import Stats from "./Stats";
import "../styles/Card.css";

function Card({ profiles }) {
  const profile = profiles[0];
  return (
    <>
      <img
        className="bg-pattern-card"
        src="/images/bg-pattern-card.svg"
        alt="pattern-card"
      ></img>
      <div className="profile-content">
        <img src={profile.avatar} alt={profile.name}></img>
        <h3>
          {profile.name}
          <span> {profile.age}</span>
        </h3>
        <p>{profile.country}</p>
        
      </div>
      <Stats stats={profile.stats} />
    </>
  );
}

export default Card;
