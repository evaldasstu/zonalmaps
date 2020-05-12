import React, { useState } from 'react';
import { HashLink as Link } from 'react-router-hash-link';
import Popover from 'react-tiny-popover';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faQuestionCircle } from '@fortawesome/free-regular-svg-icons';
import './InfoPopover.scss';

const InfoPopover = (props) => {
  const [popoverOpen, setPopoverOpen] = useState(false);

  return (
    <Popover
      isOpen={popoverOpen}
      onClickOutside={() => setPopoverOpen(!popoverOpen)}
      containerClassName="popover"
      padding={0}
      content={<div className="popover-body">{props.children}</div>}
    >
      <div onClick={() => setPopoverOpen(!popoverOpen)}>
        <Link to="#" className="zm-info-trigger">
          <FontAwesomeIcon icon={faQuestionCircle} size="xs" className="ml-2" />
        </Link>
      </div>
    </Popover>
  );
};

export default InfoPopover;
