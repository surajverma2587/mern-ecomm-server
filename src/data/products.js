const products = [
  {
    name: "Fancy T-shirt",
    imageUrl:
      "https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1834&q=80",
    price: 89.99,
    isAvailable: true,
    stock: 120,
    shortDescription:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut ac libero a purus pellentesque facilisis.",
    longDescription:
      "Nulla tincidunt, turpis at faucibus blandit, velit massa sagittis arcu, id tincidunt mauris mi hendrerit lacus. Mauris sed nibh sit amet nunc malesuada pellentesque. Quisque et dictum velit, nec lobortis orci. Fusce magna nisl, elementum vitae lectus sed, placerat pulvinar turpis. Donec a interdum nisl, eu pretium sem. Integer non libero metus. Fusce interdum, ex sed hendrerit ornare, odio erat laoreet lacus, nec varius risus ante non neque.",
    tags: ["fancy", "t-shirt"],
    category: "Clothes",
    shop: "Primani",
  },
  {
    name: "Joggers",
    imageUrl:
      "https://images.unsplash.com/photo-1552902875-9ac1f9fe0c07?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8am9nZ2Vyc3xlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=60",
    price: 44.99,
    isAvailable: true,
    stock: 50,
    shortDescription:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut ac libero a purus pellentesque facilisis.",
    longDescription:
      "Nulla tincidunt, turpis at faucibus blandit, velit massa sagittis arcu, id tincidunt mauris mi hendrerit lacus. Mauris sed nibh sit amet nunc malesuada pellentesque. Quisque et dictum velit, nec lobortis orci. Fusce magna nisl, elementum vitae lectus sed, placerat pulvinar turpis. Donec a interdum nisl, eu pretium sem. Integer non libero metus. Fusce interdum, ex sed hendrerit ornare, odio erat laoreet lacus, nec varius risus ante non neque.",
    tags: ["outdoor", "sports"],
    category: "Clothes",
    shop: "Primani",
  },
  {
    name: "Proper Crocs",
    imageUrl:
      "https://media.comicbook.com/2021/04/cars-lightning-mcqueen-clogs-1265631.jpeg?auto=webp&width=1280&height=979&crop=1280:979,smart",
    price: 59.99,
    isAvailable: true,
    stock: 100,
    shortDescription:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut ac libero a purus pellentesque facilisis.",
    longDescription:
      "Nulla tincidunt, turpis at faucibus blandit, velit massa sagittis arcu, id tincidunt mauris mi hendrerit lacus. Mauris sed nibh sit amet nunc malesuada pellentesque. Quisque et dictum velit, nec lobortis orci. Fusce magna nisl, elementum vitae lectus sed, placerat pulvinar turpis. Donec a interdum nisl, eu pretium sem. Integer non libero metus. Fusce interdum, ex sed hendrerit ornare, odio erat laoreet lacus, nec varius risus ante non neque.",
    tags: [],
    category: "Footwear",
    shop: "Primani",
  },
  {
    name: "New Kicks",
    imageUrl:
      "https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1843&q=80",
    price: 129.99,
    isAvailable: true,
    stock: 45,
    shortDescription:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut ac libero a purus pellentesque facilisis.",
    longDescription:
      "Nulla tincidunt, turpis at faucibus blandit, velit massa sagittis arcu, id tincidunt mauris mi hendrerit lacus. Mauris sed nibh sit amet nunc malesuada pellentesque. Quisque et dictum velit, nec lobortis orci. Fusce magna nisl, elementum vitae lectus sed, placerat pulvinar turpis. Donec a interdum nisl, eu pretium sem. Integer non libero metus. Fusce interdum, ex sed hendrerit ornare, odio erat laoreet lacus, nec varius risus ante non neque.",
    tags: ["trendy", "2021"],
    category: "Footwear",
    shop: "Primani",
  },
  {
    name: "Hipster's Best",
    imageUrl:
      "https://images.unsplash.com/photo-1511499767150-a48a237f0083?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2600&q=80",
    price: 19.99,
    isAvailable: true,
    stock: 200,
    shortDescription:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut ac libero a purus pellentesque facilisis.",
    longDescription:
      "Nulla tincidunt, turpis at faucibus blandit, velit massa sagittis arcu, id tincidunt mauris mi hendrerit lacus. Mauris sed nibh sit amet nunc malesuada pellentesque. Quisque et dictum velit, nec lobortis orci. Fusce magna nisl, elementum vitae lectus sed, placerat pulvinar turpis. Donec a interdum nisl, eu pretium sem. Integer non libero metus. Fusce interdum, ex sed hendrerit ornare, odio erat laoreet lacus, nec varius risus ante non neque.",
    tags: ["Summer", "Vibes", "Cool"],
    category: "Accessories",
    shop: "Primani",
  },
  {
    name: "Classic Time piece",
    imageUrl:
      "https://images.unsplash.com/photo-1522312346375-d1a52e2b99b3?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8d2F0Y2h8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=60",
    price: 34.99,
    isAvailable: true,
    stock: 120,
    shortDescription:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut ac libero a purus pellentesque facilisis.",
    longDescription:
      "Nulla tincidunt, turpis at faucibus blandit, velit massa sagittis arcu, id tincidunt mauris mi hendrerit lacus. Mauris sed nibh sit amet nunc malesuada pellentesque. Quisque et dictum velit, nec lobortis orci. Fusce magna nisl, elementum vitae lectus sed, placerat pulvinar turpis. Donec a interdum nisl, eu pretium sem. Integer non libero metus. Fusce interdum, ex sed hendrerit ornare, odio erat laoreet lacus, nec varius risus ante non neque.",
    tags: ["classic"],
    category: "Accessories",
    shop: "Primani",
  },
  {
    name: "Insta Set",
    imageUrl:
      "https://images.unsplash.com/photo-1556905055-8f358a7a47b2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2550&q=80",
    price: 123.99,
    isAvailable: true,
    stock: 12,
    shortDescription:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut ac libero a purus pellentesque facilisis.",
    longDescription:
      "Nulla tincidunt, turpis at faucibus blandit, velit massa sagittis arcu, id tincidunt mauris mi hendrerit lacus. Mauris sed nibh sit amet nunc malesuada pellentesque. Quisque et dictum velit, nec lobortis orci. Fusce magna nisl, elementum vitae lectus sed, placerat pulvinar turpis. Donec a interdum nisl, eu pretium sem. Integer non libero metus. Fusce interdum, ex sed hendrerit ornare, odio erat laoreet lacus, nec varius risus ante non neque.",
    tags: ["Instagram", "ready"],
    category: "Clothes",
    shop: "ASauce",
  },
  {
    name: "Not Nike Air, but Air Nike",
    imageUrl:
      "https://images.unsplash.com/photo-1585036156261-1e2ac055414d?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8c3BvcnRzJTIwd2VhcnxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=60",
    price: 12.99,
    isAvailable: true,
    stock: 123,
    shortDescription:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut ac libero a purus pellentesque facilisis.",
    longDescription:
      "Nulla tincidunt, turpis at faucibus blandit, velit massa sagittis arcu, id tincidunt mauris mi hendrerit lacus. Mauris sed nibh sit amet nunc malesuada pellentesque. Quisque et dictum velit, nec lobortis orci. Fusce magna nisl, elementum vitae lectus sed, placerat pulvinar turpis. Donec a interdum nisl, eu pretium sem. Integer non libero metus. Fusce interdum, ex sed hendrerit ornare, odio erat laoreet lacus, nec varius risus ante non neque.",
    tags: ["Approved", "ItsTheTick"],
    category: "Clothes",
    shop: "ASauce",
  },
  {
    name: "Booty boots",
    imageUrl:
      "https://images.unsplash.com/photo-1608256246200-53e635b5b65f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1834&q=80",
    price: 1024.99,
    isAvailable: true,
    stock: 12,
    shortDescription:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut ac libero a purus pellentesque facilisis.",
    longDescription:
      "Nulla tincidunt, turpis at faucibus blandit, velit massa sagittis arcu, id tincidunt mauris mi hendrerit lacus. Mauris sed nibh sit amet nunc malesuada pellentesque. Quisque et dictum velit, nec lobortis orci. Fusce magna nisl, elementum vitae lectus sed, placerat pulvinar turpis. Donec a interdum nisl, eu pretium sem. Integer non libero metus. Fusce interdum, ex sed hendrerit ornare, odio erat laoreet lacus, nec varius risus ante non neque.",
    tags: ["Snazzy", "Phwoar"],
    category: "Footwear",
    shop: "ASauce",
  },
  {
    name: "45th Tims",
    imageUrl:
      "https://images.unsplash.com/photo-1542840410-51984f97783a?ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDN8fHxlbnwwfHx8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=60",
    price: 234.99,
    isAvailable: true,
    stock: 300,
    shortDescription:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut ac libero a purus pellentesque facilisis.",
    longDescription:
      "Nulla tincidunt, turpis at faucibus blandit, velit massa sagittis arcu, id tincidunt mauris mi hendrerit lacus. Mauris sed nibh sit amet nunc malesuada pellentesque. Quisque et dictum velit, nec lobortis orci. Fusce magna nisl, elementum vitae lectus sed, placerat pulvinar turpis. Donec a interdum nisl, eu pretium sem. Integer non libero metus. Fusce interdum, ex sed hendrerit ornare, odio erat laoreet lacus, nec varius risus ante non neque.",
    tags: ["Real", "Timberlands"],
    category: "Footwear",
    shop: "ASauce",
  },
  {
    name: "Proper Pan",
    imageUrl:
      "https://images.unsplash.com/photo-1528712306091-ed0763094c98?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1880&q=80",
    price: 4.99,
    isAvailable: true,
    stock: 500,
    shortDescription:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut ac libero a purus pellentesque facilisis.",
    longDescription:
      "Nulla tincidunt, turpis at faucibus blandit, velit massa sagittis arcu, id tincidunt mauris mi hendrerit lacus. Mauris sed nibh sit amet nunc malesuada pellentesque. Quisque et dictum velit, nec lobortis orci. Fusce magna nisl, elementum vitae lectus sed, placerat pulvinar turpis. Donec a interdum nisl, eu pretium sem. Integer non libero metus. Fusce interdum, ex sed hendrerit ornare, odio erat laoreet lacus, nec varius risus ante non neque.",
    tags: ["Look", "at", "that", "food"],
    category: "Homeware",
    shop: "ASauce",
  },
  {
    name: "Hugs Rug",
    imageUrl:
      "https://images.unsplash.com/photo-1618219944342-824e40a13285?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1482&q=80",
    price: 80.21,
    isAvailable: true,
    stock: 31,
    shortDescription:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut ac libero a purus pellentesque facilisis.",
    longDescription:
      "Nulla tincidunt, turpis at faucibus blandit, velit massa sagittis arcu, id tincidunt mauris mi hendrerit lacus. Mauris sed nibh sit amet nunc malesuada pellentesque. Quisque et dictum velit, nec lobortis orci. Fusce magna nisl, elementum vitae lectus sed, placerat pulvinar turpis. Donec a interdum nisl, eu pretium sem. Integer non libero metus. Fusce interdum, ex sed hendrerit ornare, odio erat laoreet lacus, nec varius risus ante non neque.",
    tags: ["Hug", "you", "rug"],
    category: "Homeware",
    shop: "ASauce",
  },
  {
    name: "Mr Squiggles",
    imageUrl:
      "https://images.unsplash.com/photo-1615486363973-f79d875780cf?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8a2lkcyUyMGl0ZW1zfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=60",
    price: 224.99,
    isAvailable: true,
    stock: 1,
    shortDescription:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut ac libero a purus pellentesque facilisis.",
    longDescription:
      "Nulla tincidunt, turpis at faucibus blandit, velit massa sagittis arcu, id tincidunt mauris mi hendrerit lacus. Mauris sed nibh sit amet nunc malesuada pellentesque. Quisque et dictum velit, nec lobortis orci. Fusce magna nisl, elementum vitae lectus sed, placerat pulvinar turpis. Donec a interdum nisl, eu pretium sem. Integer non libero metus. Fusce interdum, ex sed hendrerit ornare, odio erat laoreet lacus, nec varius risus ante non neque.",
    tags: ["Best", "Friend"],
    category: "Kids",
    shop: "ASauce",
  },
  {
    name: "SayCheeseTM",
    imageUrl:
      "https://images.unsplash.com/photo-1516627145497-ae6968895b74?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2524&q=80",
    price: 0.99,
    isAvailable: true,
    stock: 3000,
    shortDescription:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut ac libero a purus pellentesque facilisis.",
    longDescription:
      "Nulla tincidunt, turpis at faucibus blandit, velit massa sagittis arcu, id tincidunt mauris mi hendrerit lacus. Mauris sed nibh sit amet nunc malesuada pellentesque. Quisque et dictum velit, nec lobortis orci. Fusce magna nisl, elementum vitae lectus sed, placerat pulvinar turpis. Donec a interdum nisl, eu pretium sem. Integer non libero metus. Fusce interdum, ex sed hendrerit ornare, odio erat laoreet lacus, nec varius risus ante non neque.",
    tags: ["", ""],
    category: "Kids",
    shop: "ASauce",
  },
];

module.exports = products;
