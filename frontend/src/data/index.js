export const products = [
  // MEN (Price $60 - $100)
  {
    id: 1, name: "Midnight Tailored Suit", category: "Men", priceUSD: 100, pricePKR: 28000, 
    image: "https://images.pexels.com/photos/1342609/pexels-photo-1342609.jpeg?auto=compress&cs=tinysrgb&w=800", isNew: true
  },
  {
    id: 2, name: "Onyx Leather Jacket", category: "Men", priceUSD: 90, pricePKR: 25200, 
    image: "https://images.pexels.com/photos/16170/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=800"
  },
  {
    id: 3, name: "Oxford Cotton Shirt", category: "Men", priceUSD: 60, pricePKR: 16800, 
    image: "https://images.pexels.com/photos/297933/pexels-photo-297933.jpeg?auto=compress&cs=tinysrgb&w=800"
  },
  {
    id: 4, name: "Textured Wool Coat", category: "Men", priceUSD: 95, pricePKR: 26600, 
    image: "/men-wool-coat.png", isNew: true
  },
  {
    id: 5, name: "Classic Chelsea Boots", category: "Men", priceUSD: 85, pricePKR: 23800, 
    image: "https://images.pexels.com/photos/293405/pexels-photo-293405.jpeg?auto=compress&cs=tinysrgb&w=800"
  },

  // WOMEN (Price $6 - $100)
  {
    id: 6, name: "Silk Evening Gown", category: "Women", priceUSD: 100, pricePKR: 28000, 
    image: "https://images.pexels.com/photos/985635/pexels-photo-985635.jpeg?auto=compress&cs=tinysrgb&w=800", isNew: true
  },
  {
    id: 7, name: "Linen Summer Dress", category: "Women", priceUSD: 65, pricePKR: 18200, 
    image: "https://images.pexels.com/photos/1536619/pexels-photo-1536619.jpeg?auto=compress&cs=tinysrgb&w=800"
  },
  {
    id: 8, name: "Velvet Elegance Top", category: "Women", priceUSD: 45, pricePKR: 12600, 
    image: "https://images.pexels.com/photos/6765164/pexels-photo-6765164.jpeg?auto=compress&cs=tinysrgb&w=800"
  },
  {
    id: 9, name: "Signature Handbag", category: "Women", priceUSD: 90, pricePKR: 25200, 
    image: "https://images.pexels.com/photos/1152077/pexels-photo-1152077.jpeg?auto=compress&cs=tinysrgb&w=800", isNew: true
  },
  {
    id: 10, name: "Basic Silk Scarf", category: "Women", priceUSD: 6, pricePKR: 1680, 
    image: "/silk-scarf.png"
  },

  // KIDS (Price $20 - $40)
  {
    id: 11, name: "Junior Formal Set", category: "Kids", priceUSD: 40, pricePKR: 11200, 
    image: "/kids-formal.png", isNew: true 
  },
  {
    id: 12, name: "Denim Overalls", category: "Kids", priceUSD: 35, pricePKR: 9800, 
    image: "https://images.pexels.com/photos/5560019/pexels-photo-5560019.jpeg?auto=compress&cs=tinysrgb&w=800"
  },
  {
    id: 13, name: "Cozy Knit Sweater", category: "Kids", priceUSD: 25, pricePKR: 7000, 
    image: "https://images.pexels.com/photos/3771679/pexels-photo-3771679.jpeg?auto=compress&cs=tinysrgb&w=800" 
  },
  {
    id: 14, name: "Playtime Sneakers", category: "Kids", priceUSD: 20, pricePKR: 5600, 
    image: "https://images.pexels.com/photos/1598508/pexels-photo-1598508.jpeg?auto=compress&cs=tinysrgb&w=800" 
  },
  {
    id: 15, name: "Summer Floral Dress", category: "Kids", priceUSD: 30, pricePKR: 8400, 
    image: "https://images.pexels.com/photos/5559986/pexels-photo-5559986.jpeg?auto=compress&cs=tinysrgb&w=800", isNew: true 
  },
  
  // SUMMER SPECIFIC
  {
    id: 16, name: "Tropical Print Wrap", category: "Summer", priceUSD: 50, pricePKR: 14000, 
    image: "https://images.pexels.com/photos/1375849/pexels-photo-1375849.jpeg?auto=compress&cs=tinysrgb&w=800"
  },
  {
    id: 17, name: "Beach Resort Hat", category: "Summer", priceUSD: 25, pricePKR: 7000, 
    image: "/images/beach-hat.jpg" 
  },
  {
    id: 18, name: "Lightweight Chinos", category: "Summer", priceUSD: 55, pricePKR: 15400, 
    image: "https://images.pexels.com/photos/1300550/pexels-photo-1300550.jpeg?auto=compress&cs=tinysrgb&w=800" 
  },

  // WINTER SPECIFIC
  {
    id: 19, name: "Arctic Puffer Jacket", category: "Winter", priceUSD: 100, pricePKR: 28000, 
    image: "/arctic-puffer.png"
  },
  {
    id: 20, name: "Cashmere Beanie", category: "Winter", priceUSD: 35, pricePKR: 9800, 
    image: "https://images.pexels.com/photos/1868735/pexels-photo-1868735.jpeg?auto=compress&cs=tinysrgb&w=800"
  },
  {
    id: 21, name: "Heavy Knit Cardigan", category: "Winter", priceUSD: 85, pricePKR: 23800, 
    image: "https://images.pexels.com/photos/6764040/pexels-photo-6764040.jpeg?auto=compress&cs=tinysrgb&w=800"
  }
];

export const collections = [
  {
    id: "summer",
    title: "Summer Collection",
    image: "https://images.pexels.com/photos/1375849/pexels-photo-1375849.jpeg?auto=compress&cs=tinysrgb&w=800",
    link: "/summer"
  },
  {
    id: "winter",
    title: "Winter Collection",
    image: "https://images.pexels.com/photos/837140/pexels-photo-837140.jpeg?auto=compress&cs=tinysrgb&w=800",
    link: "/winter"
  }
];
