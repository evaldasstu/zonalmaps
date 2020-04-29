import React from 'react';
import PropTypes from 'prop-types';
import { LinkContainer } from 'react-router-bootstrap';
import {
  Card, Form, Popover, OverlayTrigger,
} from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCopy } from '@fortawesome/free-regular-svg-icons';
import './TextArea.scss';

export default class TextArea extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      copySuccess: false,
    };
  }

  copyToClipboard = () => {
    const element = this.textArea;
    element.select();
    document.execCommand('copy');
    this.setState({ copySuccess: true });
  }

  render() {
    const { value } = this.props;
    const { copySuccess } = this.state;
    const popover = (
      <Popover id="popover-basic">
        <Popover.Content>
          {copySuccess ? <div>Embed code copied to clipboard.</div> : null}
        </Popover.Content>
      </Popover>
    );
    return (
      <>
        <code>
          <Form.Group>
            <Form.Control
              as="textarea"
              rows="5"
              ref={(teaxtArea) => { this.textArea = teaxtArea; }}
              value={value}
            />
          </Form.Group>
        </code>
        <OverlayTrigger trigger="click" placement="right" overlay={popover} rootClose="true">
          <LinkContainer to="#">
            {/* Interim padding to offset overlay */}
            <Card.Link onClick={() => this.copyToClipboard()} className="pr-2">
              Copy to clipboard
              <FontAwesomeIcon icon={faCopy} size="xs" />
            </Card.Link>
          </LinkContainer>
        </OverlayTrigger>
      </>
    );
  }
}

TextArea.propTypes = {
  value: PropTypes.string,
};

TextArea.defaultProps = {
  value: '',
};
