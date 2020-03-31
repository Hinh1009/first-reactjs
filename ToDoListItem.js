import React, {Component} from 'react'
import './ToDoListItem.css'

class ToDoListItem extends Component {
    render() {

        const {
            title,
            description,
            handleDelete,
        } = this.props;

        return (
            <div className="ToDoListItem"
                onClick={handleDelete}
            >
                <div className="ToDoListItem-title">{title}</div>
                <div className="ToDoListItem-description">{description}</div>
            </div>
        );
    }
}

export default ToDoListItem;