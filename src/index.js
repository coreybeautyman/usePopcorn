import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App-V2';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// root.render(
//   <React.StrictMode>
//     {/* <App /> */}
//     <StarRating
//       maxRating={5}
//       size={20}
//       color={'red'}
//       className={'test'}
//       messages={['Terrible', 'Bad', 'Okay', 'Good', 'Amazing']}
//       defaultRating={3}
//     />
//     <StarRating maxRating={10} defaultRating={7} />
//     <StarRating maxRating={5} />
//     <Test />
//   </React.StrictMode>
// );
