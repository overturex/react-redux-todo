import React from 'react';

export default class ToDo extends React.Component{
    deleteToDo(){
        this.props.deleteToDo(this.props.index);
    }
    render(){
        return(
            <div>
                {this.props.name}
                <button className="btn" onClick={this.deleteToDo.bind(this)}>delete</button>
            </div>
        )
    }
}