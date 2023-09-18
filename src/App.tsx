import React, {useState} from 'react';
import {Route, Routes} from "react-router-dom";
import {MainPage} from "./routes/MainPage";
import CartPage from './routes/CartPage';
import ProfilePage from "./routes/ProfilePage";
import SingleProductPage from "./routes/SingleProductPage";
import LoginPage from "./routes/LoginPage";

function App() {
    const [cartItems, setCartItems] = useState<{}[]>([]);
    const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);

    return (
      <div className="App">
          <Routes>
              <Route path={"/"} element={<MainPage setIsLoggedIn={setIsLoggedIn} isLoggedIn={isLoggedIn}  />}/>
              <Route path={"/cart"} element={<CartPage setCartItems={setCartItems} cartItems={cartItems} />}/>
              <Route path={"/my-profile"} element={<ProfilePage />} />
              <Route path={"/product/:id"} element={<SingleProductPage  setCartItems={setCartItems} />} />
              <Route path={"/login"} element={<LoginPage isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} /> } />

          </Routes>
       </div>
    );
}

export default App;
