import React, { useState } from 'react';
import styles from './Counter.module.css';

const MyCounter = (props) => {
  const [count, setCount] = useState(props.initialValue || 0);
  const min = props.min || -10;
  const max = props.max || 10;

  const increment = () => {
    if (count < max) {
      setCount(count + 1);
    }
  };

  const decrement = () => {
    if (count > min) {
      setCount(count - 1);
    }
  };

  const reset = () => {
    setCount(0);
  };

  return (
    <div>
      <div className={styles.row}>
        <span className={styles.value}>Поточний рахунок: {count}
        </span>
        <button
          className={styles.button}
          aria-label="Increment value"
          onClick={increment}
        >
          +
        </button>
        <button
          className={styles.button}
          aria-label="Decrement value"
          onClick={decrement}
        >
          -
        </button>
        <div className={styles.row}>
          <button
            className={styles.button}
            aria-label="Reset value"
            onClick={reset}
          >
            Reset
          </button>
        </div>
      </div>
    </div>
  );
};

export default MyCounter;