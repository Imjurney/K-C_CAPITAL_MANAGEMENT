import axios from 'axios';
import { atom, selector } from 'recoil';

const addressAtom = atom({
  key: 'Address',
  default: [],
});

export const currentaddressStatd = selector({
  key: 'Address',
  get: async () => {
    return await axios.get('src/data/footer.json').then((res) => {
      return res.data;
    });
  },
});
