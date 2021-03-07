import { User } from './schemas/User';
// take all of the vars from the env file and make the  available to us inside this file
import 'dotenv/config';
import { config, createSchema } from '@keystone-next/keystone/schema';

// get the db url from teh env file and if this does exist fall back to a local version
const databaseURL =
  process.env.DATABASE_URL || 'mongodb://localhost/keystone-sick-fits-tutorial';

// session config
const sessionConfig = {
  // how long does the user stay signed in
  // 60 sec in a min, 60 mins in hour, 24 hours, 30 days
  maxAge: 60 * 60 * 24 * 30,
  // when you're generating a cookie you need a secret, show not be available to anyone else so get it from env
  secret: process.env.COOKIE_SECRET,
};

export default config({
  server: {
    cors: {
      // because we're running the backend on a different port than the fronend we need to allow the data to go from the back to the front end, wont be an issue when deploying
      origin: [process.env.FRONTEND_URL],
      // will pass along the cookie
      credentials: true,
    },
  },
  db: {
    adapter: 'mongoose',
    url: databaseURL,
    // TODO : add data seeding here
  },
  lists: createSchema({
    // Scheme items go in here
    User,
  }),
  ui: {
    // do you want people to access the keystone ui
    // TODO: change this for toles
    isAccessAllowed: () => true,
  },
  // TODO: add session values here
});
