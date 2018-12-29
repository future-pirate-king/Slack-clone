import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { Mutation } from 'react-apollo';
import gql from 'graphql-tag';

const REGISTER_USER = gql`
  mutation RegisterForm(
    $username: String!
    $email: String!
    $password: String!
  ) {
    registerUser(username: $username, email: $email, password: $password)
  }
`;

const styles = () => ({
  container: {
    display: 'flex',
    flexDirection: 'column',
    width: '60%',
    maxWidth: 400,
    padding: 10,
    margin: '0 auto'
  }
});

class RegisterForm extends React.Component {
  state = {
    username: '',
    email: '',
    password: ''
  };

  componentDidMount() {
    this.forceUpdate();
  }

  handleChange = e => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  registerStatus = (loading, data) => {
    if (loading) return <div>loading</div>;
    if (data) {
      return data.registerUser ? <div>Success</div> : <div>Failed</div>;
    }

    return null;
  };

  render() {
    const { classes } = this.props;
    const { username, email, password } = this.state;

    return (
      <Mutation mutation={REGISTER_USER}>
        {(registerUser, { data, loading }) => (
          <div className={classes.container}>
            <form
              onSubmit={async e => {
                e.preventDefault();
                try {
                  await registerUser({
                    variables: this.state
                  });

                  this.setState({
                    username: '',
                    email: '',
                    password: ''
                  });
                } catch (error) {
                  console.log(error);
                }
              }}
            >
              <Typography align="center" color="textSecondary" variant="h4">
                Sign up
              </Typography>
              <TextField
                name="username"
                label="Username"
                fullWidth
                margin="normal"
                variant="outlined"
                onChange={this.handleChange}
                value={username}
              />
              <TextField
                name="email"
                label="Email"
                fullWidth
                margin="normal"
                variant="outlined"
                onChange={this.handleChange}
                value={email}
              />
              <TextField
                name="password"
                label="Password"
                type="password"
                fullWidth
                margin="normal"
                variant="outlined"
                onChange={this.handleChange}
                value={password}
              />
              <Button
                size="large"
                type="submit"
                variant="outlined"
                color="primary"
              >
                Register
              </Button>
            </form>
            {this.registerStatus(loading, data)}
          </div>
        )}
      </Mutation>
    );
  }
}

RegisterForm.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(RegisterForm);
