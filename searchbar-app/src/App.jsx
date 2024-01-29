import './App.css'
import Searchbar from './Components/Searchbar'

function App() {

  return (
    <>
        <div className="App">
          <div className="search-bar-container">
            <Searchbar/>
            <div>Search Results</div>
          </div>
        </div>
    </>
  )
}

export default App
