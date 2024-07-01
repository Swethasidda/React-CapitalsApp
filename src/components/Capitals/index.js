import {Component} from 'react'
import './index.css'

const countryAndCapitalsList = [
  {
    id: 'NEW_DELHI',
    capitalDisplayText: 'New Delhi',
    country: 'India',
  },
  {
    id: 'LONDON',
    capitalDisplayText: 'London',
    country: 'United Kingdom',
  },
  {
    id: 'PARIS',
    capitalDisplayText: 'Paris',
    country: 'France',
  },
  {
    id: 'KATHMANDU',
    capitalDisplayText: 'Kathmandu',
    country: 'Nepal',
  },
  {
    id: 'HELSINKI',
    capitalDisplayText: 'Helsinki',
    country: 'Finland',
  },
]

// Write your code here
class Capital extends Component {
  state = {activeCountryId: countryAndCapitalsList[0].id}

  onChangeCapital = event => {
    this.setState({activeCountryId: event.target.value})
  }

  getCountry = () => {
    const {activeCountryId} = this.state
    const filteredCapital = countryAndCapitalsList.find(
      each =>
        each.id.toLocaleLowerCase() === activeCountryId.toLocaleLowerCase(),
    )
    console.log(activeCountryId)
    console.log(filteredCapital)
    return filteredCapital.country
  }

  render() {
    const activeCountryId = this.state
    const filteredCapital = this.getCountry(activeCountryId)

    return (
      <div className="big-container">
        <div className="small-conatainer">
          <form>
            <h1 className="heading">Countries And Capitals</h1>
            <select id="label" onChange={this.onChangeCapital}>
              {countryAndCapitalsList.map(each => (
                <option className="option" key={each.id} value={each.id}>
                  {each.capitalDisplayText}
                </option>
              ))}
            </select>
            <label htmlFor="label" className="label">
              is capital of which country?
            </label>
            <p className="para">{filteredCapital}</p>
          </form>
        </div>
      </div>
    )
  }
}

export default Capital
