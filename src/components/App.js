import React from 'react';
import Main from './Main';
import List from './List';
import ListHorizontal from './ListHorizontal';

const App = () => {
  return(
    <div className="layout">
      <Main />
      {/* <ListHorizontal /> */}
      <List />
    </div>    
  );
}

export default App;