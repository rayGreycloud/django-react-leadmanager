import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { withAlert } from 'react-alert';
import { object } from 'prop-types';

export class Alerts extends Component {
  static propTypes = {
    errors: object.isRequired,
    messages: object.isRequired,
    alert: object.isRequired
  };
  s;

  componentDidUpdate(prevProps) {
    const { errors, messages, alert } = this.props;

    if (errors !== prevProps.errors) {
      // const { name, email } = errors.msg;
      // const { message: leadMessage } = errors.msg;

      // if (name) alert.error(`Name: ${name[0]}`);
      // if (email) alert.error(`Email: ${email[0]}`);
      // if (leadMessage) alert.error(`Message: ${leadMessage[0]}`);

      Object.entries(errors.msg).forEach(([key, val]) => {
        alert.error(`${key}: ${val.join()}`);
      });
    }

    if (messages !== prevProps.messages) {
      if (messages.success) alert.success(messages.success);
    }
  }

  render() {
    return <Fragment />;
  }
}

const mapStateToProps = ({ errors, messages }) => ({
  errors,
  messages
});

export default connect(mapStateToProps)(withAlert()(Alerts));
