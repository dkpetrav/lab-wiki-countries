import './App.css';
import Navbar from './components/Navbar';
//import ErrorPage from './ErrorPage';
import countriesData from './countries.json';
import CountriesList from './components/CountriesList';

import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route
          path="/CountriesList"
          element={<CountriesList countries={countriesData} />}
        />
      </Routes>
    </div>
  );
}

export default App;
