import './App.css'
import AllCards from './components/AllCards/AllCards'
import Footer from './components/Footer/Footer'
import Header from './components/Header/Header'
import SearchCountry from './components/SearchCountry/SearchCountry'

function App() {
  return (
    <>
   <header><Header/></header>
   <main>
   <AllCards/>
    <SearchCountry/>
   </main>
   <footer>
   <Footer/>
   </footer>
    </>
  )
}

export default App
