import React from 'react';

import './App.css';
import Logo from './images/logo512.png';

import Button from './components/Button';
import Counter from './components/Counter';
// import components


class App extends React.Component {

    constructor () {
        super();
        this.state = {
            counter: 0
        };
        this.clickCounter = this.clickCounter.bind(this);
        this.resetCounter = this.resetCounter.bind(this);
    }

    clickCounter () {
        this.setState(({ counter }) => ({ counter: counter + 1 }));
    }

    resetCounter () {
        this.setState({ counter: 0 });
    }

    // clickCounter () {
    //     this.state.counter += 1;
    // }

    // resetCounter () {
    //     this.state.counter = 0;
    // }

    render () {
        return (
            <div className="App">
                <div className='container'>
                    <img 
                        className='logo'
                        src={Logo} />
                </div>
                <div className='counter-container'>
                    <Counter 
                        counter={this.state.counter} />
                    <Button 
                        text='Click' 
                        clickListener={this.clickCounter} />
                    <Button 
                        text='Reset' 
                        clickListener={this.resetCounter} />
                </div>
            </div>
        );
    }
}

export default App;
