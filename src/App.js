import './App.css';
import {MyProfilPhoto} from './Component/Profile/ProfilePhoto';
import {MyFullName} from './Component/Profile/FullName';
import {MyAddress} from './Component/Profile/Adress'

function App() {
  return (
    <div className="App">
        <div className="App-header">
          <MyProfilPhoto />
          <MyFullName />
          <MyAddress />
        </div>
    </div>
  );
}

export default App;