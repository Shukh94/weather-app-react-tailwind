import Inputs from "./components/Inputs";
import TopButtons from "./components/TopButtons";

const App = () => {
  return (
    <div className=" mx-auto items-center max-w-screen-lg mt-4 py-5 px-32 bg-gradient-to-br shadow-xl shadow-gray-400 from-cyan-700 to-blue-700">
      <TopButtons />
      <Inputs />
    </div>
  )
}

export default App
