export interface Product {
  id: number
  name: string
  image: string
  description: string
  shortDescription: string
  price: number
}

const products: Array<Product> = [
  {
    id: 1,
    name: 'The Ready Mindset',
    image: '/placeholder.png',
    description:
      'Build practical decision habits, structure daily execution, and stay calm under pressure with a field-tested personal operating system.',
    shortDescription:
      'A clear framework for making better decisions and staying prepared.',
    price: 19,
  },
  {
    id: 2,
    name: 'Consulting Launch Blueprint',
    image: '/placeholder.png',
    description:
      'Go from idea to offer with positioning, packaging, and proposal systems that help independent consultants win high-value client engagements.',
    shortDescription:
      'A practical launch plan for consultants starting or relaunching services.',
    price: 24,
  },
  {
    id: 3,
    name: 'Leadership Under Pressure',
    image: '/placeholder.png',
    description:
      'Learn communication templates, accountability rhythms, and response playbooks for teams operating in volatile environments.',
    shortDescription:
      'Tools for leading teams effectively when stakes are high.',
    price: 21,
  },
  {
    id: 4,
    name: 'The Execution Playbook',
    image: '/placeholder.png',
    description:
      'Convert strategy into weekly action with priority maps, meeting cadences, and measurable scorecards that close the execution gap.',
    shortDescription:
      'Turn strategy into weekly outcomes with repeatable execution systems.',
    price: 18,
  },
  {
    id: 5,
    name: 'Client Trust Systems',
    image: '/placeholder.png',
    description:
      'Design delivery standards and communication workflows that increase retention, referrals, and long-term advisory relationships.',
    shortDescription:
      'A relationship-first system for retaining and growing client accounts.',
    price: 22,
  },
  {
    id: 6,
    name: 'Do Better Every Quarter',
    image: '/placeholder.png',
    description:
      'Use quarterly reviews and disciplined planning cycles to improve business performance with intentional, compounding progress.',
    shortDescription:
      'A quarterly planning and review method for consistent business growth.',
    price: 20,
  },
]

export default products
