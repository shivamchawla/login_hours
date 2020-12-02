import logo from './logo.svg';
import './App.css';
import Button from './components/Button'
import Navigation from './components/Navigation';

function App() {
  return (
    <div className="App">
        <Navigation />

        <Button user = "Start" />  
        <Button user = "Pause" />
        <Button user = "Stop" />
    </div>
  );
}

export default App;
