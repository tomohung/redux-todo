import React from 'react';
import { Component } from 'react';

export const Footer = ({store}) => (
  <p>
    Show:
    {' '}
    <FilterLink
      filter='SHOW_ALL'
      store={store}
    >
      All
    </FilterLink>
    {' '}
    <FilterLink
      filter='SHOW_ACTIVE'
      store={store}
    >
      Active
    </FilterLink>
    {' '}
    <FilterLink
      filter='SHOW_COMPLETED'
      store={store}
    >
      Completed
    </FilterLink>
  </p>
)

const Link = ({
  active,
  children,
  onClick
}) => {
  if (active) {
    return <span>{children}</span>
  }
  return (
    <a href={'#' + children}
      onClick={e => {
          e.preventDefault();
          onClick();
      }}
    >
      {children}
    </a>
  )
};

class FilterLink extends Component {
  componentDidMount() {
    this.unsubsribe = this.props.store.subscribe(() =>
      this.forceUpdate()
    );
  }
  componentWillUnmount() {
    this.unsubsribe();
  }
  render() {
    const props = this.props;
    const state = this.props.store.getState();

    return (
      <Link
        active={
          props.filter === state.visibilityFilter
        }
        onClick={() =>
          this.props.store.dispatch({
            type: 'SET_VISIBILITY_FILTER',
            filter: props.filter
          })
        }
      >
      {props.children}
      </Link>
    )
  }
}
