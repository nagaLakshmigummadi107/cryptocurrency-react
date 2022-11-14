// Write your code here
import Loader from 'react-loader-spinner'
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'

import {Component} from 'react'
import CryptocurrenciesList from '../CryptocurrenciesList'

import './index.css'

class CryptocurrenciesTracker extends Component {
  state = {
    isLoading: true,
    crytpocurrencyList: [],
  }

  componentDidMount() {
    this.fetchCrcuDetails()
  }

  fetchCrcuDetails = async () => {
    const response = await fetch(
      'https://apis.ccbp.in/crypto-currency-converter',
    )
    const data = await response.json()
    const updatedData = data.map(eachData => ({
      id: eachData.id,
      currencyLogoUrl: eachData.currency_logo,
      currencyName: eachData.currency_name,
      usdValue: eachData.usd_value,
      euroValue: eachData.euro_value,
    }))

    this.setState({isLoading: false, crytpocurrencyList: updatedData})
  }

  renderDetailsList = () => {
    const {crytpocurrencyList} = this.state
    return <CryptocurrenciesList currencyList={crytpocurrencyList} />
  }

  render() {
    const {isLoading} = this.state
    return (
      <div className="bg-container">
        {isLoading ? (
          <div>
            <Loader type="Rings" color="#ffffff" height={80} width={80} />
          </div>
        ) : (
          <>
            <h1 className="heading">Cryptocurrency Tracker</h1>
            <img
              src="https://assets.ccbp.in/frontend/react-js/cryptocurrency-bg.png"
              alt="Cryptocurrency Tracker"
              className="image"
            />
            {this.renderDetailsList()}
          </>
        )}
      </div>
    )
  }
}

export default CryptocurrenciesTracker
