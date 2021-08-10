import React from 'react'
import "./Hero.css";

export default function Hero() {
  return (
    <section className="hero container">
      <article className="textHero">
        <h1>Grow your subscription business</h1>
        <p>Outcome-centered products that reduce churn, optimize pricing, and grow your subscription business end-to-end.</p>
        <div className="callToAction">
          <a className="btnPurple" href="#">Get Started</a>
          <a className="btnDownload" href="#">
            <svg
              width="23"
              height="24"
              viewBox="0 0 23 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg">
              <path 
                d="M11.6122 0.75V23.25"
                stroke="#19191B"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path 
                d="M1.08936 12.75L11.6122 23.25L22.1351 12.75"
                stroke="#19191B"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </a>
        </div>
      </article>
      <img className="imgHero" src="/assets/imgHero.png" alt="Menino Radical de Skate"/>
    </section>
  )
}