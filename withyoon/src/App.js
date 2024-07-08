import './App.css';

import MainPage from './Pages/common/MainPage';

import Sam_page1 from './Pages/Sam/Sam_page1';
import Yoon_page1 from './Pages/Yoon/Yoon_page1';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/' element={<MainPage />} />

          <Route path='/Sam_page1' element={<Sam_page1 />} />
          <Route path='/Yoon_page1' element={<Yoon_page1 />} />

        </Routes>
      </Router>
    </div>
  );
}

export default App;
