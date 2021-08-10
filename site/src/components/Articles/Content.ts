export interface Article {
  id: number;
  img: string;
  title: string;
  text: string;
  button: string;
  url: string;
}

export const content: Article[] = [
  {
    id: 1,
    img: "/assets/imgSectionOne.png",
    title: "Subscription index",
    text: "A daily dataset to keep you up to date on subscription market trends and what's happening in your vertical.",
    button: "Learn More",
    url: "#",
  },
  {
    id: 2,
    img: "/assets/imgSectionTwo.png",
    title: "In-depth metrics",
    text: "Accurate, real-time reporting at your fingertips. Getting data has never been easier.",
    button: 'Learn More',
    url: "#",
  }
];