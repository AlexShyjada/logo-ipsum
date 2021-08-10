import React from 'react'
import {Insigth} from './Content'

export default function InsigthArticle(props: Insigth) {
  const {img, title, text} = props;
  return (
    <article className="insigth">
      <figure className="insigthFigure">
        <img src={img} alt={title}/>
      </figure>
      <h3>{title}</h3>
      <p className="paragrathInsigth">{text}</p>
    </article>
  )
}
