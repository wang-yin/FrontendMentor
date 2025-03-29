import './App.css'
import Nav from './components/Nav'
import Image from './components/Image'
import Info from './components/Info'

function App() {

  return (
    <main>
      <nav className='flex justify-between items-center px-6 pt-4.5 pb-6.5 bg-White'>
        <Nav />
      </nav>
      <div className='flex flex-col justify-center w-full h-[18.9rem] bg-[url(/images/image-product-1.jpg)] bg-center bg-cover'>
        <Image />
      </div>
      <div className='px-6 pt-5.5'>
        <Info />
      </div>
    </main>
  )
}

export default App
