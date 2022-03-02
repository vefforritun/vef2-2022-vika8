import { useEffect, useState } from 'react';
import './App.css';
import { Button } from './components/button/Button';

function App() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log('loaded');
  }, [])

  useEffect(() => {
    console.log('hæ')
  }, [count])

  return (
    <div className="App">
        <Button
          size="large"
          onClick={(e) => { setCount(count + 1) }}
        >
          Takkinn
        </Button>
        <p>ýtt á takka: {count} sinnum</p>
        {count === 1 && (
          <Button>jeij</Button>
        )}
    </div>
  );
}

export default App;
