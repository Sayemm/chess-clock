// import React from 'react';
// import Navigation from './src/navigation';

// import {Provider} from 'react-redux';
// import {store} from './src/state/index';

// const App: React.FC = () => {
//   return (
//     <Provider store={store}>
//       <Navigation />;
//     </Provider>
//   );
// };

// export default App;

import React from 'react';
import Navigation from './src/navigation';

import {Provider} from 'react-redux';
import {store} from './src/state/index';

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <Navigation />
    </Provider>
  );
};

export default App;
