import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { withAlert } from 'react-alert';
import PropTypes from 'prop-types';

export class Alerts extends Component {
  static propTypes = {
    error: PropTypes.object.isRequired,
    alert: PropTypes.object.isRequired
  };

  componentDidUpdate(prevProps) {
    const { error, alert } = this.props;

    if (error !== prevProps.error) {
      const { name, email, message } = error.msg;

      if (name) alert.error(`Name: ${name[0]}`);
      if (email) alert.error(`Email: ${email[0]}`);
      if (message) alert.error(`Message: ${message[0]}`);
    }
  }

  render() {
    return <Fragment />;
  }
}

const mapStateToProps = ({ errors }) => ({
  error: errors
});

export default connect(mapStateToProps)(withAlert()(Alerts));
