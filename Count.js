import React, {useState} from 'react'

function Count(eee)
{
  const [count, setCount] = useState(0);
  return (
    <div>
      <div> Contador  {eee.trula}</div>
      <div>
      <button onClick= {()=> setCount(count+1)}> + </button>
      <span> {count} </span>
      <button onClick= { ()=> setCount(count-1)}> - </button>
      </div>
    </div>
  );
}

export default Count;
