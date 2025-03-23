import { useEffect, useState } from "react";
import "../styles/ExtensionList.css";
import ToggleSwitch from "./ToggleSwitch";

function ExtensionList({ theme, selected }) {
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


  const toggleSwitch = (name) => {
    setExtensionData((prevData) => 
      prevData.map((item) => 
        item.name === name ? { ...item, isActive: !item.isActive } : item
      )
    )
  }


  const removeExtension = (name) => {
    setExtensionData((prevData) => prevData.filter((item) => item.name !== name));
  };

  const filteredData = extensionData.filter((item) => {
    if (selected === "All") return true;
    if (selected === "Active") return item.isActive;
    if (selected === "Inactive") return !item.isActive;
    return true;
  });


  return (
    <>
      {filteredData.map((item) => (
        <div key={item.name} className={`extension-item ${theme}-mode-extension-item`}>
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
          <button className={`remove-button ${theme}-mode-remove-button`} onClick={() => removeExtension(item.name)}>Remove</button>
          <ToggleSwitch theme={theme} isActive={item.isActive} onToggle={() => toggleSwitch(item.name)}/>
        </div>
      </div>
      ))}
    </>
  );
}

export default ExtensionList;
