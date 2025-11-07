export interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: number;
  image?: string;
  isPopular?: boolean;
  isVegetarian?: boolean;
  isSpicy?: boolean;
}

export interface MenuCategory {
  id: string;
  title: string;
  description: string;
  items: MenuItem[];
}

export const menuData = {
  breakfast: {
    id: "breakfast",
    title: "Breakfast",
    description: "Start your day with our delicious breakfast selections",
    items: [
      {
        id: "br1",
        name: "Continental Breakfast",
        description: "Fresh pastries, seasonal fruits, yogurt, and your choice of beverage",
        price: 45,
        isPopular: true,
      },
      {
        id: "br2",
        name: "Full English Breakfast",
        description: "Eggs, bacon, sausages, baked beans, grilled tomatoes, and toast",
        price: 65,
        isPopular: true,
      },
      {
        id: "br3",
        name: "Pancake Stack",
        description: "Fluffy pancakes served with maple syrup, fresh berries, and whipped cream",
        price: 50,
      },
      {
        id: "br4",
        name: "Avocado Toast",
        description: "Smashed avocado on sourdough with poached eggs and cherry tomatoes",
        price: 55,
        isVegetarian: true,
      },
      {
        id: "br5",
        name: "Tropical Fruit Bowl",
        description: "Fresh seasonal tropical fruits with honey drizzle and coconut flakes",
        price: 40,
        isVegetarian: true,
      },
    ],
  },
  starters: {
    id: "starters",
    title: "Starters & Appetizers",
    description: "Perfect beginnings to your culinary journey",
    items: [
      {
        id: "st1",
        name: "Grilled Tiger Prawns",
        description: "Succulent prawns marinated in garlic butter, served with lemon wedges",
        price: 85,
        isPopular: true,
      },
      {
        id: "st2",
        name: "Calamari Rings",
        description: "Crispy fried calamari served with spicy aioli and fresh lime",
        price: 70,
        isSpicy: true,
      },
      {
        id: "st3",
        name: "Spring Rolls",
        description: "Vegetable spring rolls with sweet chili dipping sauce",
        price: 45,
        isVegetarian: true,
      },
      {
        id: "st4",
        name: "Chicken Wings",
        description: "Spicy buffalo wings with blue cheese dip and celery sticks",
        price: 60,
        isSpicy: true,
        isPopular: true,
      },
      {
        id: "st5",
        name: "Bruschetta",
        description: "Toasted bread topped with fresh tomatoes, basil, and balsamic glaze",
        price: 50,
        isVegetarian: true,
      },
    ],
  },
  mains: {
    id: "mains",
    title: "Main Courses",
    description: "Signature dishes featuring the finest ingredients",
    items: [
      {
        id: "main1",
        name: "Grilled Red Snapper",
        description: "Fresh catch of the day, grilled to perfection with herbs and lemon butter",
        price: 145,
        isPopular: true,
      },
      {
        id: "main2",
        name: "Lobster Thermidor",
        description: "Fresh lobster in creamy brandy sauce, served with seasonal vegetables",
        price: 195,
        isPopular: true,
      },
      {
        id: "main3",
        name: "Beef Tenderloin",
        description: "Premium tenderloin steak with peppercorn sauce and garlic mashed potatoes",
        price: 165,
      },
      {
        id: "main4",
        name: "Jollof Rice with Grilled Chicken",
        description: "Traditional West African jollof rice with perfectly grilled chicken thigh",
        price: 95,
        isPopular: true,
      },
      {
        id: "main5",
        name: "Seafood Pasta",
        description: "Linguine with prawns, calamari, and mussels in white wine garlic sauce",
        price: 125,
      },
      {
        id: "main6",
        name: "Vegetable Curry",
        description: "Mixed vegetables in aromatic coconut curry sauce with basmati rice",
        price: 85,
        isVegetarian: true,
        isSpicy: true,
      },
      {
        id: "main7",
        name: "Grilled Salmon",
        description: "Atlantic salmon fillet with dill cream sauce and roasted vegetables",
        price: 135,
      },
      {
        id: "main8",
        name: "Lamb Chops",
        description: "Herb-crusted lamb chops with mint sauce and seasonal vegetables",
        price: 155,
      },
    ],
  },
  children: {
    id: "children",
    title: "Children's Menu",
    description: "Delicious and nutritious meals for our little guests",
    items: [
      {
        id: "kid1",
        name: "Mini Burger & Fries",
        description: "Beef burger slider with crispy fries and ketchup",
        price: 45,
        isPopular: true,
      },
      {
        id: "kid2",
        name: "Chicken Nuggets",
        description: "Golden chicken nuggets served with fries and honey mustard",
        price: 40,
      },
      {
        id: "kid3",
        name: "Spaghetti Bolognese",
        description: "Classic pasta with mild tomato and beef sauce",
        price: 42,
      },
      {
        id: "kid4",
        name: "Fish Fingers & Chips",
        description: "Crispy fish fingers with chips and tartar sauce",
        price: 45,
      },
      {
        id: "kid5",
        name: "Mac & Cheese",
        description: "Creamy macaroni and cheese, a kids' favorite",
        price: 38,
        isVegetarian: true,
      },
    ],
  },
  desserts: {
    id: "desserts",
    title: "Desserts",
    description: "Sweet endings to complete your dining experience",
    items: [
      {
        id: "des1",
        name: "Chocolate Lava Cake",
        description: "Warm chocolate cake with molten center, served with vanilla ice cream",
        price: 55,
        isPopular: true,
      },
      {
        id: "des2",
        name: "Tropical Fruit Platter",
        description: "Fresh seasonal tropical fruits artfully arranged",
        price: 45,
        isVegetarian: true,
      },
      {
        id: "des3",
        name: "Tiramisu",
        description: "Classic Italian dessert with coffee-soaked ladyfingers and mascarpone",
        price: 50,
      },
      {
        id: "des4",
        name: "Coconut Panna Cotta",
        description: "Creamy coconut panna cotta with passion fruit coulis",
        price: 48,
        isVegetarian: true,
      },
      {
        id: "des5",
        name: "Ice Cream Sundae",
        description: "Three scoops with chocolate sauce, nuts, and whipped cream",
        price: 42,
        isPopular: true,
      },
    ],
  },
  drinks: {
    id: "drinks",
    title: "Beverages",
    description: "Refreshing drinks to complement your meal",
    items: [
      {
        id: "drk1",
        name: "Fresh Coconut Water",
        description: "Chilled coconut water straight from the coconut",
        price: 25,
        isPopular: true,
      },
      {
        id: "drk2",
        name: "Tropical Smoothie",
        description: "Blend of mango, pineapple, and banana",
        price: 35,
      },
      {
        id: "drk3",
        name: "Fresh Juices",
        description: "Orange, pineapple, watermelon, or mixed fruit",
        price: 28,
      },
      {
        id: "drk4",
        name: "Iced Coffee",
        description: "Cold brew coffee served over ice with cream",
        price: 30,
      },
      {
        id: "drk5",
        name: "Specialty Coffee",
        description: "Espresso, cappuccino, latte, or americano",
        price: 25,
      },
      {
        id: "drk6",
        name: "Soft Drinks",
        description: "Coca-Cola, Sprite, Fanta, or tonic water",
        price: 15,
      },
      {
        id: "drk7",
        name: "Herbal Tea",
        description: "Selection of premium herbal teas",
        price: 20,
      },
    ],
  },
  wines: {
    id: "wines",
    title: "Wine Selection",
    description: "Carefully curated wines from around the world",
    items: [
      {
        id: "wine1",
        name: "Sauvignon Blanc",
        description: "Crisp white wine with citrus notes (750ml)",
        price: 180,
        isPopular: true,
      },
      {
        id: "wine2",
        name: "Chardonnay",
        description: "Full-bodied white wine with oak finish (750ml)",
        price: 195,
      },
      {
        id: "wine3",
        name: "Pinot Grigio",
        description: "Light and refreshing Italian white (750ml)",
        price: 170,
      },
      {
        id: "wine4",
        name: "Cabernet Sauvignon",
        description: "Bold red wine with dark fruit flavors (750ml)",
        price: 210,
        isPopular: true,
      },
      {
        id: "wine5",
        name: "Merlot",
        description: "Smooth red wine with plum notes (750ml)",
        price: 195,
      },
      {
        id: "wine6",
        name: "Rosé",
        description: "Refreshing pink wine, perfect for the beach (750ml)",
        price: 165,
      },
      {
        id: "wine7",
        name: "Prosecco",
        description: "Italian sparkling wine (750ml)",
        price: 185,
        isPopular: true,
      },
      {
        id: "wine8",
        name: "Champagne",
        description: "Premium French champagne (750ml)",
        price: 350,
      },
    ],
  },
};