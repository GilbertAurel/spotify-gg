import { rest } from 'msw';
import { setupServer } from 'msw/node';
import { SEARCH_URL } from 'utils/apis/endpoints';

const tracks = {
  items: [
    {
      album: { images: [{ url: 'image url' }] },
      artists: [{ name: 'artist name' }],
      duration_ms: 261013,
      name: 'song name',
      uri: 'uri'
    }
  ]
};

export const handlers = [
  rest.get(SEARCH_URL, (req, res, ctx) => {
    return res(ctx.json({ tracks }));
  })
];

export const server = setupServer(...handlers);
