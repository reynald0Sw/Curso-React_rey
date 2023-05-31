// import React from 'react';
// import './TodosLoading.css';

// function TodosLoading() {
//   return (
//     <div className="LoadingTodo-container">
//       <span className="LoadingTodo-completeIcon"></span>
//       <p className="LoadingTodo-text"></p>
//       <span className="LoadingTodo-deleteIcon"></span>
//     </div>
//   );
// }

// export { TodosLoading };


import React from 'react';
import './TodosLoading.css';

function TodosLoading() {
  return (
    <div className="LoadingTodo-container">
      <div className="LoadingTodo-dotsContainer">
        <span className="LoadingTodo-dot"></span>
        <span className="LoadingTodo-dot"></span>
        <span className="LoadingTodo-dot"></span>
      </div>
      <div className="LoadingTodo-loadingBar">
        <div className="LoadingTodo-progress"></div>
      </div>
      <p className="LoadingTodo-text">Loading...</p>
    </div>
  );
}

export { TodosLoading };

