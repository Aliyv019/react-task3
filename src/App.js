import { useState } from 'react';
import './App.css';
import CityInput from './Components/CityInput/CityInput';
import VirusGraph from './Components/VirusGraph/graph'

function App() {
  const [data,setData]=useState("")
  const handleFormData=(country)=>{
    setData(country)
  }
  return (
    <div className="App">
      <CityInput onFormSubmit={handleFormData}/>
      <VirusGraph Countryname={data}/>
    </div>
  );
}

export default App;
