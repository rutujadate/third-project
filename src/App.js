import logo from './logo.svg';
import './App.css';

function App() {
  const student = [
    { srno: 1, name: 'Rutuja', marks: 90 },
    { srno: 2, name: 'Shravani', marks: 90 },
    { srno: 3, name: 'Trusha', marks: 90 },
    { srno: 4, name: 'Gaurav', marks: 90 },
    { srno: 5, name: 'Shardul', marks: 90 },
    { srno: 6, name: 'Anamika', marks: 90 },
    { srno: 7, name: 'Ayush', marks: 90 },

  ]
  return (
    <table border='1'>
      <tr>
        <th>srno</th>
        <th>name</th>
        <th>marks</th>
      </tr>
      {student.map((singleElement) => {
        return <tr>
          <td>{singleElement.srno}</td>
          <td>{singleElement.name}</td>
          <td>{singleElement.marks}</td>
        </tr>
        
   
  })}
    </table>
  );
}

export default App;
