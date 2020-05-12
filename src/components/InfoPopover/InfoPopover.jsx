import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Button } from 'react-bootstrap';
import Popover from 'react-tiny-popover';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faQuestionCircle } from '@fortawesome/free-regular-svg-icons';
import './InfoPopover.scss';

const InfoPopover = ({ children }) => {
  const [popoverOpen, setPopoverOpen] = useState(false);

  return (
    <Popover
      isOpen={popoverOpen}
      onClickOutside={() => setPopoverOpen(!popoverOpen)}
      containerClassName="popover"
      padding={0}
      content={<div className="popover-body">{children}</div>}
    >
      <div>
        <Button
          variant="link"
          className="zm-info-trigger pr-0"
          onClick={() => setPopoverOpen(!popoverOpen)}
        >
          <FontAwesomeIcon icon={faQuestionCircle} size="xs" />
        </Button>
      </div>
    </Popover>
  );
};

export default InfoPopover;

InfoPopover.propTypes = {
  children: PropTypes.element.isRequired,
};
