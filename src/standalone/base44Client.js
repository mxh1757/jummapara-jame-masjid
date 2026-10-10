// Used only by the GitHub Pages build (see vite.config.js): the static site has
// no Base44 backend, so the "who is signed in" check simply reports nobody.
export const base44 = {
  auth: {
    me: async () => {
      throw new Error('No Base44 backend on the static site');
    },
  },
};