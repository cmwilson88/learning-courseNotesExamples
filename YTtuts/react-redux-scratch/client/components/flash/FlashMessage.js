import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

class FlashMessage extends React.Component {
  constructor(props) {
    super(props)

    this.onClick = this.onClick.bind(this)
  }

  onClick() {
    this.props.deleteFlashMessage(this.props.message.id);
  }

  render() {
    const { id, type, text } = this.props.message;
    return (
      <div className={classnames('alert', {
        'alert-success': type === 'success',
        'alert-danger': type === 'error'
      })}>
        <button 
          className="close"
          onClick={this.onClick}>
          <span>&times;</span>
        </button>
        {text}
      </div>
    )
  }
}

FlashMessage.propTypes = {
  deleteFlashMessage: PropTypes.func.isRequired,
  message: PropTypes.object.isRequired

}

export default FlashMessage
