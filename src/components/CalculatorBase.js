import React from 'react';


class CalculatorBase extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            // startingOutput: 0,
            numsToUse: [],
            currentNumber: '0',
            answer: 0,
            output: 0
        }
    }
    render() {
        return (
            <div>
                <div>
                    <text name='num1'>{this.state.currentNumber}</text>
                    {/* <text name='output' value={this.state.output}>{this.state.output}</text> */}
                </div>
                <div>
                    <div className='modifiers'>
                        <button>C</button>
                        <button>+/-</button>
                        <button>%</button>
                        <button>=</button>
                    </div>
                    <div className='operations'>
                        <button>+</button>
                        <button>-</button>
                        <button>X</button>
                        <button>/</button>
                    </div>
                    <div className='numbers'>
                        <button value ='7' onClick={this.addNumber}>7</button>
                        <button value= '8' onClick={this.addNumber}>8</button>
                        <button value ='9' onClick={this.addNumber}>9</button>
                        <button value ='4' onClick={this.addNumber}>4</button>
                        <button value ='5' onClick={this.addNumber}>5</button>
                        <button value ='6' onClick={this.addNumber}>6</button>
                        <button value ='1' onClick={this.addNumber}>1</button>
                        <button value ='2' onClick={this.addNumber}>2</button>
                        <button value ='3' onClick={this.addNumber}>3</button>
                        <button value ='0' onClick={this.addNumber}>0</button>
                        <button>.</button>
                    </div>
                </div>
            </div>
        )}

    handleOutput = (event) => {
        this.setState({[event.target.name]:event.target.value})
    }

    addNumber = (event) => {
        let newNum = ''
        if (this.state.currentNumber === '0')  {
            newNum = event.target.value
        } else {
            newNum = this.state.currentNumber + event.target.value
        }
        this.setState({currentNumber: newNum})
    }

}

export default CalculatorBase