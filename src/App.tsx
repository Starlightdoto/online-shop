import React, {useEffect, useState} from 'react';
import {Route, Routes} from "react-router-dom";
import {MainPage} from "./routes/MainPage";
import CartPage from './routes/CartPage';
import ProfilePage from "./routes/ProfilePage";
import SingleProductPage from "./routes/SingleProductPage";

function App() {
    const [cartItems, setCartItems] = useState<{}[]>([]);


    return (
      <div className="App">
          <Routes>
              <Route path={"/"} element={<MainPage  />}/>
              <Route path={"/cart"} element={<CartPage setCartItems={setCartItems} cartItems={cartItems} />}/>
              <Route path={"/my-profile"} element={<ProfilePage />} />
              <Route path={"/product/:id"} element={<SingleProductPage cartItems={cartItems} setCartItems={setCartItems} />} />
          </Routes>
       </div>
    );
}

export default App;
