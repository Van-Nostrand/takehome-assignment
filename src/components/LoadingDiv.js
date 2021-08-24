import React, { useEffect, useState } from 'react'


// used in place of loading content
// prints the word "Loading" with a trail of animated dots (changes every 300ms)
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
