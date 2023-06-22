import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import CreateUser from './Components/CreateUser';
import UpdateUser from './Components/UpdateUser';
import UserList from './Components/UserList';

function App() {
  return (
    <div className="App">
      <h1>CRUD REACT-REDUX</h1>



      <BrowserRouter >
        <Routes>
            <Route path='/' element={<UserList />} />
            <Route path='/create-user' element={<CreateUser />} />
            <Route path='/update-user/:id' element={<UpdateUser />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
