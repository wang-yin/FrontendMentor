import { useEffect, useState } from "react";
import "../styles/ExtensionList.css";
import ToggleSwitch from "./ToggleSwitch";

function ExtensionList({ theme }) {
  const [extensionData, setExtensionData] = useState([])

  const fetchData  = async () => {
    try {
      const result = await fetch("/data.json").then((response) => 
        response.json()
      )
      setExtensionData(result)
    } catch (error) {
      console.error("Failed to fetch data:", error);
    }
  }

  useEffect(() => {
    fetchData();
  }, []);

  console.log(extensionData)

  return (
    <>
      {extensionData.map((item) => (
        <div className={`extension-item ${theme}-mode-extension-item`}>
        <div className="extension-info">
          <img className="extension-icon" src={item.logo}></img>
          <div className="extension-details">
            <h3 className={`extension-name ${theme}-mode-extension-name`}>{item.name}</h3>
            <p className={`extension-description ${theme}-mode-extension-description`}>
              {item.description}
            </p>
          </div>
        </div>
        <div className="extension-actions">
          <button className={`remove-button ${theme}-mode-remove-button`}>Remove</button>
          <ToggleSwitch theme={theme}/>
        </div>
      </div>
      ))}
    </>
  );
}

export default ExtensionList;
