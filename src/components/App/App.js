
import Representative from '../Representative/Representaive';
import './App.css';
import Human from '../Human/Human';
import CaseDetail from '../CaseDetails/CaseDetail';

function App() {
  return (
    <div className="App">
      <div>
        <Human />
        <Representative />
      </div>
      <div>
        <CaseDetail/>
      </div>
    </div>
  );
}

export default App;
