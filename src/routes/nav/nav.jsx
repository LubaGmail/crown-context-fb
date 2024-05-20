import { Link, Outlet } from 'react-router-dom'
import { useContext } from 'react';

import { UserContext } from '../../contexts/user.context'
import { CartContext } from '../../contexts/cart.context';

import CartIcon from '../../components/cart-icon/cart-icon';
import CartDropdown from '../../components/cart-dropdown/cart-dropdown'

import Tryit from '../z-tryit/tryit';

import { ReactComponent as CrwnLogo } from '../../assets/crown.svg'
import './nav.styles.scss'

const Nav = () => {
  const { currentUser, setCurrentUser } = useContext(UserContext);
  const {isCartOpen, setIsCartOpen} = useContext(CartContext)
  
  const signout = () => {
    setCurrentUser(null)
  }

  return (
    <>

      <div className='nav'>
        <Link to='/'  className='logo-container'>
            <CrwnLogo  />      
        </Link>
 
        <div className='nav-links-container'>
          <span className='user-name'>currentUser: {JSON.stringify(currentUser?.userName)}</span>

          <Link to='/tryit' className='tryit-link'>
            Tryit!   
          </Link>

          <Link to='/shop' className='nav-link'>
                SHOP      
          </Link>

          { !currentUser ? (
              <Link to='/sign-in' className='nav-link'>
                 SIGN IN      
              </Link>
            ): (
              <Link className='nav-link' onClick={signout}>SIGN OUT </Link>
            )
          }

          <CartIcon />
        </div>  
        
        {
          isCartOpen && <CartDropdown />
        }

      </div>
           
      <Outlet />
    </>

  )
}

export default Nav;
