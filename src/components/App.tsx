import './App.css'
import NavBar from './NavBar'

function App() {
    return (
      <div className="flex justify-center items-center bg-blue-50 w-screen h-screen min-w-xs">
        <div className=" bg-white border rounded-xl shadow-sm w-4/5 md:w-2/3 h-1/2 sm:h-3/4">
          <NavBar></NavBar>
        </div>
      </div>

    )
}

export default App
    