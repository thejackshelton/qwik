import { type RequestHandler } from '@qwik.dev/city';

export const onGet: RequestHandler = async ({ cookie, json }) => {
  let count = cookie.get('Qwik.demo.count')?.number() || 0;
  count++;
  cookie.set('Qwik.demo.count', count);
  json(200, { count });
};
