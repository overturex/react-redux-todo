import React from 'react';
import ToDo from 'ToDo';
import {connect} from 'react-redux';
import {deleteToDo} from 'Actions';

class ToDoList extends React.Component{
    render(){
        var renderTodos = function(){
            return this.props.todos.map((todo, index) => (
                <ToDo key={index} index={index} name={todo.name} deleteToDo={this.props.deleteToDo}></ToDo>
            ));
        }.bind(this);

        return(
            <div>
                {renderTodos()}
            </div>
        );
    }
}

// var mapStateToProps = function(state){
//     return {
//         todos: state.todos
//     }
// };
//
// var mapDispatchToProps = function(dispatch, ownProps){
//     return{
//         deleteToDo: function(index){
//             dispatch(deleteToDo(index));
//         }
//     }
// }

export default ToDoList; // connect(mapStateToProps, mapDispatchToProps)(ToDoList);