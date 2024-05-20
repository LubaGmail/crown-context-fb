import { Routes, Route } from 'react-router-dom'

import Nav from './routes/nav/nav';
import LandingPage from "./routes/landing-page/landing-page";
import SignIn from './routes/sign-in/sign-in';
import Shop from './routes/shop/shop';
import Checkout from './routes/checkout/checkout';
import Tryit from './routes/z-tryit/tryit';

const App = () => {

  return (
    
    <Routes>
      <Route path='/'  element={<Nav />} >
        <Route index element={<LandingPage />} />
        <Route path='Tryit' element={<Tryit />} />
        <Route path='shop/*' element={<Shop />} />
        <Route path='checkout' element={<Checkout />} />
        <Route path='sign-in' element={<SignIn />} />
      </Route>
    </Routes> 
    
  )
}

export default App;
