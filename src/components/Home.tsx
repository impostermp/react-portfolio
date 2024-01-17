import React from 'react';


function Home() {

  const data = [
    { id: 1, name: 'John Doe', age: 30 },
    { id: 2, name: 'Jane Doe', age: 25 },
    { id: 3, name: 'Bob Smith', age: 35 },
    { id: 3, name: 'Bob Smith', age: 35 },
    { id: 3, name: 'Bob Smith', age: 35 },
    { id: 3, name: 'Bob Smith', age: 35 },
    { id: 3, name: 'Bob Smith', age: 35 },
    { id: 3, name: 'Bob Smith', age: 35 }
  ];

  return (
      <div className="data-container">
        {data.map(item => (
          <div className="data-box" key={item.id}>
            <h2>ID: {item.id}</h2>
            <p>Name: {item.name}</p>
            <p>Age: {item.age}</p>
          </div>
        ))}
      </div>
  );
}

export default Home;