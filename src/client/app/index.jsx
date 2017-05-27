import React from 'react';
import {render} from 'react-dom';
import SortableTable from './testTable.jsx';

class App extends React.Component{
    render() {
        return (
            <div>
                <SortableTable />
            </div>
        );
    }
}

render(<App/>, document.getElementById('app'));