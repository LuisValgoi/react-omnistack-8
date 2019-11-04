import React from 'react';

function Main({match}) {
  return <h1>{match.params.id}</h1>
}

export default Main;
