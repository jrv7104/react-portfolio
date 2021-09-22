import About from './assets/components/About.js';
import Header from './assets/components/Header.js';
import MainProject from './assets/components/MainProject.js';
import projects from './assets/components/ProjectData.json'

function App() {
  return( <div>
  <Header/>
  <About/>
  {projects.map((project, index) => ( <MainProject key={index} project={project}/>))}
  </div>);
}

export default App;
