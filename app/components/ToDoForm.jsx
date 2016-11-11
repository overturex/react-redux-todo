import React from 'react';
import {connect} from 'react-redux';
import {addToDo} from 'Actions';

class ToDoForm extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            name: ''
        }
    }
    onSubmit(e){
        e.preventDefault();
        this.props.addToDo(this.state.name);
        this.setState({name: ''});
    }
    onChange(e){
        this.setState({name: e.target.value});
    }
    render(){
        return(
            <form onSubmit={this.onSubmit.bind(this)}>
                <input type="text" className="form-control" onChange={this.onChange.bind(this)} value={this.state.name} />
                <button type="submit" className="btn btn-block">add</button>
            </form>
        )
    }
}

// var mapStateToProps = function(){
//     return {};
// }
//
// var mapDispatchToProps = function(dispatch, ownProps) {
//     return {
//         addToDo: function(name) {
//             dispatch(addToDo(name));
//         }
//     }
// };

export default ToDoForm; //connect(mapStateToProps, mapDispatchToProps)(ToDoForm);