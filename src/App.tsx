import React, {useState} from 'react';
import {Route, Routes} from "react-router-dom";
import {MainPage} from "./routes/MainPage";
import CartPage from './routes/CartPage';
import ProfilePage from "./routes/ProfilePage";
import SingleProductPage from "./routes/SingleProductPage";
import LoginPage from "./routes/LoginPage";
import i18n from './config/i18n/i18n';
import { I18nextProvider } from 'react-i18next';
import SignUpPage from "./routes/SignUpPage";
import SimpleSnackBar from "./components/ui-components/SimpleSnackbar";
import OrdersPage from "./routes/OrdersPage";

function App() {
    const [cartItems, setCartItems] = useState<{}[]>([]);
    const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);
    const [isSignedUp, setIsSignedUp] = useState<boolean>(true);
    const [snackBarIsOpen, setSnackBarIsOpen] = useState(false);

    return (
      <I18nextProvider i18n={i18n}>
          <div className="App">
              <SimpleSnackBar snackBarInfoType={"success"} snackBarIsOpen={snackBarIsOpen} setSnackBarIsOpen={setSnackBarIsOpen} />
              <Routes>
                  <Route path={"/"} element={
                      <MainPage snackBarIsOpen={snackBarIsOpen}
                                setSnackBarIsOpen={setSnackBarIsOpen}
                                cartItems={cartItems} setCartItems={setCartItems}
                                isSignedUp={isSignedUp} setIsSignedUp={setIsSignedUp}
                                setIsLoggedIn={setIsLoggedIn} isLoggedIn={isLoggedIn}  />}/>
                  <Route path={"/cart"} element={<CartPage snackBarIsOpen={snackBarIsOpen} setSnackBarIsOpen={setSnackBarIsOpen} setIsLoggedIn={setIsLoggedIn} isLoggedIn={isLoggedIn} setCartItems={setCartItems} cartItems={cartItems} />}/>
                  <Route path={"/my-profile"} element={<ProfilePage isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />} />
                  <Route path={"/product/:id"} element={<SingleProductPage snackBarIsOpen={snackBarIsOpen} setSnackBarIsOpen={setSnackBarIsOpen}  setCartItems={setCartItems} />} />
                  <Route path={"/login"} element={<LoginPage isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} /> } />
                  <Route path={"/sign-up"} element={<SignUpPage/>}/>
                  <Route path={"/orders"} element={<OrdersPage snackBarIsOpen={snackBarIsOpen} setSnackBarIsOpen={setSnackBarIsOpen} setIsLoggedIn={setIsLoggedIn} isLoggedIn={isLoggedIn} setCartItems={setCartItems} cartItems={cartItems} />}/>
              </Routes>
          </div>
      </I18nextProvider>
    );
}

export default App;
