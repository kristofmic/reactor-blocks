import React from 'react';
import PropTypes from 'prop-types';

import Button from '../../components/button';
import * as CLASSES from '../../utils/classes';

import cx from '../../utils/classnames';

function ErrorMessage(props) {
  const {
    children,
    className,
    onRetry,
    ...other
  } = props;

  return (
    <div
      className={cx('error-message', CLASSES.TEXT.CENTER, CLASSES.FLEXBOX.DISPLAY.FLEX, CLASSES.FLEXBOX.DIRECTION.COLUMN, CLASSES.FLEXBOX.JUSTIFY.CENTER, className)}
      {...other}
    >
      <p className={`error-message-text ${CLASSES.MARGIN.Y_0}`}>
        {children}
      </p>
      {onRetry && (
        <Button onClick={onRetry} type="link" size="sm">Retry</Button>
      )}
    </div>
  );
}

ErrorMessage.propTypes = {
  children: PropTypes.string,
  className: PropTypes.string,
  onRetry: PropTypes.func,
};

ErrorMessage.defaultProps = {
  children: 'Oops! Something went wrong...',
  className: '',
};

export default ErrorMessage;
