import React, { Component } from 'react';
import { Fragment } from 'react';
import './Calculator.css'

class Calaclator extends Component {

    constructor(props) {
        super(props)
        this.state = {
            inputValue: 0,
        }
    }

    render() {
        return (
            <Fragment>
                <div>
                    <div className="content">
                        <input disabled={true} value={this.state.inputValue} />
                        <div className="key-content">
                            <div className="btn color-grey float-left" id="ac" onClick={this.keyMonitor.bind(this)}>
                                AC </div>
                            <div className="btn color-grey float-left" >
                                +/- </div>
                            <div className="btn color-grey float-left" >
                                % </div>
                            <div className="btn color-orange float-left" id="/" onClick={this.keyMonitor.bind(this)}>
                                ÷</div>
                        </div>
                        <div className="key-content">
                            <div className="btn color-black float-left" id="7" onClick={this.keyMonitor.bind(this)}>
                                7</div>
                            <div className="btn color-black float-left" id="8" onClick={this.keyMonitor.bind(this)}>
                                8</div>
                            <div className="btn color-black float-left" id="9" onClick={this.keyMonitor.bind(this)}>
                                9</div>
                            <div className="btn color-orange float-left" id="*" onClick={this.keyMonitor.bind(this)}>
                                x</div>
                        </div>
                        <div className="key-content">
                            <div className="btn color-black float-left" id="4" onClick={this.keyMonitor.bind(this)}>
                                4</div>
                            <div className="btn color-black float-left" id="5" onClick={this.keyMonitor.bind(this)}>
                                5 </div>
                            <div className="btn color-black float-left" id="6" onClick={this.keyMonitor.bind(this)}>
                                6</div>
                            <div className="btn color-orange float-left" id="-" onClick={this.keyMonitor.bind(this)}>
                                -</div>
                        </div>
                        <div className="key-content">
                            <div className="btn color-black float-left" id="1" onClick={this.keyMonitor.bind(this)}>
                                1 </div>
                            <div className="btn color-black float-left" id="2" onClick={this.keyMonitor.bind(this)}>
                                2</div>
                            <div className="btn color-black float-left" id="3" onClick={this.keyMonitor.bind(this)}>
                                3</div>
                            <div className="btn color-orange float-left" id="+" onClick={this.keyMonitor.bind(this)}>
                                + </div>
                        </div>
                        <div className="key-content">
                            <div className="btn-long color-black float-left" id="0" onClick={this.keyMonitor.bind(this)}>
                                0</div>
                            <div className="btn color-black float-left" id="." onClick={this.keyMonitor.bind(this)}>
                                .</div>
                            <div className="btn color-orange float-left" id="equal" onClick={this.keyMonitor.bind(this)}>
                                =</div>
                        </div>
                    </div>
                </div>
            </Fragment>
        )
    }
    calculator() {
        return
    }
    keyMonitor(e) {
        var inputValue = this.state.inputValue
        if (inputValue === 0) {
            inputValue = ''
        }
        if (e.target.id === 'ac') {
            this.setState({
                inputValue: 0
            })
            return
        }
        if (e.target.id === 'equal') {
            this.setState({
                inputValue: eval(inputValue)
            })
            return
        }
        this.setState({
            inputValue: inputValue + e.target.id
        })

    }
}


export default Calaclator;