import PropTypes from 'prop-types';

const Layout = ({ children }) => {
  return (
      <main className="mx-auto min-h-screen w-full max-w-7xl px-4 sm:px-8 lg:px-24">
          {children}
      </main>
  )
};

Layout.propTypes = {
  children: PropTypes.node.isRequired
};

export default Layout;
