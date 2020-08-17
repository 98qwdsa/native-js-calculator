import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types'

class TodoItem extends Component {

    constructor(props) {
        super(props);
        this.deleteItem = this.deleteItem.bind(this)
    }

    render() {
        const { test, content } = this.props
        return (
            <Fragment>
                <li
                    onClick={this.deleteItem}
                >
                    {test} - {content}
                </li>
            </Fragment>
        )
    }

    deleteItem() {
        const { deleteItem, index } = this.props;
        deleteItem(index)
    }
}

TodoItem.propTypes = {
    test: PropTypes.string.isRequired,
    content: PropTypes.string,
    deleteItem: PropTypes.func,
    index: PropTypes.number
}

TodoItem.defaultProps = {
    test: '我是'
}

export default TodoItem;
