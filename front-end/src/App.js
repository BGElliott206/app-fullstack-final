import React from 'react';

import './App.css';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      toys: [],
      nameInput: '',
      toyInput: '',
    }
  }
  
  componentDidMount() {
    fetch('http://localhost:4000/toys')
      .then(res => res.json())
      .then(data => this.setState({ toys: data}));
  }

  handleDelete = (e, _id) => {
    e.preventDefault();
    fetch('http://localhost:4000/toys', {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json', 
      },
      body: JSON.stringify({ _id }),
    }).then(res => res.json())
      .then(data => this.setState({ toys: data}));
  }

  handleAdd = (e) => {
    e.preventDefault();
    console.log(this.state);
    fetch('http://localhost:4000/toys', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ name: this.state.nameInput, score: this.state.toyInput}),
    })
      .then(response => response.json())
      .then(data => this.setState((prevState) => {
        return { toys: [...prevState.toys, data]}
      }));
  }

  handleChange = (e) => {
    const { name,value } = e.target;
    this.setState({ [name]: value});
  }

  render() {
    console.log(this.state)
    return (
      <div className="App">
        <h1>Favorite Toys</h1>
        <ul>
          {this.state.toys.map((toys, idx) => {
            return (
              <li
                key={toys._id}
              >
                <button onClick={(e) => this.handleDelete(e, toys._id)}>
                  Delete
                </button>
              </li>
            )
          }
          )}
        </ul>
        <form onSubmit={this.handleAdd}>
          <input
            name="nameInput"
            value={this.state.nameInput}
            onChange={this.handleChange}
          />
          <input
            name="toyInput"
            value={this.state.toyInput}
            onChange={this.handleChange}
          />
          <button type="submit">Add</button>
        </form>
      </div>
    );
  }
}

export default App;
