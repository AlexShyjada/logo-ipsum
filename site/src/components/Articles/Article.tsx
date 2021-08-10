import React from 'react'
import {Article} from './Content'

export default function ArticleSection(props: Article) {
  const {id, img, title, text, button, url} = props;
  return (
    <div className={`${id % 2 === 0 ? `aticleRight` : `aticleLeft`}`} >
      <figure className="aticleFigure">
        <img src={img} alt={title} />
      </figure>
      <article className="articleColumm">
        <h2 className="aticleTitle">{title}</h2>
        <p className="aticleParagrath">{text}</p>
        <a className="btnPurple" href={url}>{button}</a>
      </article>
    </div>
  )
}
