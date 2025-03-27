import "../styles/SearchBar.css";
import { useRef } from "react";

function SearchBar({ setAddress }) {
  const inputRef = useRef("");

  const onSubmit = (e) => {
    e.preventDefault();
    setAddress(inputRef.current.value);
  };

  return (
    <form onSubmit={onSubmit}>
      <input
        type="text"
        placeholder="Search for any IP address or domain"
        ref={inputRef}
      ></input>
      <button type="submit">
        <img src="/images/icon-arrow.svg" alt="submit"></img>
      </button>
    </form>
  );
}

export default SearchBar;
