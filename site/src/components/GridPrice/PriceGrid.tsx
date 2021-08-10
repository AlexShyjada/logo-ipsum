import React from 'react'
import Card from './CardPrice'
import './PriceGrid.css'
import { content } from './Content'

export default function Price() {
  return (
    <section className="container price">
      <header className="priceHeader">
        <h2 className="priceTitle">Get the right plan for future product.</h2>
        <div className="priceButtonGroup">
          <button className="btnYearly btnActive">Yearly</button>
          <button className="btnMonthly">Monthly</button>
        </div>
      </header>
      <div className="gridPrice">
        {content.map((item) => {
          return (
            <Card
              plan={item.plan}
              price={item.price}
              modality={item.modality}
              description1={item.description1}
              description2={item.description2}
              description3={item.description3}
              url={item.url}
            />
          )
        })}
      </div>
    </section >
  )
}
