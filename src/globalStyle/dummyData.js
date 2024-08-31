import { IMAGES } from "../constants";

// Interest Data

export const CREATIVITY = [
  {
    id: 1,
    title: "Art",
    image: IMAGES.cretiveInt1,
  },
  {
    id: 2,
    title: "Architecture",
    image: IMAGES.cretiveInt2,
  },
];

export const MANAGEMENT = [
  {
    id: 1,
    title: "Planner",
    image: IMAGES.manageInt1,
  },
  {
    id: 2,
    title: "Category",
    image: IMAGES.manageInt2,
  },
  {
    id: 3,
    title: "Analyst",
    image: IMAGES.manageInt3,
  },
  {
    id: 4,
    title: "Organizer",
    image: IMAGES.manageInt4,
  },
];

export const SPORTS = [
  {
    id: 1,
    title: "Soccer",
    image: IMAGES.sportsInt1,
  },
  {
    id: 2,
    title: "Basketball",
    image: IMAGES.sportsInt2,
  },
  {
    id: 3,
    title: "Golf",
    image: IMAGES.sportsInt3,
  },
];

export const FASHION = [
  {
    id: 1,
    title: "Men",
    image: IMAGES.FashionInt1,
  },
  {
    id: 2,
    title: "Women",
    image: IMAGES.FashionInt2,
  },
  {
    id: 3,
    title: "Pent",
    image: IMAGES.FashionInt3,
  },
  {
    id: 4,
    title: "T-shirt",
    image: IMAGES.FashionInt4,
  },
];


//Home Data
export const fbPostData = [
  {
    profile_name: "Wisteria Ravenclaw",
    profile_Image: IMAGES.serviceOne,
    duration: "2 hours ago",
    follow: "Follow",
    postImage: IMAGES.serviceOne,
    likesCount: "123",
    userLike: true,
    commentCount: "23",
  },
  {
    profile_name: "Brandon Guidelines",
    profile_Image: IMAGES.serviceTwo,
    duration: "2 hours ago",
    follow: "Follow",
    postImage: IMAGES.serviceTwo,
    likesCount: "123",
    userLike: false,
    commentCount: "28",
  },
  {
    profile_name: "Brandon Guidelines",
    profile_Image: IMAGES.profileBg,
    duration: "2 hours ago",
    postImage: IMAGES.profileBg,
    likesCount: "123",
    follow: "Follow",
    userLike: false,
    commentCount: "300",
  },
];

//  Commit Data

export const MESSAGEDATA = [
  {
      id: 1,
      profile_name: 'Gustav Purpleson',
      profile_Image: IMAGES.profile,
      description: 'Class aptent taciti sociosqu ad litora',
      reply: true,
      replies: [
          {
              comment: 'Hi Here'
          },
          {
              comment: 'Hi Here'
          }
      ]

  },
  {
      id: 2,
      profile_name: 'Wisteria Ravenclaw',
      profile_Image: IMAGES.avatar,
      description: 'Aenean accumsan interdum mauris',
      reply: 'Reply',

  },
  {
      id: 3,
      profile_name: 'Fleece Marigold',
      profile_Image: IMAGES.profile,
      description: 'Aenean accumsan interdum mauris',
      reply: 'Reply',

  },
  {
      id: 4,
      profile_name: 'Wisteria Ravenclaw',
      profile_Image: IMAGES.avatar,
      description: 'Aenean accumsan interdum mauris',
      // like: "Like",
      // disLike: 'DisLike',
      reply: 'Reply',

  },
  {
      id: 5,
      profile_name: 'Fleece Marigold',
      profile_Image: IMAGES.profile,
      description: 'Aenean accumsan interdum mauris',
      // like: "Like",
      // disLike: 'DisLike',
      reply: 'Reply',

  },

]

