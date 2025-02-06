import clsx from 'clsx';
import { NavLink } from 'react-router-dom';
import s from './Navigation.module.css';

const buildLinkClass = ({ isActive }) => {
  return clsx(s.link, isActive && s.active);
};

const Navigation = () => {
  return (
    <nav className={s.navigation}>
        <NavLink className={buildLinkClass} to='/'>Home</NavLink>
        <NavLink className={buildLinkClass} to='/movies'>Movies</NavLink>
    </nav>
  )
}

export default Navigation;
