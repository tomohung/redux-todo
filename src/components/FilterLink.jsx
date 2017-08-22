import React from 'react';
import { Link } from 'react-router';
import { PropTypes } from 'prop-types';

const FilterLink = ({filter, children}) => (
  <Link
    to={filter === 'all' ? "/" : filter}
    activeStyle={{
      textDecoration: 'none',
      color: 'black'
    }}
  >
    {children}
  </Link>
);

FilterLink.propTypes = {
  filter: PropTypes.oneOf(['all', 'completed', 'active']).isRequired,
  children: PropTypes.node.isRequired
}

export default FilterLink;
