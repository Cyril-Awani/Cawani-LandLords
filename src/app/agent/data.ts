export const agents: Agent[] = [
  {
    id: "1",
    name: "John Smith",
    agency: "Dream Realty",
    location: "New York, NY",
    profileImage: 'https://img.freepik.com/free-photo/charming-joyful-caring-young-african-american-family-man-woman-siblings-smiling-broadly-show-heart-gestures-grinning-express-love-empathy-positivity-two-loyal-friends-cherish-friendship_1258-81676.jpg?t=st=1732981338~exp=1732984938~hmac=77a34b8c0afb852aae27eb5d22f6f5b28f91324bcc95a854354ab9452eb8d234&w=900',
    contactInfo: {
      phone: "(123) 456-7890",
      email: "john.smith@dreamrealty.com",
    },
    priceRange: {
      lowest: 500000,
      highest: 3000000,
    },
    language: ["English", "Spanish"],
    experience: 10,
    rating: 4.5,
    reviewsCount: 250,
    listings: ["Property 1", "Property 2", "Property 3"],
    bio: "John Smith has over 10 years of experience in the real estate market, specializing in luxury homes and residential properties. He is committed to finding his clients their dream homes with personalized attention.",
    specialties: ["Luxury Homes", "Residential Properties"], // Add specialties here
  },
  {
    id: "2",
    name: "Jane Doe",
    agency: "Elite Properties",
    location: "Los Angeles, CA",
    profileImage: 'https://img.freepik.com/free-photo/ai-technology-microchip-background-futuristic-innovation-technology-remix_53876-108532.jpg?t=st=1735243980~exp=1735247580~hmac=3397def498292f8939d3cb324fe5e1e53fbbdfc4ba0bc4ab7e923b3f780a98d1&w=900',
    contactInfo: {
      phone: "(987) 654-3210",
      email: "jane.doe@eliteproperties.com",
    },
    priceRange: {
      lowest: 800000,
      highest: 5000000,
    },
    language: ["English", "French"],
    experience: 8,
    rating: 4.8,
    reviewsCount: 180,
    listings: ["Property A", "Property B"],
    bio: "With over 8 years of experience, Jane is a top real estate agent who specializes in high-end commercial properties and luxury rentals. She is known for her attention to detail and exceptional customer service.",
    specialties: ["Commercial Properties", "Luxury Rentals"], // Add specialties here
  },
  {
    id: "3",
    name: "Sarah Lee",
    agency: "Skyline Realty",
    location: "Chicago, IL",
    profileImage: 'https://img.freepik.com/free-photo/happy-family-wearing-casual-clothes-having-good-time-together_1150-8191.jpg?t=st=1732982503~exp=1732983103~hmac=eef1d34c631953bf70cb76a4b5b6046a1a2b918dc2a4f5d1a830b808a67acb8f&w=900',
    contactInfo: {
      phone: "(312) 555-0123",
      email: "sarah.lee@skylinerealty.com",
    },
    priceRange: {
      lowest: 300000,
      highest: 1500000,
    },
    language: ["English", "Mandarin"],
    experience: 5,
    rating: 4.2,
    reviewsCount: 100,
    listings: ["Condo 1", "Luxury Villa", "Penthouse 1"],
    bio: "Sarah Lee is a seasoned real estate agent with a passion for helping first-time homebuyers. She has a deep understanding of the residential market and a commitment to providing personalized service.",
    specialties: ["First-time Homebuyers", "Residential Market"], // Add specialties here
  },
  {
    id: "4",
    name: "Mark Thompson",
    agency: "Pacific Homes",
    location: "San Francisco, CA",
    profileImage: 'https://img.freepik.com/free-photo/portrait-young-handsome-man-wearing-suit_1157-26097.jpg?t=st=1732982812~exp=1732983412~hmac=18aebf2ec2a0f98b8a5fe5a697254da5ecab01eaf99c0574b7c5e3cfa803c0be&w=900',
    contactInfo: {
      phone: "(415) 555-0456",
      email: "mark.thompson@pacifichomes.com",
    },
    priceRange: {
      lowest: 1000000,
      highest: 10000000,
    },
    language: ["English", "German"],
    experience: 12,
    rating: 4.7,
    reviewsCount: 320,
    listings: ["Retail Storefront", "Office Space"],
    bio: "Mark Thompson is a commercial real estate expert specializing in retail spaces and investment properties. With over 12 years in the industry, Mark brings a wealth of knowledge and expertise to his clients.",
    specialties: ["Retail Spaces", "Investment Properties"], // Add specialties here
  },
  {
    id: "5",
    name: "Emily Davis",
    agency: "Green Properties",
    location: "Austin, TX",
    profileImage: 'https://img.freepik.com/free-photo/young-happy-woman-relaxing-home-living-room-smiling-laptop_1157-5602.jpg?t=st=1732983023~exp=1732983623~hmac=0be507d017ec122d80eafed2289c2c3b79f9c5ed842b76eae1a4f0c693d1abf7&w=900',
    contactInfo: {
      phone: "(512) 555-0321",
      email: "emily.davis@greenproperties.com",
    },
    priceRange: {
      lowest: 450000,
      highest: 2200000,
    },
    language: ["English"],
    experience: 6,
    rating: 4.6,
    reviewsCount: 150,
    listings: ["Eco Home 1", "Luxury Green Villa"],
    bio: "Emily Davis is a dedicated real estate agent who focuses on eco-friendly and sustainable homes. She is passionate about helping clients find properties that are both luxurious and environmentally responsible.",
    specialties: ["Eco-friendly Homes", "Sustainable Properties"], // Add specialties here
  },
  {
    id: "6",
    name: "David Brown",
    location: "Miami, FL",
    profileImage: 'https://img.freepik.com/free-photo/successful-handsome-businessman-working-office_1157-33923.jpg?t=st=1732983236~exp=1732983836~hmac=68cc0b7e9866e6f2675ca931289a263edc6f944542211d7d4952fa6a32c8d12b&w=900',
    contactInfo: {
      phone: "(305) 555-0189",
      email: "david.brown@blueskyrealestate.com",
    },
    priceRange: {
      lowest: 700000,
      highest: 3000000,
    },
    language: ["English", "Portuguese"],
    experience: 15,
    rating: 4.9,
    reviewsCount: 500,
    listings: ["Beach House 1", "Oceanfront Villa", "Luxury Condo 1"],
    bio: "David Brown has built a reputation as a leading agent in luxury beachfront properties and vacation homes. He’s known for his expertise in the Miami area and his commitment to exceptional service.",
    specialties: ["Luxury Beachfront Properties", "Vacation Homes"], // Add specialties here
  },
];
