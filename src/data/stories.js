
 const initialStories = [
    {
        id: 1,
        username: 'Sasha',
        img: 'https://trikky.ru/wp-content/blogs.dir/1/files/2021/12/01/340193ff-9da8-4115-8a25-9e6fb64d578f.png',
        stories: [
            {
              id: 1,
              media: {
                type: 'image',
                src: 'https://static.sadhguru.org/d/46272/1633199491-1633199490440.jpg'
              },
              isWatched: false,
            },
            {
              id: 2,
              media: {
                type: 'video' || 'image',
                src: 'https://img.freepik.com/free-photo/beautiful-scenery-road-forest-with-lot-colorful-autumn-trees_181624-30942.jpg?w=2000'
              },
              isWatched: false,
            },
            {
              id: 3,
              media: {
                type: 'video' || 'image',
                src: 'https://sites.google.com/site/prirodanasevseegooglgfgf/_/rsrc/1463456237313/home/priroda_gory_nebo_ozero_oblaka_81150_1920x1080.jpg'
              },
              isWatched: false,
            },
            {
              id: 4,
              media: {
                type: 'video' || 'image',
                src: 'https://gamerwall.pro/uploads/posts/2022-03/1648710748_1-gamerwall-pro-p-fon-na-temu-priroda-krasivie-1.jpg'
              },
              isWatched: false,
            },

        ]
    },
    {
      id: 2,
      username: 'Masha',
      img: 'https://trikky.ru/wp-content/blogs.dir/1/files/2021/12/01/340193ff-9da8-4115-8a25-9e6fb64d578f.png',
      stories: [
          {
            id: 3,
            media: {
              type: 'video' || 'image',
              src: 'https://cdn.pixabay.com/photo/2018/01/14/23/12/nature-3082832_960_720.jpg'
            },
            isWatched: false,
          },
          {
            id: 4,
            media: {
              type: 'video' || 'image',
              src: 'http://where.ru/upload/iblock/ad4/ad4ef7e48f611b6be29e51e9aefaecd1.jpg'
            },
            isWatched: false,
          },
      ]
  }
]

