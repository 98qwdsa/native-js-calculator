import React, { Component, Fragment } from 'react';
import TodoItem from './TodoItem.js'

class TodoList extends Component {

    constructor(props) {
        super(props);
        this.state = {
            inputValue: '',
            list: []
        }
        this.inputChange = this.inputChange.bind(this)
        this.submitItem = this.submitItem.bind(this)
        this.deleteItem = this.deleteItem.bind(this)
        this.getTodoItem = this.getTodoItem.bind(this)

    }

    render() {
        return (
            <Fragment>
                <div>
                    <input
                        value={this.state.inputValue}
                        onChange={this.inputChange}
                        ref={(input) => { this.input = input }} />
                    <button onClick={this.submitItem}>提交</button>
                </div>
                <ul>
                    {
                        this.getTodoItem()
                    }
                </ul>
            </Fragment>

        )
    }
    getTodoItem() {
        return this.state.list.map((item, index) => {
            return <TodoItem
                deleteItem={this.deleteItem}
                content={item}
                index={index}
                key={index} />
        })
    }
    inputChange(e) {
        const inputValue = this.input.value
        this.setState(() => ({
            inputValue: inputValue
        }), () => {
            console.log("666")
        })

    }
    submitItem(e) {
        this.setState((prevState) => ({
            list: [...prevState.list, prevState.inputValue],
            inputValue: ''
        }))
    }
    deleteItem(index) {
        this.setState((prevState) => ({
            list: [...prevState.list].splice(index, 1)
        }))
    }

}

export default TodoList