import logo from './logo.svg';
import './App.css';

function App() {
  const object={
    Name:'Rutuja',
    Age:20,
    College:'B.J.College Ale'
  
  }
  return (
    <div>
      <div><strong>Name:</strong>{object.Name}</div>
      <div><strong>Age:</strong>{object.Age}</div>
      <div><strong>College:</strong>{object.College}</div>
    </div>
  );
}

export default App;
