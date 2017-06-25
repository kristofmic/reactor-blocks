import React from 'react';
import PropTypes from 'prop-types';

export default class Link extends React.PureComponent {
  handleClick = (e) => {
    const {
      href,
      onClick,
    } = this.props;

    if (onClick) {
      e.preventDefault();

      onClick(href, e);
    }
  }

  render() {
    const {
      children,
      className,
      href,
      onClick,
      ...other
    } = this.props;

    return (
      <a
        className={className}
        href={href}
        onClick={this.handleClick}
        {...other}
      >
        {children}
      </a>
    );
  }
}

Link.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  href: PropTypes.string,
  onClick: PropTypes.func,
};

Link.defaultProps = {
  className: '',
};
