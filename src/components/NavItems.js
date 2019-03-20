import React from 'react';
import { Button } from 'grommet';
import { CircleInformation, Group, Phone } from 'grommet-icons';
import { Link as ScrollTo } from 'react-scroll';
import NavButton from './NavButton';

const NavItems = ({ isMobile }) => {
  const navItems = [
    {
      name: 'About',
      path: 'about',
      icon: <CircleInformation />,
    },
    {
      name: 'Join Us',
      path: 'join',
      icon: <Group />,
    },
    {
      name: 'Contact',
      path: 'contact',
      icon: <Phone />,
    },
  ];

  return navItems.map(nav => (
    <li key={nav.path}>
      <ScrollTo
        to={nav.path}
        smooth
        offset={!isMobile ? -50 : 0}
        duration={500}
      >
        {!isMobile ? (
          <Button
            plain
            hoverIndicator={{ background: false }}
            label={nav.name}
          />
        ) : (
          <Button
            plain
            fill
            hoverIndicator="light-3"
            label={<NavButton name={nav.name} icon={nav.icon} />}
          />
        )}
      </ScrollTo>
    </li>
  ));
};

export default NavItems;
