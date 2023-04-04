import style from '@/components/InvestmentArrow/InvestmentArrow.module.css';
import clsx from 'clsx';

const types = {
  Normal: style.arrow__body,
  Bifurcation: style.arrow__body__bifurcation,
};

interface InvestmentArrowProps {
  type?: 'Normal' | 'Bifurcation';
  className?: string;
}
export default function InvestmentArrow({
  type = 'Bifurcation',
  className,
}: InvestmentArrowProps) {
  return (
    <div className={clsx(style.arrow__wrapper, className)}>
      <div className={types[type]} aria-label="animation arrow head"></div>
    </div>
  );
}