// Connection  Data
export const FOLLOW_ITEMS = [
  {
    id: 1,
    title: "Jassica",
    image: IMAGES.profile,
    time: "9h",
    connection: "13 mutual connenction",
    description: "Hey when are you going?",
  },
  {
    id: 2,
    title: "John",
    image: IMAGES.avatar,
    time: "4h",
    description: "Hey when are you going?",
    connection: "I would love to take ..",
  },
  {
    id: 3,
    title: "Smith",
    image: IMAGES.avatar,
    time: "9:45AM",
    connection: "131 mutual connenction",
    description: "Sure, lets do it.",
  },
  {
    id: 4,
    title: "Mukesh",
    image: IMAGES.profile,
    time: "10:45AM",
    connection: "10 mutual connenction",
    description: "Yes, it was an amazing experience",
  },
  {
    id: 5,
    title: "John",
    image: IMAGES.avatar,
    time: "7h",
    connection: "111 mutual connenction",
    description: "Hey when are you going?",
  },
  {
    id: 6,
    title: "Smith",
    image: IMAGES.profile,
    time: "9h",
    connection: "131 mutual connenction",
    description: "Hey when are you going?",
  },
  {
    id: 7,
    title: "Mukesh",
    image: IMAGES.avatar,
    time: "4h",
    connection: "10 mutual connenction",
    description: "Yes, it was an amazing experience",
  },
];

export const CATEGORIES = [
  {
    id: 1,
    title: "Electronics",
    image: IMAGES.electronics,
  },
  {
    id: 2,
    title: "Sports",
    image: IMAGES.games,
  },
  {
    id: 3,
    title: "Beauty",
    image: IMAGES.beauty,
  },
  {
    id: 4,
    title: "Arts & Crafts",
    image: IMAGES.arts,
  },
  {
    id: 5,
    title: "Toys And Games",
    image: IMAGES.games,
  },
  {
    id: 6,
    title: "Perfumes",
    image: IMAGES.perfumes,
  },
  {
    id: 7,
    title: "Mobiles",
    image: IMAGES.mobiles,
  },
  {
    id: 8,
    title: "Pet Supplies",
    image: IMAGES.pet,
  },
];

export const ALL_CATEGORIES = [
  {
    id: 1,
    title: "Electronics",
    image: IMAGES.electronics2,
  },
  {
    id: 2,
    title: "Sports",
    image: IMAGES.games2,
  },
  {
    id: 3,
    title: "Beauty",
    image: IMAGES.beauty2,
  },
  {
    id: 4,
    title: "Arts & Crafts",
    image: IMAGES.arts2,
  },
  {
    id: 5,
    title: "Toys And Games",
    image: IMAGES.games2,
  },
  {
    id: 6,
    title: "Perfumes",
    image: IMAGES.perfumes2,
  },
  {
    id: 7,
    title: "Mobiles",
    image: IMAGES.electronics2,
  },
  {
    id: 8,
    title: "Pet Supplies",
    image: IMAGES.games2,
  },
  
];
export const PRODUCTS = [
  {
    id: 1,
    title: "Red Sneakers",
    image: IMAGES.product1,
    discountPrice: "$100.00",
    actualPrice: "$36.00",
    review:'(7)'
  },
  {
    id: 2,
    title: "White Sneakers",
    image: IMAGES.product2,
    discountPrice: "$100.00",
    actualPrice: "$36.00",
    review:'(10)'

  },
  {
    id: 3,
    title: "Sun Glasses",
    image: IMAGES.product3,
    discountPrice: "$100.00",
    actualPrice: "$36.00",
    review:'(3)'

  },
  {
    id: 4,
    title: "Red Sneakers",
    image: IMAGES.product1,
    discountPrice: "$100.00",
    actualPrice: "$36.00",
    review:'(4)'

  },
  {
    id: 5,
    title: "White Sneakers",
    image: IMAGES.product2,
    discountPrice: "$100.00",
    actualPrice: "$36.00",
    review:'(6)'

  },
  {
    id: 6,
    title: "Sun Glasses",
    image: IMAGES.product3,
    discountPrice: "$100.00",
    actualPrice: "$36.00",
    review:'(19)'

  },
];

export const EVENTS = [
  {
    id: 1,
    title: "Joe's Birthday",
    friends: '13 mutual friends',
  },
  {
    id: 2,
    title: "Smith's Birthday",
    friends: '120 mutual friends',
  },
  {
    id: 3,
    title: "Jolly's Birthday",
    friends: '132 mutual friends',
  },
];

// Subscription item

