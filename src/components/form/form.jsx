import React from 'react';
import PropTypes from 'prop-types';

import classnames from '../../utils/classnames';

export default class Form extends React.PureComponent {
  onSubmit = (e) => {
    const {
      onSubmit,
    } = this.props;

    e.preventDefault();

    onSubmit(e);
  }

  render() {
    const {
      children,
      className,
      inline,
      onSubmit,
      ...other
    } = this.props;

    return (
      <form
        className={classnames({
          'form-inline': inline,
        }, className)}
        {...other}
      >
        {children}
      </form>
    );
  }
}

Form.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  inline: PropTypes.bool,
  onSubmit: PropTypes.func.isRequired,
};

Form.defaultProps = {
  className: '',
  inline: false,
};
