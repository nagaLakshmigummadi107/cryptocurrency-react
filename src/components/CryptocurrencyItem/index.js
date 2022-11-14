// Write your JS code here
import './index.css'

const CryptocurrencyItem = props => {
  const {item} = props
  console.log(item)
  const {currencyLogoUrl, currencyName, euroValue, usdValue} = item
  return (
    <li className="currency-list-item">
      <div className="list-header">
        <img
          src={currencyLogoUrl}
          alt={currencyName}
          className="currency-image"
        />
        <p className="currency-name">{currencyName}</p>
      </div>
      <p className="usd-value">{usdValue}</p>
      <p className="euro-value">{euroValue}</p>
    </li>
  )
}

export default CryptocurrencyItem
