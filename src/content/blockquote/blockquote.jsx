import React from 'react';
import PropTypes from 'prop-types';

import classnames from '../../utils/classnames';

export default function Blockquote(props) {
  const {
    children,
    citation,
    className,
    footer,
    reverse,
    ...other
  } = props;

  return (
    <blockquote
      className={classnames('blockquote', {
        'blockquote-reverse': reverse,
      }, className)}
      {...other}
    >
      {(React.Children.count(children) === 1) ? (
        <p className="mb-0">{children}</p>
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
  reverse: PropTypes.bool,
};

Blockquote.defaultProps = {
  className: '',
  reverse: false,
};
