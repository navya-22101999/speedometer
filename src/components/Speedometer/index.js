/* eslint-disable react/button-has-type */
/* eslint-disable react/no-unused-state */
/* eslint-disable jsx-a11y/alt-text */
// Write your code here
// eslint-disable-next-line no-unused-vars
import {Component} from 'react'
import './index.css'

class Speedometer extends Component {
  state = {count: 0}

  onAccelator = () => {
    const {count} = this.state
    if (count < 200) {
      this.setState(prevState => ({count: prevState.count + 10}))
    }
  }

  onApplybrake = () => {
    const {count} = this.state
    if (count > 0) {
      this.setState(prevState => ({count: prevState.count - 10}))
    }
  }

  render() {
    const {count} = this.state
    return (
      <div className="container">
        <div className="speed-container">
          <h1 className="heading">SPEEDOMETER</h1>
          <div>
            <img
              src="https://assets.ccbp.in/frontend/react-js/speedometer-img.png"
              className="image"
              alt="speedometer"
            />
          </div>
          <h1 className="heading">Speed is {count}mph</h1>
          <p className="para">Min Limit is 0mph, Max Limit is 200mph</p>
          <button className="Accelerate" onClick={this.onAccelator}>
            Accelerate
          </button>
          <button className="Apply-Brake" onClick={this.onApplybrake}>
            Apply Brake
          </button>
        </div>
      </div>
    )
  }
}
export default Speedometer
