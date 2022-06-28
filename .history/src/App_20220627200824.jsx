import { Routes, Route } from 'react-router-dom';

import './App.css'
import { CountriesDetails } from './components/countryDetails/CountriesDetails';

import { CountryList } from './components/countryList/CountryList';

function App() {
  return (
    <div>

      <div>
        <div>
          <h5>Where in the world</h5>
        </div>

        <div>
          Dark Mode
        </div>
      </div>

      <div>
        <Routes>
          <Route path='/' element={<CountryList />} />
          <Route path='/country/:countryName' element={<CountriesDetails />} />
        </Routes>
      </div>
    </div>
  )
}

export default App
