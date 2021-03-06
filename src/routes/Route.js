import React from 'react';
import PropTypes from 'prop-types';
import { Route, Redirect } from 'react-router-dom';

import Authlayout from '~/pages/_layouts/auth';
import Defaultlayout from '~/pages/_layouts/default';

export default function RouteWrapper({
  component: Component,
  isPrivate,
  ...rest
}) {
  const signed = false;

  if (signed && isPrivate) {
    return <Redirect to="/" />;
  }

  if (signed && !isPrivate) {
    return <Redirect to="/dashboard" />;
  }
  const Layout = signed ? Defaultlayout : Authlayout;
  return (
    <Route
      {...rest}
      render={props => (
        <Layout>
          <Component {...props} />
        </Layout>
      )}
    />
  );
}

RouteWrapper.propTypes = {
  isPrivate: PropTypes.bool,
  component: PropTypes.oneOfType([PropTypes.element, PropTypes.func])
    .isRequired,
};

RouteWrapper.defaultProps = {
  isPrivate: false,
};
