import logo from './logo.svg'
import './App.css'
import Header from './Components/Header/Header'
import Main from './Pages/Main'

function App() {
  return (
    <div className="app__wrapper">
      <div className="app">
        <Header></Header>
        <Main></Main>
      </div>
    </div>
  );
}

export default App;
