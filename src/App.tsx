import Main from "./components/Main";
import Navbar from "./components/Navbar";
import WorkExperience from "./components/WorkExperience";
import "./style.scss"


function App() {

  return (
    <>
      <div id="root">
        <Navbar />
        <Main />
        <WorkExperience />
      </div>
    </>
  )
}

export default App;
