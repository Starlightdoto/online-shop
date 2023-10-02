import React, {useEffect, useState} from 'react';
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
    const [snackBarIsOpen, setSnackBarIsOpen] = useState<boolean>(false);
    const [snackBarInfo, setSnackBarInfo] = useState<string>('success');
    const [snackBarMessage, setSnackBarMessage] = useState<string>('Snackbar message');

    return (
      <I18nextProvider i18n={i18n}>
          <div className="App">
              <SimpleSnackBar message={snackBarMessage} snackBarInfoType={snackBarInfo} snackBarIsOpen={snackBarIsOpen} setSnackBarIsOpen={setSnackBarIsOpen} />
              <Routes>
                  <Route path={"/"} element={
                      <MainPage setSnackBarMessage={setSnackBarMessage} setSnackBarInfo={setSnackBarInfo} snackBarInfo={snackBarInfo} snackBarIsOpen={snackBarIsOpen}
                                setSnackBarIsOpen={setSnackBarIsOpen}
                                cartItems={cartItems} setCartItems={setCartItems}
                                isSignedUp={isSignedUp} setIsSignedUp={setIsSignedUp}
                                setIsLoggedIn={setIsLoggedIn} isLoggedIn={isLoggedIn}  />}/>
                  <Route path={"/cart"} element={<CartPage setSnackBarMessage={setSnackBarMessage} snackBarInfo={snackBarInfo} setSnackBarInfo={setSnackBarInfo}
                                                            snackBarIsOpen={snackBarIsOpen}
                                                           setSnackBarIsOpen={setSnackBarIsOpen}
                                                           setIsLoggedIn={setIsLoggedIn} isLoggedIn={isLoggedIn}
                                                           setCartItems={setCartItems} cartItems={cartItems} />}/>
                  <Route path={"/my-profile"} element={<ProfilePage setSnackBarMessage={setSnackBarMessage} snackBarIsOpen={snackBarIsOpen} setSnackBarIsOpen={setSnackBarIsOpen}
                                                                    isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn}
                                                                    snackBarInfo={snackBarInfo} setSnackBarInfo={setSnackBarInfo}
                  />} />
                  <Route path={"/product/:id"} element={<SingleProductPage setSnackBarMessage={setSnackBarMessage} snackBarIsOpen={snackBarIsOpen}
                                                                           snackBarInfo={snackBarInfo} setSnackBarInfo={setSnackBarInfo}
                                                                           setSnackBarIsOpen={setSnackBarIsOpen}
                                                                           setCartItems={setCartItems} />} />
                  <Route path={"/login"} element={<LoginPage setSnackBarMessage={setSnackBarMessage}
                                                             snackBarInfo={snackBarInfo}
                                                             isLoggedIn={isLoggedIn}
                                                             setIsLoggedIn={setIsLoggedIn} setSnackBarInfo={setSnackBarInfo}
                                                             snackBarIsOpen={snackBarIsOpen} setSnackBarIsOpen={setSnackBarIsOpen}/> } />
                  <Route path={"/sign-up"} element={<SignUpPage setSnackBarInfo={setSnackBarInfo} setSnackBarMessage={setSnackBarMessage} setSnackBarIsOpen={setSnackBarIsOpen}/>}/>
                  <Route path={"/orders"} element={<OrdersPage setSnackBarMessage={setSnackBarMessage}
                                                               snackBarInfo={snackBarInfo} setSnackBarInfo={setSnackBarInfo}
                                                               snackBarIsOpen={snackBarIsOpen}
                                                               setSnackBarIsOpen={setSnackBarIsOpen}
                                                               setIsLoggedIn={setIsLoggedIn}
                                                               isLoggedIn={isLoggedIn}
                                                               setCartItems={setCartItems}
                                                               cartItems={cartItems} />}/>
              </Routes>
          </div>
      </I18nextProvider>
    );
}

export default App;
