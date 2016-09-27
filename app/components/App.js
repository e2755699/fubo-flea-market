import React, { PropTypes } from 'react';
import { AuthGlobals } from 'redux-auth/bootstrap-theme';
import Header from './Header';
import Tabs from './Tabs';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.displayName = 'App';
  }
  render() {
    const { children, location, route } = this.props;
    const isSignedIn = route.isSignedIn;
    return (
      <div>
        <AuthGlobals />
        <Header isSignedIn={isSignedIn} />
        <Tabs location={location} />
        {children}
      </div>
    );
  }
}

App.propTypes = {
  children: PropTypes.node.isRequired,
  location: PropTypes.object,
  route: PropTypes.object.isRequired,
};

export default App;