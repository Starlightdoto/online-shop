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
import {onAuthStateChanged} from 'firebase/auth';
import {auth} from "./firebase";
import OrdersIdPage from "./routes/SingleOrderPage";
import ordersList from "./components/OrdersList";



function App() {
    const [cartItems, setCartItems] = useState<{}[]>([]);
    const [snackBarIsOpen, setSnackBarIsOpen] = useState<boolean>(false);
    const [snackBarInfo, setSnackBarInfo] = useState<string>('success');
    const [snackBarMessage, setSnackBarMessage] = useState<string>('Snackbar message');
    const [currentUser, setCurrentUser] = useState<any | null>(null);

    useEffect(()=> {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if(user) {
                setCurrentUser(user);
            } else {
                setCurrentUser(null);
            }
        });

        return () => unsubscribe();
    }, [auth]);


    return (
      <I18nextProvider i18n={i18n}>
          <div className="App">
              <SimpleSnackBar message={snackBarMessage}
                              snackBarInfoType={snackBarInfo}
                              snackBarIsOpen={snackBarIsOpen}
                              setSnackBarIsOpen={setSnackBarIsOpen} />
              <Routes>
                  <Route path={"/"} element={
                      <MainPage  setSnackBarMessage={setSnackBarMessage}
                                 setSnackBarInfo={setSnackBarInfo}
                                 snackBarInfo={snackBarInfo}
                                 snackBarIsOpen={snackBarIsOpen}
                                 setSnackBarIsOpen={setSnackBarIsOpen}
                                 cartItems={cartItems} setCartItems={setCartItems}
                                 setCurrentUser={setCurrentUser} currentUser={currentUser}  />}/>
                  <Route path={"/cart"} element={<CartPage setSnackBarMessage={setSnackBarMessage}
                                                           snackBarInfo={snackBarInfo}
                                                           setSnackBarInfo={setSnackBarInfo}
                                                           snackBarIsOpen={snackBarIsOpen}
                                                           setSnackBarIsOpen={setSnackBarIsOpen}
                                                           setCurrentUser={setCurrentUser}
                                                           currentUser={currentUser}
                                                           setCartItems={setCartItems}
                                                           cartItems={cartItems} />}/>
                  <Route path={"/my-profile"} element={<ProfilePage setSnackBarMessage={setSnackBarMessage}
                                                                    snackBarIsOpen={snackBarIsOpen}
                                                                    setSnackBarIsOpen={setSnackBarIsOpen}
                                                                    setCurrentUser={setCurrentUser}
                                                                    currentUser={currentUser}
                                                                    snackBarInfo={snackBarInfo}
                                                                    setSnackBarInfo={setSnackBarInfo}
                  />} />
                  <Route path={"/product/:id"} element={<SingleProductPage currentUser={currentUser}
                                                                           setCurrentUser={setCurrentUser}
                                                                           setSnackBarMessage={setSnackBarMessage}
                                                                           snackBarIsOpen={snackBarIsOpen}
                                                                           snackBarInfo={snackBarInfo}
                                                                           setSnackBarInfo={setSnackBarInfo}
                                                                           setSnackBarIsOpen={setSnackBarIsOpen}
                                                                           setCartItems={setCartItems} />} />
                  <Route path={"/login"} element={<LoginPage setSnackBarMessage={setSnackBarMessage}
                                                             snackBarInfo={snackBarInfo}
                                                             setCurrentUser={setCurrentUser}
                                                             currentUser={currentUser}
                                                              setSnackBarInfo={setSnackBarInfo}
                                                             snackBarIsOpen={snackBarIsOpen}
                                                             setSnackBarIsOpen={setSnackBarIsOpen}/> } />
                  <Route path={"/sign-up"} element={<SignUpPage snackBarIsOpen={snackBarIsOpen}
                                                                snackBarInfo={snackBarInfo}
                                                                currentUser={currentUser}
                                                                setCurrentUser={setCurrentUser}
                                                                setSnackBarInfo={setSnackBarInfo}
                                                                setSnackBarMessage={setSnackBarMessage}
                                                                setSnackBarIsOpen={setSnackBarIsOpen}/>}/>
                  <Route path={"/orders"} element={<OrdersPage setSnackBarMessage={setSnackBarMessage}
                                                               snackBarInfo={snackBarInfo}
                                                               setSnackBarInfo={setSnackBarInfo}
                                                               snackBarIsOpen={snackBarIsOpen}
                                                               setSnackBarIsOpen={setSnackBarIsOpen}
                                                               setCurrentUser={setCurrentUser}
                                                               currentUser={currentUser}
                                                               setCartItems={setCartItems}
                                                               cartItems={cartItems} />}/>
                  <Route path={"/orders/:id"}  element={<OrdersIdPage setSnackBarInfo={setSnackBarInfo}
                                                                      currentUser={currentUser}
                                                                      setCurrentUser={setCurrentUser}
                                                                      setSnackBarIsOpen={setSnackBarIsOpen}
                                                                      setSnackBarMessage={setSnackBarMessage}
                                                                      snackBarInfo={snackBarInfo}
                                                                      snackBarIsOpen
                                                                      products={cartItems} />} />
              </Routes>
          </div>
      </I18nextProvider>
    );
}

export default App;
