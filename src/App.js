import logo from './logo.svg';
import './App.css';
import Greetings from './Greetings';

function App() {
  const student = [
    { Name: "RUTUJA" },
    { Name: "SHRAVANI" },
    { Name: "TRUSHA" },
    { Name: "GAURAV" },
    { Name: "SHARDUL" },
    { Name: "AYUSH" },
    { Name: "APEKSHA" },
    { Name: "NIKITA" },
    { Name: "ANAMIKA" },
    { Name: "ISHWARI MAM" },
  ]


  return (
      <div>{<Greetings username={student}/>}</div>

  

  );
  
}
export default App;
