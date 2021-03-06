import React, { Component } from 'react'

export default class SearchBar extends Component {
    constructor(props){
        super(props)
        this.state = {term : ''}
        this.onInputChange = this.onInputChange.bind(this)
    }

    onInputChange(event){
        console.log(event.target.value)
        this.state = {term : event.target.value}
    }

    onSubmitForm(event){
        event.preventDefault()
    }
    render() {
        return (
            <form className="input-group" onSubmit={this.onSubmitForm}>
                <input 
                    placeholder="Get a five-day forecast in your city"
                    className="form-control"
                    value={this.state.term}
                    onChange={this.onInputChange}
                />


                <span className="input-group-btn">                     
                    <button type="submit" className="btn btn-secondary">Submit</button>                
                </span>
            </form>
       );

    }

}



