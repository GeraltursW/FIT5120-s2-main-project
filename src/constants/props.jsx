import {
  star,
  facebook,
  instagram,
  linkedin,
  twitter, 
  Refrigerator,
  Tv,
  Airconditionar,
 } from "../assets";



export const socialMedia = [
  {
    id: "social-media-1",
    icon: instagram,
    link: "https://www.instagram.com/",
  },
  {
    id: "social-media-2",
    icon: facebook,
    link: "https://www.facebook.com/",
  },
  {
    id: "social-media-3",
    icon: twitter,
    link: "https://www.twitter.com/",
  },
  {
    id: "social-media-4",
    icon: linkedin,
    link: "https://www.linkedin.com/",
  },
];

export const footerLinks = [
  {
    title: "Useful Links",
    links: [
      {
        name: "Content",
        link: "https://www.hoobank.com/content/",
      },
      {
        name: "How it Works",
        link: "https://www.hoobank.com/how-it-works/",
      },
      {
        name: "Create",
        link: "https://www.hoobank.com/create/",
      },
      {
        name: "Explore",
        link: "https://www.hoobank.com/explore/",
      },
      {
        name: "Terms & Services",
        link: "https://www.hoobank.com/terms-and-services/",
      },
    ],
  },
]
export const navLinks = [
    {
      id: "home",
      title: "Home",
      url:"/home"
    },
    {
      id: "statistics",
      title: "Statistics",
      url:"/statistics"
    },
    {
      id: "tips",
      title: "Tips",
      url:"/tips"
    }
];

export const stats = [
  {
    id: "stats-1",
    title: "of greenhouse gas emissions in Australia is from electricity production ",
    value: " 37% ",
  },
  {
    id: "stats-2",
    title: " tonnes of greenhouse gas emissions per household per year",
    value: ">18",
  },
  {
    id: "stats-3",
    title: "national average electricity bill for Australian households",
    value: "$1645",
  },
];


export const features = [
  {
    id: "feature-1",
    icon: star,
    title: "Statistics",
    url:"/statistics",
    content:
      "See how your electricity energy contribute to greenhouse emissions",
  },
  {
    id: "feature-2",
    icon: star,
    title: "Tips",
    url:"/tips",
    content:
      "Check out how you can reduce your energy usage and help save the planet and money at the same time.",
  }
  ,
  {
    id: "feature-3",
    icon: star,
    title: "Calculator",
    url:"/calculator",
    content:
      "Check out how you can reduce your energy usage and help save the planet and money at the same time.",
  }];


  export const appliances = [
    {
      id: "appliances-1",
      image: Airconditionar,
      title: "Air Conditioner",
      
      content:
        "Find tips， C02 Emissons, and Recommondation appliances",
    },
    {
      id: "appliances-2",
      image: Tv,
      title: "Tv",
      
      content:
      "Find tips， C02 Emissons, and Recommondation appliances",    },
    {
      id: "appliances-3",
      image: Refrigerator,
      title: "Refrigerator",
     
      content:
      "Find tips， C02 Emissons, and Recommondation appliances",    },
    {
      id: "appliances-4",
      image: Airconditionar,
      title: "Air Conditioner",
     
      content:
      "Find tips， C02 Emissons, and Recommondation appliances",    },
    {
      id: "appliances-5",
      image: Tv,
      title: "Tv",
      
      content:
      "Find tips， C02 Emissons, and Recommondation appliances",    },
    {
      id: "appliances-6",
      image: Refrigerator,
      title: "Refrigerator",
      
      content:
      "Find tips， C02 Emissons, and Recommondation appliances",    },
];


