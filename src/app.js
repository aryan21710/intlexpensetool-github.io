import React from 'react';
import ReactDOM from 'react-dom';
import Approutes from './routers/Approutes';
import {Provider} from 'react-redux';
import store from './store/configStore';
import './../styles/base/index.css';
import 'normalize.css/normalize.css';



store.subscribe(()=>{
     const state = store.getState();
     console.log('LATEST STATE:-'+JSON.stringify(state,null,4));

    //  const visibleChanges = getStateChanges(state.expense, state.filters);
})

const jsx=(
    <Provider store={store}>
        <Approutes/>
    </Provider>
)

ReactDOM.render(jsx,document.getElementById('root'));
