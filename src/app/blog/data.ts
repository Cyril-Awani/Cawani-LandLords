export interface BlogPost {
  id: string;
  title: string;
  category: string;
  author: string;
  minutesRead: number;
  description: string;
  postDate: string;
  fullStory: string;
  imageUrl: string; // Add a field for the image URL
}

export const blogPosts: BlogPost[] = [
  {
    id: "1",
    title: "How to Build a Successful Startup",
    category: "Business",
    author: "John Doe",
    minutesRead: 5,
    description: "In this article, we explore the key steps in building a successful startup...",
    postDate: "2024-12-20",
    fullStory: "Building a successful startup requires a lot of effort, strategy, and persistence. First, you need a solid idea... [full story continues]",
    imageUrl: "https://img.freepik.com/free-vector/realistic-news-studio-background_23-2149985612.jpg?t=st=1735176740~exp=1735180340~hmac=cf78cd2ffbf47e7a1e389a1c5e1a9b3aaa0b6c7a4315542643c564a06e7e1fe0&w=900", // Example image URL
  },
  {
    id: "2",
    title: "The Future of Artificial Intelligence",
    category: "Technology",
    author: "Jane Smith",
    minutesRead: 7,
    description: "AI is rapidly changing the landscape of technology. Here's what the future holds...",
    postDate: "2024-12-22",
    fullStory: "Artificial Intelligence is evolving at an unprecedented pace. From natural language processing to machine learning... [full story continues]",
    imageUrl: "https://img.freepik.com/free-photo/ai-technology-microchip-background-futuristic-innovation-technology-remix_53876-108532.jpg?t=st=1735243980~exp=1735247580~hmac=3397def498292f8939d3cb324fe5e1e53fbbdfc4ba0bc4ab7e923b3f780a98d1&w=900", // Example image URL
  },
  {
    id: "3",
    title: "Exploring the Wonders of Nature",
    category: "Adventure",
    author: "Emily Clark",
    minutesRead: 6,
    description: "Embark on a journey to discover the most stunning natural wonders on Earth...",
    postDate: "2024-12-25",
    fullStory: "Nature's beauty is unparalleled, from the towering mountains to the vast oceans. Join us as we explore these magnificent wonders... [full story continues]",
    imageUrl: "https://img.freepik.com/free-photo/landscape-hills-covered-greenery-surrounded-by-sea-cloudy-sky-sunset_181624-15256.jpg?t=st=1735244405~exp=1735248005~hmac=2c87fd57d1021965398095729a9091d56cd573cb743964dd5d8103cb3be87d85&w=1060", // Example image URL
  },
  {
    id: "4",
    title: "Mastering the Art of Cooking",
    category: "Lifestyle",
    author: "Michael Harris",
    minutesRead: 8,
    description: "In this post, we share some essential tips for becoming a master chef in your own kitchen...",
    postDate: "2024-12-18",
    fullStory: "From knife skills to perfecting flavors, this guide covers everything you need to know to elevate your cooking skills... [full story continues]",
    imageUrl: "https://img.freepik.com/free-photo/chicken-stir-fried-chili-along-with-bell-pepper-tomatoes-carrots_1150-27221.jpg?t=st=1735244305~exp=1735247905~hmac=23df25942c4f0874be723c144a4df0d8b4d0af71df554037ee84db59b0189f46&w=900", // Example image URL
  },
  {
    id: "5",
    title: "The Rise of Remote Work",
    category: "Workplace",
    author: "Sophia Lee",
    minutesRead: 10,
    description: "Remote work is becoming increasingly popular. Discover the benefits and challenges that come with this shift...",
    postDate: "2024-12-19",
    fullStory: "As businesses adapt to remote work, many employees are finding new opportunities. However, it's not without its challenges... [full story continues]",
    imageUrl: "https://img.freepik.com/free-photo/male-employee-getting-used-his-new-office-job-along-with-female-colleagues_23-2149034606.jpg?t=st=1735244257~exp=1735247857~hmac=da02443af170b32e59d6fa97cb07d1cc2e6884cbda6a2dce1c2d4d20abc7737b&w=900", // Example image URL
  },
];
