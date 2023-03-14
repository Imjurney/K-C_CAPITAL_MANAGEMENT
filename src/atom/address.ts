import { atom, selector } from 'recoil';
import footerData from '@/data/footer.json';

export const addressAtom = atom<any[]>({
  key: 'Address',
  default: [],
});

export const currentaddressState = selector({
  key: 'Address',
  get: async () => {
    return footerData;
  },
});
