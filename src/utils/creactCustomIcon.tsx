import SvgPath from '@/data/icon/icon.json';
import { useInnerWidthState } from '@/utils/useInnerWidthState';

interface IconContexts {
  size?: string | number;
  color?: string;
  icon: 'Score' | 'Cycle';
}

function CustomIcon({ icon, color = '#E7020F' }: IconContexts): JSX.Element {
  const [width] = useInnerWidthState();
  const { path, viewboxX, viewboxY } = SvgPath[icon];
  return (
    <svg
      width={width.width >= 970 ? 48 : 24}
      height={width.width >= 970 ? 48 : 24}
      viewBox={`0 0 ${viewboxX} ${viewboxY}`}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d={path} fill={color} />
    </svg>
  );
}

export default CustomIcon;
