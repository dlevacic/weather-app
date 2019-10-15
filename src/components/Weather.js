import React, { Component } from 'react'

export class Weather extends Component {
    render() {
        const { temperature, city, country, humidity, description } = this.props.weather
        return (
            <div>
                <ul>
                    {city && country && <p>Location:  {city}, {country}</p>}
                    {temperature && <p>Temperature: {temperature} Celsius</p>}
                    {humidity && <p>Humidity: {humidity}%</p>}
                    {description && <p>Description: {description}</p>}
                </ul>
            </div>
        )
    }
}

export default Weather
