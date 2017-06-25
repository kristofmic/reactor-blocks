import React from 'react';
import PropTypes from 'prop-types';

import Button, { ButtonGroup } from '../button';
import DropdownToggleIcon from './dropdown_toggle_icon';
import Link from '../../content/link';

import noop from '../../utils/noop';

export default function DropdownToggle(props) {
  const {
    children,
    className,
    link,
    onClick,
    show,
    split,
    up,
    ...other
  } = props;

  if (split) {
    return (
      <ButtonGroup className={className}>
        <Button onClick={noop} {...other}>
          {children}
        </Button>
        <Button className="dropdown-toggle dropdown-toggle-split" onClick={onClick} {...other}>
          <DropdownToggleIcon show={show} up={up} />
        </Button>
      </ButtonGroup>
    );
  }

  const Tag = link ? Link : Button;

  return (
    <Tag
      className={`dropdown-toggle ${className}`}
      href={link ? '#' : undefined}
      onClick={onClick}
      {...other}
    >
      {children}
      <DropdownToggleIcon className="ml-1" show={show} up={up} />
    </Tag>
  );
}

DropdownToggle.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  link: PropTypes.bool,
  onClick: PropTypes.func.isRequired,
  show: PropTypes.bool,
  split: PropTypes.bool,
  up: PropTypes.bool,
};

DropdownToggle.defaultProps = {
  className: '',
  link: false,
  show: false,
  split: false,
  up: false,
};
