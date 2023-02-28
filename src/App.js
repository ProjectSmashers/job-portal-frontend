import './App.css';
import { Route, Routes } from 'react-router-dom';
import LoginForm from './components/loginForm';
import NavBar from './components/navbar';
import HomeBackground from './components/design/home-background';


function App() {
  return (

    <div className="App">

      <div><NavBar />
        <div className='content'>
            <Routes>
              <Route path='/home' element={<HomeBackground/>} />
              <Route path='/login' element={<LoginForm/>} />
              <Route path='/aboutus' element={<div>Hello</div>} />
            </Routes>
        </div>
      </div>
    </div>
  );
}
export default App;