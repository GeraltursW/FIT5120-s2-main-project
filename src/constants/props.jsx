import {
  star,
  facebook,
  instagram,
  linkedin,
  twitter, 
  Refrigerator,
  Tv,
  Airconditionar,
  AirConditioner1,
  AirConditioner2,
  AirConditioner3,
  AirConditioner4,
  AirConditioner5,
  Tv1,
  Tv2,
  Tv3,
  Tv4,
  Tv5,
  Fridge1,
  Fridge2,
  Fridge3,
  Fridge4,
  Fridge5
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
      id: "Calculator",
      title: "CO2 Calculator",
      url:"/calculator"
    },
    {
      id: "Recommendations",
      title: "Energy Tips",
      url:"/tips"
    },

    {
      id: "Energy Supplier",
      title: "Energy Provider",
      url:"/energysupplier"
    },
    {
      id: "Carbon offset",
      title: "Carbon offset",
      url:"/carbonoffset"
    },
    {
      id: "statistics",
      title: "Energy Statistics",
      url:"/statistics"
    },
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
    id: "feature-3",
    icon: star,
    title: "CO2 Calculator",
    url:"/calculator",
    content:
      "Check out how you can reduce your energy usage and help save the planet and money at the same time.",
  },
  {
    id: "feature-2",
    icon: star,
    title: "Energy Tips",
    url:"/tips",
    content:
      "Check out how you can reduce your energy usage and help save the planet and money at the same time.",
  },
  {
    id: "feature-1",
    icon: star,
    title: "Energy Statistics",
    url:"/statistics",
    content:
      "Let see how your electricity energy contribute to greenhouse emissions",
  },
  {
    id: "feature-4",
    icon: star,
    title: "Energy Provider",
    url:"/energysupplier",
    content:
      "See the greenest energy companies in Victoria and how they contribute to a carbon neutral future",
  },

  
 
];


  export const appliances = [
    {
      id: "appliances-1",
      image: Airconditionar,
      title: "Air Conditioner",
      

    },
    {
      id: "appliances-2",
      image: Tv,
      title: "TV",
    },

    {
      id: "appliances-3",
      image: Refrigerator,
      title: "Refrigerator",
     
    }
    

];

export const top10fridge = [
  {
    id: "ac1",
    model: "HR6BMFF519B",
    brand: "HISENSE",
    star:"5",
    image: Fridge1,
    link:"https://masterbuygroup.com.au/product/hisense-519l-bottom-mount-refrigerator-hr6bmff519b/"
   
  },
  {
    id: "ac2",
    model: "GC-B529NLCF",
    brand: "LG",
    star:"5",
    image: Fridge2,
    link:"https://www.harveynorman.com.my/home-appliances/kitchen-appliances-en/fridges-en/lg-gc-b529nqcz-454l-2-door-bottom-freezer-fridge.html"
  }, {
    id: "ac3",
    model: "HR6BMFF453B",
    brand: "HISENSE",
    star:"5",
    image: Fridge3,
    link:"https://hisense.com.au/product/bottom-mount-black-steel-hr6bmff453b/"
  }, {
    id: "ac4",
    model: "CNef 4315",
    brand: "LIEBHERR",
    star:"5",
    image: Fridge4,
    link:"https://home.liebherr.com/en/aus/apac/household-appliances/freestanding-appliances/fridge-freezers/details/cnef-4315.html"
  }, {
    id: "ac5",
    model: "SGNPes 4365",
    brand: "LIEBHERR",
    star:"5",
    image: Fridge5,
    link:"https://home.liebherr.com/en/aus/apac/household-appliances/freestanding-appliances/freezers/details/sgnpes-4365.html"
  }
];

export const top10tv = [
  {
    id: "ac1",
    model: "8215 Series 4K ",
    brand: "PHILIPS",
    star:"5",
    image: Tv1,
    size: "65'' ",
    link:"https://www.harveynorman.com.au/philips-65-inch-8215-series-4k-uhd-led-lcd-android-tv.html"
   
  },
  {
    id: "ac1",
    model: "LC-50LE275X",
    brand: "SHARP",
    star:"5",
    image: Tv2,
    size: "50'' ",
    link:"https://productz.com/en/sharp-lc-50le275x/p/dxwoG"
   
  },
  {
    id: "ac1",
    model: "40PFT5063/79",
    brand: "PHILIPS",
    star:"5",
    image: Tv3,
    size: "40'' ",
    link:"https://www.philips.com.au/c-p/40PFT5063_79/5000-series-full-hd-ultra-slim-led-tv-with-digital-crystal-clear"
   
  },
  {
    id: "ac1",
    model: "Series 9, RT9230",
    brand: "KOGAN",
    star:"5",
    image: Tv4,
    size: "55'' ",
    link:"https://www.kogan.com/au/buy/kogan-55-4k-uhd-led-smart-android-tv-series-9-rt9230-kogan/?utm_source=google&utm_medium=product_listing_ads&gclid=Cj0KCQjwsrWZBhC4ARIsAGGUJuoq4yXQZxMeS937Fj4xH5s4c0IsR9IQ4Bq8oMKqbmWMDtdk4uuNMDMaAoU6EALw_wcB"
   
  },
  {
    id: "ac1",
    model: "55P615",
    brand: "TCL",
    star:"5",
    image: Tv5,
    size: "50'' ",
    link:"https://www.betta.com.au/tcl-55-inch-4k-ultra-hd-android-television-815367?gclid=Cj0KCQjwsrWZBhC4ARIsAGGUJuoyrBrfAzK9caMOUFuld21B5dAdAHYdCwsd79SalLFmiOdr8pGZppEaAupdEALw_wcB"
   
  },
];


