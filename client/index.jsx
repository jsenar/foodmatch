import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './store/store';

// import ApolloClient from 'apollo-client';
// import { ApolloProvider } from 'react-apollo';
import App from './components/App';
import SearchPage from './components/SearchPage';

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
    <Provider store={store} >
      <Router>
        <div>
          <Route exact path="/" component={App} />
          <Route path="/search" component={SearchPage} />
          {/* <Route path="/create" component={GroupCreate} /> */}
        </div>
      </Router>
    </Provider>
  );
}

const root = document.querySelector('#app');
ReactDOM.render(<Root />, root);
