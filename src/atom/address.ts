import axios from 'axios';
import { atom, selector } from 'recoil';

export const addressAtom = atom<any[]>({
  key: 'Address',
  default: [],
});

export const currentaddressState = selector({
  key: 'Address',
  get: async () => {
    return await axios.get('src/data/footer.json').then((res) => {
      return res.data;
    });
  },
});
