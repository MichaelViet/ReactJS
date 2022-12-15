import React from 'react';
import Table from './components/Table';
import Props from './components/props';
import CitySelector from './components/Cities';
import Colors from './components/Colors';



const App = () => {
    return (
        <div>
            <Table />
            <Props prop1="Hello" prop2="World" />
            <CitySelector />
            <Colors />
        </div>
    );
};

export default App;
