/* eslint-disable react/prop-types */
import styles from '../Hamburguer/menu.module.css';
import { NavLink } from 'react-router-dom';
import mobileLogo from '../../assets/img/mobileLogo.svg';
import { Turn as Hamburger } from 'hamburger-react';
import user from '../../assets/img/User.svg';
import { useState } from 'react';

import ContentHamburguer from '../shared/ContentHamburguer/ContentHamburguer';

const Menu = ({ isLoggedIn, setIsLoggedIn }) => {
  const [open, setOpen] = useState(false);

  const handleToggle = () => {
    setOpen(!open);
  };

  return (
    <div>
      <header className={`${styles.header} w-full  h-14 flex  justify-between items-center font-font-main text-base pt-5`} >
        {/*  <source media="(min-width:768px)" srcSet={desktopLogo} />*/}

        <div>
          <img
            className="ml-4 w-28 md:w-36 md:ml-10"
            alt="logo"
            src={mobileLogo}
          />
        </div>

        <div className="flex items-center gap-3 md:order-1 ">
          <h4 className={`${styles.font} text-[#333333]`}>
            ¡Hola Julia!{' '}
          </h4>
          <div className="md:hidden">
            <Hamburger
              onToggle={handleToggle}
              size={30}
              color="#097DCA"
            />
          </div>

          <div className="hidden md:block cursor-pointer ">
            <img onClick={handleToggle} className={`${styles.imgUser}`} src={user} alt="" />
          </div>
        </div>

        <nav className="hidden md:flex w-2/5 justify-self-center">
          <ul className="flex justify-evenly  w-full">
            <li>
              <NavLink to="/">
                <a className="text-color-primary" href="/">
                  Home
                </a>
              </NavLink>
            </li>
            <li>
              <a href="#">Nosotros</a>
            </li>
            <li>
              <a href="#">Servicios</a>
            </li>
            <li>
              <a href="#">Contacto</a>
            </li>
          </ul>
        </nav>
      </header>

      {open ? (
        <>
          <ContentHamburguer
            isLoggedIn={isLoggedIn}
            setIsLoggedIn={setIsLoggedIn}
          />
        </>
      ) : null}
    </div>
  );
};

export default Menu;