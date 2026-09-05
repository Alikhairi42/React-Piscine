import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import ApiExplorer from './ApiExplorer';
import StudentApp from './StudentApp';
import UserDetails from './UserDetails';

function Navbar() {
  return (
    <nav style={{ padding: '15px', background: '#eee', marginBottom: '20px' }}>
      <Link to="/" style={{ marginRight: '15px', fontWeight: 'bold' }}>Home</Link>
      <Link to="/profile" style={{ fontWeight: 'bold' }}>Profile</Link>
    </nav>
  );
}

function App(){
  return(
    <BrowserRouter>
    <Navbar/>
      <Routes>
        <Route path="/" element={<ApiExplorer />}/>
        <Route path="/profile" element={
          <StudentApp/>} 
          />
          <Route path="/user/:id" element={<UserDetails />} />
      </Routes>
    </BrowserRouter>
  )
}
export default App;