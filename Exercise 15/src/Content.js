// Content.js
import React, { useState } from 'react';

const jokes = [
  "Why don't programmers like nature? It has too many bugs.",
  "How many programmers does it take to change a light bulb? None – It's a hardware problem.",
];

const Content = () => {
  const [joke, setJoke] = useState('');

  return (
    <div>
      <button onClick={() => setJoke(jokes[Math.floor(Math.random() * jokes.length)])}>
        Show Joke
      </button>
      <p>{joke}</p>
    </div>
  );
};

export default Content;
