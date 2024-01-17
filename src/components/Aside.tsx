import React from 'react';

function Aside() {
  return (
    <aside className="Aside">
      <h3>Posts</h3>
      <ul>
        <li>Render posts from DB with title as a link to a component that contains the ID's comments below.</li>
      </ul>
    </aside>
  );
}

export default Aside;