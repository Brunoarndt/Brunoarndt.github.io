import {NavLink} from "react-router-dom";
import logo from "/images/logo.png"
// eslint-disable-next-line react/prop-types
const NavbarItem = ({path, name}) => {
  return(
    <p className="text-lg no-underline text-text hover:text-zinc ml-2">
      <NavLink to={path}>{name}</NavLink>
    </p>
  );
}

export default function Navbar() {
  return (
    <>
    <header>
      <nav className="font-lato flex justify-between py-4 md:px-12 px-4 items-baseline w-full absolute">
        <div className="mb-2 sm:mb-0 ml-3 sm:ml-0">
          <NavLink to='/'><img src={logo} alt="logo" className="w-10 h-10"/></NavLink>
        </div>
        <div className="flex">
          <NavbarItem path='/projetos' name='Projetos'/>
          <NavbarItem path='/sobrenos' name='Sobre Nós'/>
        </div>
      </nav>
    </header>
    </>
  );
}
