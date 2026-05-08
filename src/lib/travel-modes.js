import { Bus, Train, Bike, Footprints } from 'lucide-react'



export const travelModes = [
  {
    id: 'bus',
    name: 'Bus',
    icon: Bus,
    description: 'Reliable and frequent bus services covering the entire city.',
    benefits: [
      'Frequent stops and routes',
      'Cost-effective transportation',
      'Reduced carbon footprint',
      'Social interaction opportunities',
    ],
    limitations: [
      'Can be crowded during peak hours',
      'Dependent on schedules',
      'Traffic congestion impacts',
    ],
    fareRate: 0.5,
  },
  {
    id: 'rail',
    name: 'Rail',
    icon: Train,
    description: 'Fast and efficient rail network connecting major city hubs.',
    benefits: [
      'Fastest commute option',
      'Unaffected by traffic',
      'Large capacity',
      'Reliable scheduling',
    ],
    limitations: [
      'Limited route coverage',
      'Peak hour crowding',
      'May require transfers',
    ],
    fareRate: 0.75,
  },
  {
    id: 'cycling',
    name: 'Cycling',
    icon: Bike,
    description: 'Eco-friendly cycling options for short to medium distances.',
    benefits: [
      'Zero emissions',
      'Health benefits',
      'Flexible routing',
      'Cost-free (personal bike)',
    ],
    limitations: [
      'Weather dependent',
      'Physical exertion required',
      'Distance limitations',
      'Safety considerations',
    ],
    fareRate: 0.1,
  },
  {
    id: 'walking',
    name: 'Walking',
    icon: Footprints,
    description: 'The most accessible and sustainable way to explore the city.',
    benefits: [
      'Complete freedom',
      'Zero cost',
      'Health benefits',
      'Discover hidden gems',
    ],
    limitations: [
      'Limited distance range',
      'Weather dependent',
      'Time consuming',
      'Physical fitness required',
    ],
    fareRate: 0,
  },
]

export const getFareRate = (modeId)=> {
  const mode = travelModes.find((m) => m.id === modeId)
  return mode?.fareRate || 0
}
