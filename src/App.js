import logo from './logo.svg';
import './App.css';
import Header from './Header';
import Sidebar from './Sidebar';
import Dashboard from './Dashboard';
import Footer from './Footer';

function App() {
  return (
    <div className="App">
    <Header/>
    <Sidebar/>
    <Dashboard/>
    <Footer/>
    </div>
  );
}

export default App;
