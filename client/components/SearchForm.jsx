import React from 'react';

class SearchForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      term: '',
      location: ''
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    const name = event.target.name;
    this.setState({
      [name]: event.target.value
    })
  }

  handleSubmit(event) {
    event.preventDefault();

    this.props.search(this.state);
  }

  render() {
    return (
      <div id="search-form">
        <form onSubmit={this.handleSubmit}>
          <label>Search:
            <input name="term" type="text" value={this.state.term} onChange={this.handleChange}/>
          </label>
          <label>Location (City and Zip Code):
            <input name="location" type="text" value={this.state.location} onChange={this.handleChange}/>
          </label>
          <input type="submit" value="Submit" />
        </form>
      </div>
    );
  }
}

export default SearchForm;
