import React from 'react';
import ArticleSection from './Article';
import './ArticleSection.css';
import { content } from './Content';

export default function AticleSection() {
  return (
    <section className="articles container">
      {content.map((item) => {
        return (
          <ArticleSection
            key={item.id}
            id={item.id}
            img={item.img}
            title={item.title}
            text={item.text}
            button={item.button}
            url={item.url}
          />
        );
      })}
    </section>
  );
}
