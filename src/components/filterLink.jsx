import React from 'react';

export const FilterLink = ({
  store,
  filter,
  currentFilter,
  children
}) => {
  if (filter === currentFilter) {
    return <span>{children}</span>
  }
  return (
    <a href={'#' + children}
    onClick={e => {
      e.preventDefault();
      store.dispatch({
        type: 'SET_VISIBILITY_FILTER',
        filter
      });
    }}
    >
      {children}
    </a>
  )
}
