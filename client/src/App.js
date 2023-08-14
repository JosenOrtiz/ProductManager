import './App.css';
import { Routes, Route, Link } from 'react-router-dom';
import DashboardPage from './views/DashboardPage';
import CreatePage from './views/CreatePage';
import EditPage from './views/EditPage';
import DetailsPage from './views/DetailsPage';
import ApiPage from './views/ApiPage';

function App() {
  return (
    <div className="App">
      <h1>Product Manager</h1>
      <Link to="/prods">Dashboard</Link> | 
      <Link to="/prods/create"> Create</Link>
      <Routes>
      <Route path ="/api/test" element={<ApiPage />} />
        <Route path ="/prods" element={<DashboardPage />} />
        <Route path ="/prods/create" element={<CreatePage />} />
        <Route path ="/prods/:id" element={<DetailsPage />} />
        <Route path ="/prods/:id/edit" element={<EditPage />} />
      </Routes>
    
    </div>
  );
}

export default App;
