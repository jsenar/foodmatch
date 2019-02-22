import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';
// import ApolloClient from 'apollo-client';
// import { ApolloProvider } from 'react-apollo';
import App from './components/App';
import GroupCreate from './components/GroupCreate';

// const styles = {
//   app: {
//     paddingTop: 40,
//     textAlign: 'center',
//   },
// };

// const client = new ApolloClient({
// });

function Root() {
  return (
    <Router>
      <div>
        <Route exact path="/" component={App} />
        <Route path="/create" component={GroupCreate} />
      </div>
    </Router>
  );
}

const root = document.querySelector('#app');
ReactDOM.render(<Root />, root);
