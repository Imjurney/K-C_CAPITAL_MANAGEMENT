import { MdApartment } from 'react-icons/md';

import CustomIcon from '@/utils/creactCustomIcon';
import { CalcuIcon, PassPort, Report, Grow } from './Icons';
import CustomIconNormal from '@/utils/creatCustomIcon_normal';

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

interface Props {
  id: number;
  name: string;
  name2: string | null;
  icon_name: { icon: JSX.Element };
}
export const INVESTOR_ICON: Props[] = [
  {
    id: 1,
    name: 'Provision of accounting',
    name2: 'and tax services',
    icon_name: { icon: <CalcuIcon key={'kc_custom_icon_Calcu'} /> },
  },
  {
    id: 2,
    name: 'Confirmation of successful visa',
    name2: null,
    icon_name: { icon: <PassPort key={'kc_custom_icon_PassPort'} /> },
  },
  {
    id: 3,
    name: 'Provide investment reports',
    name2: null,
    icon_name: { icon: <Report key={'kc_custom_icon_Report'} /> },
  },
  {
    id: 4,
    name: 'Reinvestment Assessment ',
    name2: 'and Support',
    icon_name: { icon: <Grow key={'kc_custom_icon_Grow'} /> },
  },
];
export const VariationIcon = [
  <MdApartment size={48} color="#E7020F" key={'kc_custom_icon_apart'} />,
  <CustomIcon icon="Score" color="#E7020F" key={'kc_custom_icon_Score'} />,
  <CustomIcon icon="Cycle" color="#E7020F" key={'kc_custom_icon_Cycle'} />,
];

export const InvestmentIcons = [
  <MdApartment size={48} color="#E7020F" key={'kc_custom_icon_apart'} />,
  <CustomIconNormal
    icon="Cycle"
    color="#E7020F"
    key={'kc__investment_custom_icon_Cycle'}
  />,
  <CustomIconNormal
    icon="Score"
    color="#E7020F"
    key={'kc_investment_custom_icon_Score'}
  />,
];
