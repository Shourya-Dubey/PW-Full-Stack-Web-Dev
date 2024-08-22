import { Link } from 'react-router-dom';
import './App.css'
import CustomRoute from './Routes/CustomRoutes'

function App() {

  return (
    <div className='outer-pokedex'>
      <h1 id="pokedex-heading">
        <Link to={'/'}>Pokedex</Link>
      </h1>
      <CustomRoute />
    </div>
  );
}

export default App
