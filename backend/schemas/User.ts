import { list } from '@keystone-next/keystone/schema';
import { text, password, relationship } from '@keystone-next/fields';

export const User = list({
  // these are for permission and roles that we have done yet
  // access:
  // should they be able to vieww the ui, also ppart of access and roles
  // ui:

  // these are where wwe put all the fields that wwe want
  fields: {
    name: text({ isRequired: true }),
    email: text({ isRequired: true, isUnique: true }),
    password: password(),
    // TODo add roles, cart and orders
  },
});
