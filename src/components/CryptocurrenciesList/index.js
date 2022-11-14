// Write your JS code here
import CryptocurrencyItem from '../CryptocurrencyItem'
import './index.css'

const CryptocurrenciesList = props => {
  const {currencyList} = props
  return (
    <div className="list-container">
      <div className="list-header">
        <p className="coin">Coin Type</p>
        <p className="usd">Usd</p>
        <p className="euro">Euro</p>
      </div>
      <ul className="currency-list-container">
        {currencyList.map(item => {
          const {id} = item
          return <CryptocurrencyItem key={id} item={item} />
        })}
      </ul>
    </div>
  )
}

export default CryptocurrenciesList
