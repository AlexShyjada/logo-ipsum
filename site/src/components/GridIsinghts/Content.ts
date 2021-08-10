export interface Insigth {
  img: string;
  title: string;
  text: string;
}

export const content: Insigth[] = [
  {
    img: '/assets/calc.png',
    title: 'Benchmarks',
    text: 'See how you stack up against comparable companies in similar stages.'
  },
  {
    img: '/assets/camera.png',
    title: 'Pricing Audit',
    text: 'Benchmark the health of your monetization and pricing strategy.'
  },
  {
    img: '/assets/creditCard.png',
    title: 'Retention Audit',
    text: 'Audit where revenue leakage exists and where you can increase retention.'
  }
];