import React from 'react';

const Home = () => {
  return (
    <div>
      Home
      <button
        onClick={() => {
          console.log('Hello there!');
        }}
      >
        Press me!
      </button>
    </div>
  );
};

export default Home;
