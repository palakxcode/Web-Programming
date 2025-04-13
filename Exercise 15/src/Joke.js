// JokeFetcher.js
import React, { useEffect, useState } from 'react';

const JokeFetcher = () => {
  const [joke, setJoke] = useState('');

  const fetchJoke = async () => {
    const res = await fetch('https://official-joke-api.appspot.com/jokes/random');
    const data = await res.json();
    setJoke(data.setup + ' ' + data.punchline);
  };

  useEffect(() => {
    fetchJoke();
  }, []);

  return (
    <>
      <p>{joke}</p>
      <button onClick={fetchJoke}>Get New Joke</button>
    </>
  );
};

export default JokeFetcher;
