import React, { Component } from 'react'
import Header from './components/Header'
import Form from './components/Form'
import Weather from './components/Weather'


const apiKey = "b39bad181a5f7710d3d7bf7dc42995fb"
const googleApiKey = "AIzaSyBnQB4IGPDwpThK0ssNAoiD53QsU9QT1QY"

export class App extends Component {
  constructor(props) {
    super()
    this.state = {
      temperature: '',
      city: '',
      country: '',
      humidity: '',
      description: '',
      error: ''
    }
  }

  getWeather = async (e) => {
    e.preventDefault()
    const city = e.target.elements.city.value

    const apiCall = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`)
    const weather = await apiCall.json()
    
    if (weather.name === city) {
      this.setState({
        temperature: weather.main.temp,
        city: weather.name,
        country: weather.sys.country,
        humidity: weather.main.humidity,
        description: weather.weather[0].description,
      }) 
    } else {
      alert('Your city is inccorect.')
    }
  }


  render() {
    
    return (
      <div style={{textAlign: 'center'}}>
        <Header />
        <Form getWeather={this.getWeather}/>
        <Weather weather={this.state}/>
        
      </div>
    )
  }
}

export default App

