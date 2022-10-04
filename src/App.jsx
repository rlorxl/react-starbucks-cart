import Order from "./Pages/Order";
import OrderDetail from './Pages/OrderDetail';
import Cart from './Pages/Cart';
import classes from "./App.module.css";
import {Routes, Route} from 'react-router';

function App() {
  return (
      <div className={classes.app}>
        <Routes>
          <Route element={<Order />} path="/" />
          <Route element={<OrderDetail />} path="/detail/:id"></Route>
          <Route element={<Cart />} path="/cart"></Route>
        </Routes>
      </div>
  );
};

export default App;
