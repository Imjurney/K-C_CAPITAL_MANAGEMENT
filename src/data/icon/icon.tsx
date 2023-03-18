import { MdApartment } from 'react-icons/md';

import CustomIcon from '@/utils/creactCustomIcon';

export const CUSTOM_ICONS = [
  {
    id: 1,
    name: 'investment',
    name2: 'company',
    discription:
      'We invest in companies developing real estate, especially in residential properties where the securities provided are safe and sound. We carefully select the companies we invest through our extensive research and analysis of the companies’ performance, credibility, and potential to grow.',
    icon_name: [<MdApartment color="white" key={'kc_custom_icon_apart'} />],
    path: '/Contact',
  },
  {
    id: 2,
    name: 'Investment',
    name2: 'Strategy',
    discription:
      'We invest in companies developing real estate, especially in residential properties where the securities provided are safe and sound. We carefully select the companies we invest through our extensive research and analysis of the companies’ performance, credibility, and potential to grow.',
    icon_name: [
      <CustomIcon icon="Score" color="White" key={'kc_custom_icon_Score'} />,
    ],
    path: '/Contact',
  },
  {
    id: 3,
    name: 'Secured',
    name2: 'Reinvestment',
    discription:
      'We invest in companies developing real estate, especially in residential properties where the securities provided are safe and sound. We carefully select the companies we invest through our extensive research and analysis of the companies’ performance, credibility, and potential to grow.',
    icon_name: [
      <CustomIcon icon="Cycle" color="White" key={'kc_custom_icon_Cycle'} />,
    ],
    path: '/Home',
  },
];

export const VariationIcon = [
  <MdApartment size={48} color="#E7020F" key={'kc_custom_icon_apart'} />,
  <CustomIcon icon="Score" color="#E7020F" key={'kc_custom_icon_Score'} />,
  <CustomIcon icon="Cycle" color="#E7020F" key={'kc_custom_icon_Cycle'} />,
];
