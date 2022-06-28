import { Routes, Route } from 'react-router-dom';

import './App.css'
import { CountriesDetails } from './components/countryDetails/CountriesDetails';

import { CountryList } from './components/countryList/CountryList';
import {Container, SwitchMode,Title} from './styled/App.styled';

function App() {
  return (
    <Container>

      <SwitchMode>
        <Title>
          <h5>Where in the world</h5>
        </Title>
          Dark Mode
      </SwitchMode>

      <div>
        <Routes>
          <Route path='/' element={<CountryList />} />
          <Route path='/country/:countryName' element={<CountriesDetails />} />
        </Routes>
      </div>
    </Container>
  )
}

export default App
