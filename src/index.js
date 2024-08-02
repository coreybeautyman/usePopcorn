import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App-V2';
import StarRating from './startRating';

function Test() {
  const [movieRating, setMovieRating] = useState(0);

  return (
    <div>
      <StarRating onSetMovieRating={setMovieRating} />
      <p>This movie was rated {movieRating} Stars</p>
    </div>
  );
}

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
