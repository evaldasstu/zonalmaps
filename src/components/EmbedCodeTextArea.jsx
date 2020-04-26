import React from 'react';
import PropTypes from 'prop-types';
import {
  Form, Button, Popover, OverlayTrigger,
} from 'react-bootstrap';

export default class EmbedCodeTextArea extends React.Component {
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
        <Form.Control as="textarea" rows="5" ref={(teaxtarea) => { this.textArea = teaxtarea; }} value={value} className="mb-3" />
        <OverlayTrigger trigger="click" placement="right" overlay={popover} rootClose="true">
          <Button variant="secondary" onClick={() => this.copyToClipboard()} className="mb-4">Copy to clipboard</Button>
        </OverlayTrigger>
      </>
    );
  }
}

EmbedCodeTextArea.propTypes = {
  value: PropTypes.string,
};

EmbedCodeTextArea.defaultProps = {
  value: '',
};
