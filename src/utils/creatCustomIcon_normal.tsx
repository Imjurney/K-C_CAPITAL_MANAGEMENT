import SvgPath from '@/data/icon/icon.json';

interface IconContexts {
  size?: string | number;
  color?: string;
  icon: 'Score' | 'Cycle';
}

function CustomIconNormal({
  icon,
  color = '#E7020F',
}: IconContexts): JSX.Element {
  const { path, viewboxX, viewboxY } = SvgPath[icon];
  return (
    <svg
      width={36}
      height={36}
      viewBox={`0 0 ${viewboxX} ${viewboxY}`}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d={path} fill={color} />
    </svg>
  );
}

export default CustomIconNormal;
