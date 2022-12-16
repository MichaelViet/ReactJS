import React from 'react';
import MyCounter from './MyCounter';

const counters = [
    { id: 1, initial: 6, min: -5, max: 10 },
    { id: 2, initial: 5 },
    { id: 3 },
];

const App = () => (
    <div>
        {counters.map(counter => (
            <MyCounter
                key={counter.id}
                initialValue={counter.initial}
                min={counter.min}
                max={counter.max}
            />
        ))}
    </div>
);

export default App;
