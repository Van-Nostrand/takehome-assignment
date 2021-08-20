import React, { useEffect, useState } from 'react'

export default function LoadingDiv() {
  
  const [ counter, setCounter ] = useState(0);
  
  useEffect(() => {
      const loadingLoop = setInterval(() => {
        setCounter(old => old < 4 ? old + 1 : 0);
      }, 300);
    return () => clearInterval(loadingLoop);
  },[]);

  let text = 'Loading';
  for (let i = 0; i < counter; i++) {
    text += '.';
  }

  return (
    <div className="loading-div">
      {text}
    </div>
  )
}
