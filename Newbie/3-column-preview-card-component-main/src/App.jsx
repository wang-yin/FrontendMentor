import "./App.css";
import Card from "./components/Card";


const carData = [
  {
    type: "Sedans",
    description:
      "Choose a sedan for its affordability and excellent fuel economy. Ideal for cruising in the city or on your next road trip.",
    icon: '/images/icon-sedans.svg',
    color: "--Orange"
  },
  {
    type: "SUVs",
    description:
      "Take an SUV for its spacious interior, power, and versatility. Perfect for your next family vacation and off-road adventures.",
    icon: '/images/icon-suvs.svg',
    color: "--DarkCyan"
  },
  {
    type: "Luxury",
    description:
      "Cruise in the best car brands without the bloated prices. Enjoy the enhanced comfort of a luxury rental and arrive in style.",
    icon: '/images/icon-luxury.svg',
    color: "--VeryDarkCyan"
  },
];

function App() {
  return (
    <>
      {carData.map((car, index) => (
        <Card key={index} type={car.type} description={car.description} icon={car.icon} color={car.color}/>
      ))}
    </>
  );
}

export default App;
