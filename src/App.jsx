
import './App.css'
import ResultsSummary from './components/ResultsSummary'
import  data from "../data.json"
function App() {
 
  return (
    <main className='App'>
   <ResultsSummary data={data} />
    </main>
  )
}

export default App
