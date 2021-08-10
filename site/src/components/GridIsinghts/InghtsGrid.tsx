import React from 'react'
import Insight from './Insight'
import './GridIsigths.css'
import { content } from './Content';

export default function GridIsights() {
  return (
    <section className="container gridIsights">
      {content.map((item) => {
        return (
          <Insight
            img={item.img}
            title={item.title}
            text={item.text}
          />
        );
      })}
    </section>
  )
}
