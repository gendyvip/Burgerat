import './App.css';
import Main from './Components/Main';
import Providers from './Provider/Providers';
import { BrowserRouter } from 'react-router-dom';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Providers>
          <Main />
        </Providers>
      </BrowserRouter>
     
    </div>
  );
}

export default App;
