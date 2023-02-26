
 export const initialStories = [
    {
        id: 1,
        username: 'Sasha',
        img: 'https://trikky.ru/wp-content/blogs.dir/1/files/2021/12/01/340193ff-9da8-4115-8a25-9e6fb64d578f.png',
        stories: [
            {
              id: 1,
              media: {
                type: 'video' || 'image',
                src: 'someurl.com'
              },
              isWatched: false,
            },
            {
              id: 2,
              media: {
                type: 'video' || 'image',
                src: 'someurl.com'
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
              src: 'someurl.com'
            },
            isWatched: false,
          },
          {
            id: 4,
            media: {
              type: 'video' || 'image',
              src: 'someurl.com'
            },
            isWatched: false,
          },
      ]
  }
  ]