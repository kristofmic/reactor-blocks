import React from 'react';
import PropTypes from 'prop-types';

import classnames from '../../utils/classnames';

import * as CLASSES from '../../utils/classes';

export default function Blockquote(props) {
  const {
    children,
    citation,
    className,
    footer,
    ...other
  } = props;

  return (
    <blockquote
      className={classnames('blockquote', className)}
      {...other}
    >
      {(React.Children.count(children) === 1) ? (
        <p className={CLASSES.MARGIN.BOTTOM_0}>{children}</p>
      ) : (
          children
        )}
      {(footer) && (
        <footer className="blockquote-footer">
          {footer}
          {(citation) && (
            <cite title={citation}>{citation}</cite>
          )}
        </footer>
      )}
    </blockquote>
  );
}

Blockquote.propTypes = {
  children: PropTypes.node,
  citation: PropTypes.string,
  className: PropTypes.string,
  footer: PropTypes.string,
};

Blockquote.defaultProps = {
  className: '',
  reverse: false,
};
