import './app.scss';
import { Aside } from './components/aside/Aside';
import { Tickets } from './components/tickets/Tickets';

function App() {
  return (
    <div className="App">
      <Aside />
      <Tickets />
    </div>
  );
}

export default App;
