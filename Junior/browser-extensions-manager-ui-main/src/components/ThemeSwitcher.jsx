import "../styles/ThemeSwitcher.css"

function ThemeSwitcher ({ theme, setTheme }) {


  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light')
  }

  return (
    <div className={`switch-model switch-model-${theme}`} tabIndex="1" onClick={toggleTheme}>
      <img src={theme === "dark" ? '/assets/images/icon-sun.svg' : '/assets/images/icon-moon.svg'} alt="switch-model"></img>
    </div>
  )
}

export default ThemeSwitcher;