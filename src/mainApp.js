// import React, { Component } from 'react';
// import logo from './logo.svg';
// import './App.css';

// class App extends Component {
//   render() {
//     return (
//       <div className="App">
//         <header className="App-header">
//           <img src={logo} className="App-logo" alt="logo" />
//           <p>
//             Edit <code>src/App.js</code> and save to reload.
//           </p>
//           <a
//             className="App-link"
//             href="https://reactjs.org"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             Learn React
//           </a>
//         </header>
//       </div>
//     );
//   }
// }

// export default App;

import React from 'react';
import { render } from 'react-dom';
import { times, slice } from 'lodash/fp';

import { Image, Gallery, Headline, Wrapper, LoadMore } from './cmpts';
import { mocks } from './utils';
import { addCounting } from './hocs';
import './App.css';

const mainApp = ({ loadMore, limit }) =>
  <Wrapper>
    <Headline />
    <Gallery photos={mocks(limit).data.photos} />
    <LoadMore
      limit={limit}
      maxPhotos={mocks().data.photos.length}
      loadMore={loadMore}
    />
  </Wrapper>;

export default addCounting(mainApp);
