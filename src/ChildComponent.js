import React from 'react';
function ChildComponent() {
  console.log('ChildComponent Render');
  return <h1>ChildComponent</h1>;
}

export default React.memo(ChildComponent);
