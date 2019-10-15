import React, { Component } from 'react'

export class Form extends Component {
    render() {
        return (
            <div>
                <form onSubmit={this.props.getWeather}>
                    <input type="text" name="city" placeholder="City..." />
                    <br />
                    <input type="submit" value="Search" />
                </form>
            </div>
        )
    }
}

export default Form