export const top10ac = [
  {
    id: "ac1",
    model: "RZAV85CV1 / FCA85CVMA",
    brand: "DAIKIN",
    star:"5",
    image: AirConditioner1,
    coolenergy:"2.0",
    heatenergy:"2.13",
    link:"https://www.lawsonair.com.au/daikin-fca85c-vcv-8.5kw-single-phase-premium-cassette"
   
  },
  {
    id: "ac2",
    model: "U-8ME2R8E",
    brand: "PANASONIC",
    star:"5",
    image: AirConditioner2,
    coolenergy:"5.76",
    heatenergy:"4.21",
    link:"https://www.harveynorman.com.au/panasonic-8-0kw-u-series-smart-cooling-only-split-system-air-conditioner.html?CAWELAID=720013240000581148&gclid=Cj0KCQjwsrWZBhC4ARIsAGGUJupJohlDDQ56NOV88sx5h3uKr2GgNRT6DX-q5OhHSVKocUue_71By6YaAhVZEALw_wcB&gclsrc=aw.ds"
  }, {
    id: "ac3",
    model: "AJY040LBLBH",
    brand: "FUJITSU",
    star:"5",
    image: AirConditioner3,
    coolenergy:"2.98",
    heatenergy:"2.47",
    link:"https://www.fujitsu-general.com/uk/products/vrf/j4/ajy040lblbh.html"
  }, {
    id: "ac4",
    model: "ARUN060GSS0",
    brand: "LG",
    star:"5",
    image: AirConditioner4,
    coolenergy:"3.97",
    heatenergy:"3.589",
    link:"https://wholesaleaircon.com.au/product/lg-air-conditioning-wh30sr-18-premium-inverter-split-system/?utm_source=Google%20Shopping&utm_campaign=BIllys%20feed&utm_medium=cpc&utm_term=2121&gclid=Cj0KCQjwsrWZBhC4ARIsAGGUJuqEbZvOwPwNBZz6XpQ4OEuBNAJwCiGH7zwoSVmSApj6SlmxMS06hjAaAl0IEALw_wcB"
  }, {
    id: "ac5",
    model: "PUHY-EP200YNW-A1",
    brand: "MITSUBISHI ELECTRIC",
    star:"5",
    image: AirConditioner5,
    coolenergy:"5.0",
    heatenergy:"5.7",
    link:"https://www.ozaironline.com.au/products/mitsubishi-electric-ap-series-2-5kw-reverse-cycle-split-air-conditioner?currency=AUD&variant=40087828267216&utm_medium=cpc&utm_source=google&utm_campaign=Google%20Shopping&gclid=Cj0KCQjwsrWZBhC4ARIsAGGUJupXmy4hF_9HdQmndWHbQkjkP-0C7520JOUnP_G1YJJ9Gq-LafnWpLcaAg_FEALw_wcB"
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

export const smartuser = [
  {
    id: "smartuser-1",
    title: "Smart User Box hill",
    src:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.7595029692707!2d145.1220999!3d-37.81910179999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad640b74fd28fdf%3A0x970f5f6c155a8b6f!2sBox%20Hill%20Central!5e0!3m2!1sen!2sau!4v1665200778453!5m2!1sen!2sau",
    

  },
  {
    id: "smartuser-2",
    title: "Smart User Chadstone",
    src:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3148.821946561023!2d145.0803919513482!3d-37.887846479639485!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad66a66054c293f%3A0xf0456760532d460!2sChadstone%20-%20The%20Fashion%20Capital!5e0!3m2!1sen!2sau!4v1665200603115!5m2!1sen!2sau",
    

  },
  {
    id: "smartuser-3",
    title: "Smart User Highpoint Shopping Centre",
    src:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.684608554413!2d144.8850006269531!3d-37.773992799999995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad65c568adda5ed%3A0x96a050f6dc82f3f8!2sHighpoint%20Shopping%20Centre!5e0!3m2!1sen!2sau!4v1665200657676!5m2!1sen!2sau" ,
    

  },
  {
    id: "smartuser-4",
    title: "Smart User Glen Waverley",
    src:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3148.224729750189!2d145.13560805134856!3d-37.90180957963708!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad65d4e776a2d61%3A0xe10cc853204934dd!2sSmart%20User!5e0!3m2!1sen!2sau!4v1665200405582!5m2!1sen!2sau" ,
    

  },
];

