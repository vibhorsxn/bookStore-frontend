import DataList  from './DataList';
// import Form from './Form';
import './App.css';
import { API } from './backend';

function App() {
  console.log("Api is", API)
  return (
    <div className="App">
      
     <DataList/>
    </div>
  );
}

export default App;
