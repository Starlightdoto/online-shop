import React, {useState} from 'react';
import {Route, Routes} from "react-router-dom";
import {MainPage} from "./routes/MainPage";
import CartPage from './routes/CartPage';
import ProfilePage from "./routes/ProfilePage";
import SingleProductPage from "./routes/SingleProductPage";
import Login from "./routes/LoginPage";

function App() {
    const [cartItems, setCartItems] = useState<{}[]>([]);


    return (
      <div className="App">
          <Routes>
              <Route path={"/"} element={<MainPage  />}/>
              <Route path={"/cart"} element={<CartPage setCartItems={setCartItems} cartItems={cartItems} />}/>
              <Route path={"/my-profile"} element={<ProfilePage />} />
              <Route path={"/product/:id"} element={<SingleProductPage  setCartItems={setCartItems} />} />
              <Route path={"/login"} element={<Login /> } />


          </Routes>
       </div>
    );
}

export default App;
