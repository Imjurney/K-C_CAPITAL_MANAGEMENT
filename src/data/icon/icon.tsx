import { IconBaseProps } from 'react-icons';
import { MdApartment } from 'react-icons/md';

interface IconsProps {
  size?: number;
  color?: string;
}
function Score({ size, color }: IconsProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 36 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M0 32V30.3H4.2V29H2.1V27.3H4.2V26H0V24.3H5.9V32H0ZM10.45 29.55V26.55H36V29.55H10.45ZM0 19.85V18.25L3.75 13.85H0V12.15H5.9V13.75L2.1 18.15H5.9V19.85H0ZM10.45 17.4V14.4H36V17.4H10.45ZM2.1 7.8V1.7H0V0H3.8V7.8H2.1ZM10.45 5.25V2.25H36V5.25H10.45Z"
        fill={color}
      />
    </svg>
  );
}

export const CUSTOM_ICONS = [
  {
    id: 1,
    name: 'apart',
    icon_name: [<MdApartment key={'kc_custom_icon_apart'} />],
  },
  {
    id: 2,
    name: 'Score',
    icon_name: [<Score key={'kc_custom_icon_Score'} />],
  },
  {
    id: 3,
    name: 'apart',
    icon_name: [<MdApartment key={'kc_custom_icon'} />],
  },
];
