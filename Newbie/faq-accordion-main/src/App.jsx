import { useEffect } from "react";
import './App.css'
import Container from "./components/Container"

function App() {
  useEffect(() => {
    document.documentElement.lang = "en"; // 確保 <html> lang 屬性被設定
  }, []);

  return (
    <main>
      <Container />
    </main>
  )
}

export default App
