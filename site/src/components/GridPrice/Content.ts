export interface cardPrice {
  plan: string;
  price: string;
  modality: string;
  description1: string;
  description2: string;
  description3: string;
  url: string;
}

export const content: cardPrice[] = [
  {
    plan: 'Starter',
    price: 'Free',
    modality: '',
    description1: '1 Website',
    description2: '5 GB Hosting',
    description3: 'Limited Support',
    url: '#'
  },
  {
    plan: 'Premium',
    price: '$29',
    modality: 'month',
    description1: '10 Website',
    description2: '15 GB Hosting',
    description3: 'Premium Support',
    url: '#'
  },
  {
    plan: 'Enterprise',
    price: '$49',
    modality: 'month',
    description1: 'Unlimited Website',
    description2: '50 GB Hosting',
    description3: 'Premium Support',
    url: '#'
  }
]