export const top10ac = [
  {
    id: "ac1",
    model: "RZAV85CV1 / FCA85CVMA",
    brand: "DAIKIN",
    star:"5",
    image: Airconditionar,
    coolenergy:"2.0",
    heatenergy:"2.13",
   
  },
  {
    id: "ac2",
    model: "U-8ME2R8E",
    brand: "PANASONIC",
    star:"5",
    image: Airconditionar,
    coolenergy:"5.76",
    heatenergy:"4.21",
  }, {
    id: "ac3",
    model: "AJY040LBLBH",
    brand: "FUJITSU",
    star:"5",
    image: Airconditionar,
    coolenergy:"2.98",
    heatenergy:"2.47",
  }, {
    id: "ac4",
    model: "ARUN060GSS0",
    brand: "LG",
    star:"5",
    image: Airconditionar,
    coolenergy:"3.97",
    heatenergy:"3.589",
  }, {
    id: "ac5",
    model: "PUHY-EP200YNW-A1",
    brand: "MITSUBISHI ELECTRIC",
    star:"5",
    image: Airconditionar,
    coolenergy:"5.0",
    heatenergy:"5.7",
  }
];


export const erngycompany = [
  {
    id: "1",
    icon: star,
    title: "Diamond Energy",
    score: "Score = 10/10",
    content:"Diamond Energy generates renewable electricity. Diamond also owns over a thousand rooftop solar installations and are the first retailer to offer an export tariff for home batteries. They are more than 80% owned by their employees and company directors and operate in VIC, NSW, SA, and QLD. NOTE: Despite disruptions to the energy market, Diamond Energy is still accepting new customers and reviews applications on a case by case basis.",
    feature1: "Only generates renewable electricity.",
    feature2:"Large investment in renewable energy.",
    feature3:"Active support for household solar.",
  },
  {
    id: "2",
    icon: star,
    title: "MomentumEnergy",
    score: "Score = 8.6/10",
    content:"Momentum Energy are owned by Hydro Tasmania who generate mostly renewable electricity. Along with its hydro power stations, Hydro Tasmania owns two large gas power stations. Momentum operates in VIC, NSW, QLD and SA. NOTE: Due to disruptions to the energy market, Momentum has temporarily paused taking on new customers while they update their market offers.",
    feature1: "Invests in renewable energy.",
    feature2:"Generates predominantly renewable energy - mostly hydro power.",
    feature3:"Active support for household solar.",
  },
  {
    id: "3",
    icon: star,
    title: "Energy Locals",
    score: "Score =  8.09/10",
    content:"Energy Locals partners with and enables a number of community renewable energy initiatives including Manilla Solar, Indigo Power and CoPower. They offer solar feed in tariffs and smart meter installation and operation. They are mostly owned by Quinbrook Infrastructure Partners (a renewable energy investment fund) and operate in NSW, QLD, VIC, SA and TAS. NOTE: Despite disruptions to the energy market, Energy Locals are still taking on new customers in all states apart from South Australia.",
    feature1: "Partners with community-focussed electricity providers.",
    feature2:"Active support for household solar.",
    feature3:"Opposes CoalKeeper subsidy for coal power stations.",
  },
  {
    id: "4",
    icon: star,
    title: "Indigo Power",
    score: "Score = 7.88/10",
    content:"Indigo Power is a white-label electricity retailer - this means they trade via another company. In this case, they partner with Energy Locals. Indigo Power is a community-owned social enterprises supporting local renewable energy projects. Currently, Indigo Power operates across all of eastern Victoria, and most of regional NSW. NOTE: Despite disruptions to the energy market, Indigo Power is still taking on new customers.",
    feature1: "Have committed to giving half of their profits back to the community",
    feature2:"Works with rural and regional communities to transition to renewable energy.",
    feature3:"Invests in community-scale renewable assets, such as batteries.",
  },
  {
    id: "5",
    icon: star,
    title: "CoPower",
    score: "Score = 7.88/10",
    content:"CoPower (Cooperative Power) is a white-label electricity retailer - this means they trade via another company. In this case, they partner with Energy Locals. They are a member-based, cooperatively managed not-for-profit that invests in community projects. They operate in NSW, VIC, SA and QLD. Note: Despite disruptions to the energy market, CoPower is still taking on new customers.",
    feature1: "Cooperative, not-for-profit ownership model.",
    feature2:"Encourages renewable uptake among customers.",
    feature3:"nvests in local renewable energy projects.",
  },
];