export const SUBSCRIPTION_ITEM = [
  {
    id: 1,
    title: "Basic Starter",
    subTitle: "Build your profile",
    image: IMAGES.sub1,
    price: "05",
    connect: "5 Share/connect",
    profileUpdate: "Profile Update 1x/year",
    kidProfile: "2 kids Profile",
  },
  {
    id: 2,
    image: IMAGES.sub2,
    title: "Advance package",
    subTitle: "Build your profile",
    image: IMAGES.sub1,
    price: "10",
    connect: "5 Share/connect",
    profileUpdate: "Profile Update 1x/year",
    kidProfile: "2 kids Profile",
  },
  {
    id: 2,
    image: IMAGES.sub3,
    title: "Premium Package",
    subTitle: "Build your profile",
    price: "20",
    connect: "5 Share/connect",
    profileUpdate: "Profile Update 1x/year",
    kidProfile: "2 kids Profile",
  },
];

// Cart Item

export const CART = [
  {
    id: 1,
    title: "Hoddie",
    image: IMAGES.cartImg1,
    gender: "For man",
    actualPrice: "$36.00",
  },
  {
    id: 2,
    title: "Nike Air",
    image: IMAGES.cartImg2,
    gender: "For Woman",
    actualPrice: "$36.00",
  },
  {
    id: 3,
    title: "Sun Glasses",
    image: IMAGES.cartImg3,
    gender: "For Woman",
    actualPrice: "$36.00",
  },
];

// Message data 

export const FILTERDATA = [
  {
    id: 1,
    full_name: 'effectiveconfirmation',
    share: 'minim 😍 elit. maecenas nostrud 😋 sollicitudin commodo ad mi. 😛',
    days: 'Yesterday',
    image: IMAGES.profile,
    subServices: [
      {
        id: 1,
        full_name: 'intellectualguardian',
        share: 'minim 😍 elit. maecenas nostrud 😋 sollicitudin commodo ad mi. 😛',
        days: 'Yesterday',
        image: IMAGES.product3,
        subServices2: [
          {
            id: 1,
            full_name: 'superbmug',
            share: 'minim 😍 elit. maecenas nostrud 😋 sollicitudin commodo ad mi. 😛',
            days: 'Yesterday',
            image: IMAGES.avatar,
          },
          {
            id: 1,
            full_name: 'intellectualguardian',
        share: 'minim 😍 elit. maecenas nostrud 😋 sollicitudin commodo ad mi. 😛',
            days: 'Yesterday',
            image: IMAGES.product3,
          },
        ],
      },
      // {
      //   id: 1,
      //   full_name: 'A2',
      //   share: '2 New Shares',
      //   days: 'Yesterday',
      //   image: IMAGES.avatar,
      //   subServices2: [
      //     {
      //       id: 1,
      //       full_name: 'A21',
      //       share: '2 New Shares',
      //       days: 'Yesterday',
      //       image: IMAGES.profile,
      //     },
      //   ],
      // },
    ],
  },

  // {
  //   id: 2,
  //   full_name: 'B',
  //   share: '5 New Shares',
  //   days: 'Yesterday',
  //   image: IMAGES.avatar,
  //   subServices: [
  //     {
  //       id: 1,
  //       full_name: 'B1',
  //       share: '2 New Shares',
  //       days: 'Yesterday',
  //       image: IMAGES.profile,
  //       subServices2: [
  //         {
  //           id: 1,
  //           full_name: 'BB1',
  //           share: '2 New Shares',
  //           days: 'Yesterday',
  //           image: IMAGES.avatar,
  //         },
  //         {
  //           id: 1,
  //           full_name: 'BB2',
  //           share: '2 New Shares',
  //           days: 'Yesterday',
  //           image: IMAGES.profile,
  //         },
  //       ],
  //     },
  //   ],
  // },
];

// Question And Answer

export const QUESTIONS = [
  {
    id: 1,
    question: "Q: My favorite thing to do in my spare time?",
    answer:'Playing Video Games'
  },
  {
    id: 2,
    question: "Q: What is my favorite food?",
    answer:'Beef Steak'
  },
  
];

// EDIT FAVORITES
export const EDIT_FAVORITES = [
  {
    id: 1,
    title: "Category",
    subTitle:'Restaurant'
  },
  {
    id: 2,
    title: "Restaurant Names",
    subTitle:'La Madeleine'
  },
  
];

