import React from 'react'
import {cardPrice} from './Content'

export default function Card(props: cardPrice) {
  const {plan, price, modality, description1, description2, description3, url} = props;
  return (
    <div className="cardPrice">
      <p className="cardPlan">{plan}</p>
      <h3 className="cardTitle">{price}<small className="modality">{modality}</small></h3>
      <ul className="itemsList">
        <li className="priceItem">{description1}</li>
        <li className="priceItem">{description2}</li>
        <li className="priceItem">{description3}</li>
      </ul>
      <a className="btnCard" href={url}>Get Started</a>
    </div>
  )
}
