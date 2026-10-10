import React from 'react';

// Used only by the GitHub Pages build (see vite.config.js). The public website
// needs no Base44 login, so auth is always "loaded, signed out, no error".
const state = {
  user: null,
  isAuthenticated: false,
  isLoadingAuth: false,
  isLoadingPublicSettings: false,
  authError: null,
  appPublicSettings: null,
  authChecked: true,
  logout: () => {},
  navigateToLogin: () => {},
  checkUserAuth: async () => {},
  checkAppState: async () => {},
};

export const AuthProvider = ({ children }) => <>{children}</>;

export const useAuth = () => state;