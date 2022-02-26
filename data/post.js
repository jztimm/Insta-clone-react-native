import { USERS } from "./users";
export const POSTS = [
  {
    imageUrl: 'https://scontent-iad3-2.xx.fbcdn.net/v/t39.30808-6/274335465_2576966555770057_9175714197831629719_n.jpg?_nc_cat=110&ccb=1-5&_nc_sid=8bfeb9&_nc_ohc=j_S37_ebIbMAX8ptqCr&tn=_LGMjLAjbh9LC0aV&_nc_ht=scontent-iad3-2.xx&oh=00_AT9A7ORvNMM-PvSmElkUfnedP43pI9ZneWQWeuasuc3wrw&oe=621DD780',
    user: USERS[0].user,
    likes: 245,
    caption: 'Train Ride to Hogwarts.',
    profile_picture: USERS[0].image,
    comments: [
      {
        user: 'Zack',
        comment: 'Wow! This is a fire Build!'
      },
      {
        user: 'Lil Dicky',
        comment: "I see you!"
      }
    ]
  },
  {
    imageUrl: 'https://bestprofilepictures.com/wp-content/uploads/2021/04/Cool-Pic.jpg',
    user: USERS[1].user,
    likes: 36,
    caption: 'Train Ride to Hogwarts.',
    profile_picture: USERS[1].image,
    comments: [
      {
        user: 'Zack',
        comment: 'Wow! This is a fire Build!'
      },
      {
        user: 'Lil Dicky',
        comment: "I see you!"
      }
    ]
  },
  {
    imageUrl: 'https://archziner.com/wp-content/uploads/2020/07/black-background-trendy-backgrounds-digital-drawing-of-man-wearing-hoodie-to-x-for-eyes.jpg',
    user: USERS[5].user,
    likes: 386,
    caption: 'Train Ride to Hogwarts.',
    profile_picture: USERS[5].image,
    comments: [
      {
        user: 'Zack',
        comment: 'Wow! This is a fire Build!'
      },
      {
        user: 'Lil Dicky',
        comment: "I see you!"
      }
    ]
  },
  {
    imageUrl: 'https://pbs.twimg.com/media/CEzzZM9WMAATLez?format=jpg&name=medium',
    user: USERS[0].user,
    likes: 151,
    caption: 'My Girl finally passed her test!',
    profile_picture: USERS[0].image,
    comments: [
      {
        user: 'Zack',
        comment: 'NICE'
      },
      {
        user: 'Lil Dicky',
        comment: "Congrats!"
      }
    ]
  },
  {
    imageUrl: 'https://pbs.twimg.com/media/E9YXZIpXMAAmb5E?format=jpg&name=large',
    user: USERS[2].user,
    likes: 63354,
    caption: 'Going to Busan soon for dinner!',
    profile_picture: USERS[2].image,
    comments: [
      {
        user: 'jominime',
        comment: 'YAASSS, enjoy dinner queen! 👑'
      },
    ]
  },
]