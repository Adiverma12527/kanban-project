
import './App.css';
import { DescriptionPg } from './DescriptionPage/DescriptionPg';
import { Home } from './Home/Home';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  const newid=0
  return (

    <div className="App">

      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/task/:id' element={<DescriptionPg />} />
        </Routes>
      </BrowserRouter>
    </div>

  );
}

export default App;

