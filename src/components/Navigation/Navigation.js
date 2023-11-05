import { React } from 'react';
import { NavLink } from 'react-router-dom';
import s from './Navigation.module.scss';
import { useSelector } from 'react-redux';
import { authSelectors } from '../../redux/auth';

import { FcHome, FcAutomatic } from 'react-icons/fc';

export default function Navigation() {
  const isAuthenticated = useSelector(authSelectors.getIsAuthenticated);

  return (
    <div>
      <NavLink
        exact
        to="/"
        activeClassName={s.activeNavLink}
        className={s.navLink}
      >
        {/* Home */}
        <FcHome className={s.homeColorButton} />
      </NavLink>

      {isAuthenticated && (
        <NavLink
          data-tip="Do you want to delete this contact?"
          to="/colors"
          activeClassName={s.activeNavLink}
          className={s.navLink}
        >
          {/* Edit colors */}

          <FcAutomatic className={s.editColorButton} />
        </NavLink>
      )}
    </div>
  );
}
