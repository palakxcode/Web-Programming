// App.js
import React, { Component, useState } from 'react';

function NoJSXHello() {
  return React.createElement('h1', null, 'Hello, React!');
}

function JSXHello() {
  return <h1>Hello, React!</h1>;
}

function VariableMessage() {
  const message = 'Hello from variable!';
  return <h1>{message}</h1>;
}

function FruitList() {
  const fruits = ['Apple', 'Banana', 'Cherry'];
  return (
    <ul>
      {fruits.map((fruit, index) => <li key={index}>{fruit}</li>)}
    </ul>
  );
}

function StyledMessage() {
  const style = { color: 'blue', fontSize: '20px', fontWeight: 'bold' };
  return <p style={style}>This is a styled message.</p>;
}

function SumOfSquares({ a, b }) {
  return <p>Sum of squares: {a ** 2 + b ** 2}</p>;
}

function Greeting({ isMorning }) {
  return <h2>{isMorning ? 'Good Morning' : 'Good Evening'}</h2>;
}

function CurrentDay() {
  const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  const today = new Date().getDay();
  return <p>Today is {days[today]}</p>;
}

function PrimeCheck({ number }) {
  const isPrime = (num) => {
    if (num <= 1) return false;
    for (let i = 2; i <= Math.sqrt(num); i++) {
      if (num % i === 0) return false;
    }
    return true;
  };
  return <p>{number} is {isPrime(number) ? 'a prime' : 'not a prime'} number</p>;
}

class TemperatureConverter extends Component {
  constructor(props) {
    super(props);
    this.state = { celsius: '', fahrenheit: '' };
  }

  toFahrenheit = () => {
    this.setState({ fahrenheit: (this.state.celsius * 9/5 + 32).toFixed(2) });
  };

  toCelsius = () => {
    this.setState({ celsius: ((this.state.fahrenheit - 32) * 5/9).toFixed(2) });
  };

  render() {
    return (
      <div>
        <input type="number" placeholder="Celsius" onChange={(e) => this.setState({ celsius: e.target.value })} />
        <button onClick={this.toFahrenheit}>Convert to Fahrenheit</button>
        <p>{this.state.fahrenheit} F</p>
        <input type="number" placeholder="Fahrenheit" onChange={(e) => this.setState({ fahrenheit: e.target.value })} />
        <button onClick={this.toCelsius}>Convert to Celsius</button>
        <p>{this.state.celsius} C</p>
      </div>
    );
  }
}

function ReverseString({ str }) {
  const reversed = str.split('').reverse().join('');
  const isPalindrome = str === reversed;
  return <p>Reversed: {reversed} - {isPalindrome ? 'Palindrome' : 'Not Palindrome'}</p>;
}

function RandomNumber() {
  const [number, setNumber] = useState(null);
  return (
    <div>
      <button onClick={() => setNumber(Math.floor(Math.random() * 100) + 1)}>Generate</button>
      {number && <p>Random number: {number}</p>}
    </div>
  );
}

function LeapYearCheck({ year }) {
  const isLeap = (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0);
  return <p>{year} is {isLeap ? '' : 'not '}a leap year.</p>;
}

class UserGreeting extends Component {
  render() {
    const { firstName, lastName } = this.props;
    return <h1>Hello, {firstName} {lastName}!</h1>;
  }
}

export default function App() {
  return (
    <div>
      <NoJSXHello />
      <JSXHello />
      <VariableMessage />
      <FruitList />
      <StyledMessage />
      <SumOfSquares a={3} b={4} />
      <Greeting isMorning={true} />
      <CurrentDay />
      <PrimeCheck number={7} />
      <TemperatureConverter />
      <ReverseString str="madam" />
      <RandomNumber />
      <LeapYearCheck year={2024} />
      <UserGreeting firstName="palak" lastName="ramani" />
    </div>
  );
}