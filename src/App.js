import './App.css';
import Footer from './Footer/Footer.js'
import Nav from './Nav_Bar/Nav.js'

function App() {
  return (
    <div className="App">
      <Nav name="Dwij Shah"/>
      <main className="content">
        {/* Your main content goes here */}
      </main>
      <Footer name="Dwij Shah" github="https://github.com/ReverseToshi" linkedin="https://www.linkedin.com/in/dwij-shah-revert" docker="https://hub.docker.com/u/reversetoshi" leetcode="https://leetcode.com/ReverseToshi"/>
    </div>
  );
}

export default App;
