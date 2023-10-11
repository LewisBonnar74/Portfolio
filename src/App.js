import "./App.css";
import LinksBar from "./components/LinksBar";
import MyLogo from "./components/MyLogo";
import NameAndTitle from "./components/NameAndTitle";
import linksSources from "./components/LinksBar";
import imageSources from './components/LinksBar'
import Bio from "./components/Bio";

function App() {
  return (
    <div className="App">
      <MyLogo />
      <LinksBar linksSources={linksSources} imageSources={imageSources}/>
      <NameAndTitle />
      <Bio />
    </div>
  );
}

export default App;
