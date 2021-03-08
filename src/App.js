import './App.css';
import './tailwind.css';
import Header from './Header/Header.js'
import Body from './Body/Body';
import Checklist from './Body/Checklist';
import Team from './Body/Team';
import Plans from './Body/Plans';
import Footer from './Footer/Footer'

function App() {
  return (
    <div className="App">
      <link href="https://fonts.googleapis.com/css2?family=Rubik:wght@300;400;500;700;900&display=swap" rel="stylesheet"></link>
      <Header></Header>
      <Body></Body>
      <Checklist></Checklist>
      <Team></Team>
      <Plans></Plans>
      <Footer></Footer>
      
    </div>

  );
}

export default App;
