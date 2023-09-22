import React, {useState} from 'react';
import {Route, Routes} from "react-router-dom";
import {MainPage} from "./routes/MainPage";
import CartPage from './routes/CartPage';
import ProfilePage from "./routes/ProfilePage";
import SingleProductPage from "./routes/SingleProductPage";
import LoginPage from "./routes/LoginPage";
import {useTranslation} from 'react-i18next';
import i18n from './config/i18n/i18n';
import { I18nextProvider } from 'react-i18next';
import SignUpPage from "./routes/SignUpPage";

function App() {
    const [cartItems, setCartItems] = useState<{}[]>([]);
    const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);
    const [isSignedUp, setIsSignedUp] = useState<boolean>(true);

    return (
      <I18nextProvider i18n={i18n}>
          <div className="App">
              <Routes>
                  <Route path={"/"} element={<MainPage isSignedUp={isSignedUp} setIsSignedUp={setIsSignedUp} setIsLoggedIn={setIsLoggedIn} isLoggedIn={isLoggedIn}  />}/>
                  <Route path={"/cart"} element={<CartPage setCartItems={setCartItems} cartItems={cartItems} />}/>
                  <Route path={"/my-profile"} element={<ProfilePage />} />
                  <Route path={"/product/:id"} element={<SingleProductPage  setCartItems={setCartItems} />} />
                  <Route path={"/login"} element={<LoginPage isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} /> } />
                  <Route path={"/sign-up"} element={<SignUpPage/>}/>
              </Routes>
          </div>
      </I18nextProvider>
    );
}

export default App;
