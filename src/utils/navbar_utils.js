import { useState } from 'react';

export const useNavbar = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  return { isNavOpen, toggleNav };
};
