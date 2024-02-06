import { FC, useState } from 'react';
import { NavLink } from 'react-router-dom';
import user from '../../img/user.svg';
import useres from '../../img/users.svg';
import home from '../../img/home.svg';
import plus from '../../img/plus.svg';
import building from '../../img/building.svg';

interface NavigetProps {}

const Naviget: FC<NavigetProps> = () => {
  const [activeNavLink, setActiveNavLink] = useState('/dashboard');

  const handleNavLinkClick = (link: string) => {
    setActiveNavLink(link);
  };

  return (
    <div className="h-full w-[250px] bg-slate-400 p-6 text-[25px] text-white">
      <div>
        <NavLink
          to="/dashboard"
          onClick={() => handleNavLinkClick('/dashboard')}
          className={` no-underline ${activeNavLink === '/dashboard' ? 'active' : ''}`}
        >
          <p className="flex items-center gap-2">
            <img className="w-[25px]" src={home} alt="" />
            Dashboard
          </p>
        </NavLink>
        <NavLink
          to="/dashboard/users"
          onClick={() => handleNavLinkClick('/dashboard/users')}
          className={` no-underline ${activeNavLink === '/dashboard/users' ? 'active' : ''}`}
        >
          <p className="flex items-center gap-2">
            <img className="w-[25px]" src={useres} alt="" />
            Users
          </p>
        </NavLink>
        <NavLink
          to="/dashboard/roles"
          onClick={() => handleNavLinkClick('/dashboard/roles')}
          className={` no-underline ${activeNavLink === '/dashboard/roles' ? 'active' : ''}`}
        >
          <p className="flex items-center gap-2">
            <img className="w-[25px]" src={user} alt="" />
            Roles
          </p>
        </NavLink>
        <NavLink
          to="/dashboard/Companies"
          onClick={() => handleNavLinkClick('/dashboard/Companies')}
          className={` no-underline ${activeNavLink === '/dashboard/Companies' ? 'active' : ''}`}
        >
          <p className="flex items-center gap-2">
            <img className="w-[25px]" src={building} alt="" />
            Companies
          </p>
        </NavLink>
      </div>
    </div>
  );
};

export default Naviget;
