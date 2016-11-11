import React from 'react';
import ReactDOM from 'react-dom';
import ToDoApp from 'ToDoApp';
import Store from 'Store';
import {Provider} from 'react-redux';

import 'style!css!bootstrap/dist/css/bootstrap.min.css';
import 'style!css!sass!app/styles/app.scss';

ReactDOM.render(
    <Provider store={Store}>
        <div className="container">
            <div className="row">
                <div className="col-xs-4 col-xs-offset-4">
                    <ToDoApp></ToDoApp>
                </div>
            </div>
        </div>
    </Provider>, document.querySelector('#app')
);