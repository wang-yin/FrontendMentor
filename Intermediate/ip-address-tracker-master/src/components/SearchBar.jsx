import "../styles/SearchBar.css"

function SearchBar() {
  return(
    <form>
      <input type="text" placeholder="Search for any IP address or domain"></input>
      <button type="submit">
        <img src="/images/icon-arrow.svg" alt=""></img>
      </button>
    </form>
  )
}

export default SearchBar