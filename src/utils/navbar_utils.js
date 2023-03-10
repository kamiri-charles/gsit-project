import { useState } from 'react';

export const useNavbar = () => {
  const [isNavOpen, setIsNavOpen] = useState(true);

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  return { isNavOpen, toggleNav };
};
