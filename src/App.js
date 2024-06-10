import { Routes, Route } from 'react-router-dom'
import { lazy, Suspense } from 'react';

import Nav from './routes/nav/nav';
import LandingPage from "./routes/landing-page/landing-page";
import SignIn from './routes/sign-in/sign-in';
import Checkout from './routes/checkout/checkout';
import Spinner from './components/spinner/spinner';
import Tryit from './routes/z-tryit/tryit';

// src-routes_shop_shop_jsx.chunk.js comes lates
//
const Shop = lazy(() => import('./routes/shop/shop'));

const App = () => {

  return (
    // while lazily loading Shop component, show Spinner
    //
    <Suspense fallback={<Spinner />}>
      <Routes>
        <Route path='/'  element={<Nav />} >
          <Route index element={<LandingPage />} />
          <Route path='Tryit' element={<Tryit />} />
          <Route path='shop/*' element={<Shop />} />
          <Route path='checkout' element={<Checkout />} />
          <Route path='sign-in' element={<SignIn />} />
        </Route>
      </Routes> 
    </Suspense>
  )
}

export default App;
