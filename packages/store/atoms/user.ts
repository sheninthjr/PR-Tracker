import { atom } from 'recoil';

export const user = atom({
  key: 'userID',
  default: {
    id: null as string | null,
  },
});
