import './App.css';
import { Routes, Route } from "react-router-dom";
import Home from './pages/Home/Home';
import Login from './pages/Login/Login/Login';
import Register from './pages/Login/Register/Register';
import NotFound from './pages/Shared/NotFound/NotFound';
import Fruits from './pages/Fruits/Fruits';
import Footer from './pages/Shared/Footer/Footer';
import Header from './pages/Shared/Header/Header';
import AddFruits from './pages/Private/AddFruits/AddFruits';
import MyFruits from './pages/Private/MyFruits/MyFruits';
import RequireAuth from './pages/Login/RequireAuth/RequireAuth';
import FruitsDetail from './pages/Fruits/FruitsDetail/FruitsDetail';
import ForgetPassword from './pages/Login/Login/ForgetPassword/ForgetPassword';
import AdminRequireAuth from './AdminAuth/AdminRequireAuth/AdminRequireAuth';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/home" element={<Home></Home>}></Route>
        <Route path="/fruits" element={
          <RequireAuth>
            <AdminRequireAuth>
              <Fruits></Fruits>
            </AdminRequireAuth>
          </RequireAuth>
        }></Route>
        <Route path="fruits/:fruitId" element={
          <RequireAuth>
            <FruitsDetail></FruitsDetail>
          </RequireAuth>
        }></Route>
        <Route path="/register" element={<Register></Register>}></Route>
        <Route path="/login" element={<Login></Login>}></Route>
        <Route path="/forgetpassword" element={<ForgetPassword></ForgetPassword>}></Route>
        <Route path="/addfruits" element={
          <RequireAuth>
            <AdminRequireAuth>
              <AddFruits></AddFruits>
            </AdminRequireAuth>
          </RequireAuth>
        }></Route>
        <Route path="/myfruits" element={
          <RequireAuth>
            <AdminRequireAuth>
              <MyFruits></MyFruits>
            </AdminRequireAuth>
          </RequireAuth>
        }></Route>
        <Route path="*" element={<NotFound></NotFound>}></Route>
      </Routes>

      <Footer></Footer>
    </div>
  );
}

export default App;
