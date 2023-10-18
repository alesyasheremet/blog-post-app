import React from "react";

import "./header.css";

type User = {
  name: string;
};

interface HeaderProps {
  user?: User;
  onLogin: () => void;
  onLogout: () => void;
  onCreateAccount: () => void;
}

export const Header = () => (
  <header className="header">
    <img src="/assets/Mask.png" alt="Header Image" className="img-header" />
  </header>
);
