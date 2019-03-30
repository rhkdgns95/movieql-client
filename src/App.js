import { ApolloProvider } from "react-apollo";
import React, { Component } from "react";
import { HashRouter as Router, Route} from "react-router-dom";
import Home from "./Home";
import Detail from "./Detail";
import client from "./apolloClient";

class App extends Component {
  render = () => (
    <ApolloProvider client={client}>
      <div className="App"/>
      <Router>
        <Route exact={true} path={"/"} component={Home}/>
        <Route path={"/details/:movieId"} component={Detail}/>
      </Router>

    </ApolloProvider>
  )
}
export default App;












// //App은 Router가 된다.

// import React, { Component } from 'react';
// import {HashRouter as Router, Route} from "react-router-dom";
// import { ApolloProvider } from "react-apollo";
// import client from "./apolloClient";
// import Home from "./Home";
// import Detail from "./Detail";

// class App extends Component {
//   render() {
//     return (
//       <ApolloProvider client={client}>
//           <div className="App"/>
//           <Router>
//             <Route exact={true} path={"/"} component={Home}/>
//             <Route path={"/details/:movieId"} component={Detail}/>
//           </Router>
//       </ApolloProvider>
//     )
//   }
// }
// export default App;

