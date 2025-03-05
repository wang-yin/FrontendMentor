import '../styles/Result.css'
import { useEffect, useState } from "react";

function Result({ formData, isValid }) {
  const [age, setAge] = useState({ years: "--", months: "--", days: "--" });

  useEffect(() => {
    if(isValid){
      calculateAge();
    } else{
      setAge({ years: "--", months: "--", days: "--" });
    }
    
  }, [formData, isValid]);

  const calculateAge = () => {
    const { day, month, year } = formData;
    const birthDate = new Date(year, month - 1, day);
    const today = new Date();

    let years = today.getFullYear() - birthDate.getFullYear();
    let months = today.getMonth() - birthDate.getMonth();
    let days = today.getDate() - birthDate.getDate();

    if (days < 0) {
      months -= 1;
      const previousMonth = new Date(today.getFullYear(), today.getMonth(), 0);
      days += previousMonth.getDate();
    }

    if (months < 0) {
      years -= 1;
      months += 12;
    }

    setAge({ years, months, days });
  };
  return (
    <div className='results-container'>
      <h1 className='result-YYYY'><span>{age.years}</span> years</h1>
      <h1 className='result-MM'><span>{age.months}</span> months</h1>
      <h1 className='result-DD'><span>{age.days}</span> days</h1>
    </div>
  )
}

export default Result;