export const initUsers = [
  {
    userId: 1,
    name: 'Sasha',
    img: 'https://trikky.ru/wp-content/blogs.dir/1/files/2021/12/01/340193ff-9da8-4115-8a25-9e6fb64d578f.png',
    storiesId: 1,
    allStoriesWatched: false,
  },
  {
    userId: 2,
    name: 'Masha',
    img: 'https://trikky.ru/wp-content/blogs.dir/1/files/2021/12/01/340193ff-9da8-4115-8a25-9e6fb64d578f.png',
    storiesId: 2,
    allStoriesWatched: false,

  },
  {
    userId: 3,
    name: 'Sasha',
    img: 'https://trikky.ru/wp-content/blogs.dir/1/files/2021/12/01/340193ff-9da8-4115-8a25-9e6fb64d578f.png',
    storiesId: 3,
    allStoriesWatched: false,
  },
  {
    userId: 4,
    name: 'Masha',
    img: 'https://trikky.ru/wp-content/blogs.dir/1/files/2021/12/01/340193ff-9da8-4115-8a25-9e6fb64d578f.png',
    storiesId: 4,
    allStoriesWatched: false,

  },
  {
    userId: 5,
    name: 'Sasha',
    img: 'https://trikky.ru/wp-content/blogs.dir/1/files/2021/12/01/340193ff-9da8-4115-8a25-9e6fb64d578f.png',
    storiesId: 5,
    allStoriesWatched: false,
  },
  {
    userId: 6,
    name: 'Masha',
    img: 'https://trikky.ru/wp-content/blogs.dir/1/files/2021/12/01/340193ff-9da8-4115-8a25-9e6fb64d578f.png',
    storiesId: 6,
    allStoriesWatched: false,

  },
  {
    userId: 7,
    name: 'Sasha',
    img: 'https://trikky.ru/wp-content/blogs.dir/1/files/2021/12/01/340193ff-9da8-4115-8a25-9e6fb64d578f.png',
    storiesId: 7,
    allStoriesWatched: false,
  },
  {
    userId: 8,
    name: 'Masha',
    img: 'https://trikky.ru/wp-content/blogs.dir/1/files/2021/12/01/340193ff-9da8-4115-8a25-9e6fb64d578f.png',
    storiesId: 8,
    allStoriesWatched: false,

  },
  {
    userId: 9,
    name: 'Masha',
    img: 'https://trikky.ru/wp-content/blogs.dir/1/files/2021/12/01/340193ff-9da8-4115-8a25-9e6fb64d578f.png',
    storiesId: 9,
    allStoriesWatched: false,

  },
  {
    userId: 10,
    name: 'Masha',
    img: 'https://trikky.ru/wp-content/blogs.dir/1/files/2021/12/01/340193ff-9da8-4115-8a25-9e6fb64d578f.png',
    storiesId: 10,
    allStoriesWatched: false,

  },
]
export const initStories = [
  {
    storiesId: 1,
    userId: 1,
    stories: [
      {
        id: 0,
          media: {
            type: 'video',
            src: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4'
          },
          isWatched: false,
      },
      {
        id: 1,
          media: {
            type: 'image',
            src: 'https://cdn.pixabay.com/photo/2018/01/14/23/12/nature-3082832_960_720.jpg'
          },
          isWatched: false,
      },
    ]
  },
  {
    storiesId: 2,
    userId: 2,
    stories: [
      {
        id: 0,
        media: {
          type: 'image',
          src: 'http://where.ru/upload/iblock/ad4/ad4ef7e48f611b6be29e51e9aefaecd1.jpg'
        },
        isWatched: false,
      },
      {
        id: 1,
        media: {
          type: 'image',
          src: 'https://sites.google.com/site/prirodanasevseegooglgfgf/_/rsrc/1463456237313/home/priroda_gory_nebo_ozero_oblaka_81150_1920x1080.jpg'
        },
        isWatched: false,
      },
    ]
  },
  {
    storiesId: 3,
    userId: 3,
    stories: [
      {
        id: 0,
        media: {
          type: 'image',
          src: 'http://where.ru/upload/iblock/ad4/ad4ef7e48f611b6be29e51e9aefaecd1.jpg'
        },
        isWatched: false,
      },
      {
        id: 1,
        media: {
          type: 'image',
          src: 'https://sites.google.com/site/prirodanasevseegooglgfgf/_/rsrc/1463456237313/home/priroda_gory_nebo_ozero_oblaka_81150_1920x1080.jpg'
        },
        isWatched: false,
      },
    ]
  },
  {
    storiesId: 4,
    userId: 4,
    stories: [
      {
        id: 0,
        media: {
          type: 'image',
          src: 'http://where.ru/upload/iblock/ad4/ad4ef7e48f611b6be29e51e9aefaecd1.jpg'
        },
        isWatched: false,
      },
      {
        id: 1,
        media: {
          type: 'image',
          src: 'https://sites.google.com/site/prirodanasevseegooglgfgf/_/rsrc/1463456237313/home/priroda_gory_nebo_ozero_oblaka_81150_1920x1080.jpg'
        },
        isWatched: false,
      },
    ]
  },
  {
    storiesId: 5,
    userId: 5,
    stories: [
      {
        id: 0,
        media: {
          type: 'image',
          src: 'http://where.ru/upload/iblock/ad4/ad4ef7e48f611b6be29e51e9aefaecd1.jpg'
        },
        isWatched: false,
      },
      {
        id: 1,
        media: {
          type: 'image',
          src: 'https://sites.google.com/site/prirodanasevseegooglgfgf/_/rsrc/1463456237313/home/priroda_gory_nebo_ozero_oblaka_81150_1920x1080.jpg'
        },
        isWatched: false,
      },
    ]
  },
  {
    storiesId: 6,
    userId: 6,
    stories: [
      {
        id: 0,
        media: {
          type: 'image',
          src: 'http://where.ru/upload/iblock/ad4/ad4ef7e48f611b6be29e51e9aefaecd1.jpg'
        },
        isWatched: false,
      },
      {
        id: 1,
        media: {
          type: 'image',
          src: 'https://sites.google.com/site/prirodanasevseegooglgfgf/_/rsrc/1463456237313/home/priroda_gory_nebo_ozero_oblaka_81150_1920x1080.jpg'
        },
        isWatched: false,
      },
    ]
  },
  {
    storiesId: 7,
    userId: 7,
    stories: [
      {
        id: 0,
        media: {
          type: 'image',
          src: 'http://where.ru/upload/iblock/ad4/ad4ef7e48f611b6be29e51e9aefaecd1.jpg'
        },
        isWatched: false,
      },
      {
        id: 1,
        media: {
          type: 'image',
          src: 'https://sites.google.com/site/prirodanasevseegooglgfgf/_/rsrc/1463456237313/home/priroda_gory_nebo_ozero_oblaka_81150_1920x1080.jpg'
        },
        isWatched: false,
      },
    ]
  },
  {
    storiesId: 8,
    userId: 8,
    stories: [
      {
        id: 0,
        media: {
          type: 'image',
          src: 'http://where.ru/upload/iblock/ad4/ad4ef7e48f611b6be29e51e9aefaecd1.jpg'
        },
        isWatched: false,
      },
      {
        id: 1,
        media: {
          type: 'image',
          src: 'https://sites.google.com/site/prirodanasevseegooglgfgf/_/rsrc/1463456237313/home/priroda_gory_nebo_ozero_oblaka_81150_1920x1080.jpg'
        },
        isWatched: false,
      },
    ]
  },
  {
    storiesId: 9,
    userId: 9,
    stories: [
      {
        id: 0,
        media: {
          type: 'image',
          src: 'http://where.ru/upload/iblock/ad4/ad4ef7e48f611b6be29e51e9aefaecd1.jpg'
        },
        isWatched: false,
      },
      {
        id: 1,
        media: {
          type: 'image',
          src: 'https://sites.google.com/site/prirodanasevseegooglgfgf/_/rsrc/1463456237313/home/priroda_gory_nebo_ozero_oblaka_81150_1920x1080.jpg'
        },
        isWatched: false,
      },
    ]
  },
  {
    storiesId: 10,
    userId: 10,
    stories: [
      {
        id: 0,
        media: {
          type: 'image',
          src: 'http://where.ru/upload/iblock/ad4/ad4ef7e48f611b6be29e51e9aefaecd1.jpg'
        },
        isWatched: false,
      },
      {
        id: 1,
        media: {
          type: 'image',
          src: 'https://sites.google.com/site/prirodanasevseegooglgfgf/_/rsrc/1463456237313/home/priroda_gory_nebo_ozero_oblaka_81150_1920x1080.jpg'
        },
        isWatched: false,
      },
    ]
  },
]
