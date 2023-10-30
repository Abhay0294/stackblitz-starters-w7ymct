import React from 'react';
import { FC } from 'react';

import './style.css';

const App = () => {
  const [data, setData] = React.useState(null);

  React.useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/todos')
      .then((response) => response.json())
      .then((json) =>
        setData(
          json
            .filter((obj1) => obj1 !== null && obj1 !== undefined)
            .map((obj) => JSON.stringify(obj, null, 2))
            .join('\n')
        )
      )
      .catch((error) => console.log(error));
  }, []);

  (() => {})();
  return (
    <div>
      <p>{data.map((obj) => JSON.stringify(obj, null, 2)).join('\n')}</p>
    </div>
  );
};

export default App;
