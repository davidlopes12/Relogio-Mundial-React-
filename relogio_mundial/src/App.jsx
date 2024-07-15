import { useState } from 'react';
import './App.css'
import TImeZoneClock from './components/TImeZoneClock';

function App() {

  const fusosHorarios = [
    "UTC",
    "GMT",
    "America/New_York",
    "America/Chicago",
    "America/Denver",
    "America/Los_Angeles",
    "Europe/London",
    "Europe/Berlin",
    "Asia/Tokyo",
  ];

const fusoHorarioLocal = Intl.DateTimeFormat().resolvedOptions.timeZone;
const [fusoHorarios, setFusoHorarios] = useState([fusoHorarioLocal])

const adicionarFusoHorario = (e) => {
  const novoFuso = e.target.value;
  if(!fusoHorarios.includes(novoFuso)) {
    setFusoHorarios([...fusoHorarios, novoFuso])
  }
}

  return (
    <div>
      <h1>Relógio mundial</h1>
      <select onChange={(e) => adicionarFusoHorario(e)} >
        <option value="">Selecione um fuso horário</option>
        {fusosHorarios.map((fuso) => (
          <option value={fuso} key={fuso}>{fuso}</option>
        ))}
      </select>
      <div>{fusoHorarios.map((fuso) => (
        <TImeZoneClock key={fuso} timeZone={fuso}/>
      ))}</div>
    </div>
  )
}

export default App
