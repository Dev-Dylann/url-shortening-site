import { useState, useEffect } from 'react'
import Header from './components/Header'
import Nav from './components/Nav'
import Hero from './components/Hero'
import MainBody from './components/MainBody'
import Boost from './components/Boost'
import Footer from './components/Footer'

function App() {
  const [navState, setNavState] = useState(false);
  const [history, setHistory] = useState([]);

  useEffect(() => {
    const checkHistory = () => {
      let storage = localStorage.getItem(`Shortlink History`);

      if (storage) {
        storage = JSON.parse(storage);
      } else {
        storage = [];
        localStorage.setItem(`Shortlink History`, JSON.stringify(storage));
      }

      setHistory(storage);
    }

    checkHistory();
  }, [])

  return (
    <>
      <header className="py-8 px-6 flex flex-col gap-6 overflow-x-hidden relative sm:p-10">
        <Header 
          navState={navState}  
          setNavState={setNavState} 
        />

        <Nav navState={navState} />

        <Hero />
      </header>

      <main className='mt-28'>
        <MainBody history={history} setHistory={setHistory} />

        <Boost />
      </main>

        <Footer />
    </>
    
  )
}

export default App
