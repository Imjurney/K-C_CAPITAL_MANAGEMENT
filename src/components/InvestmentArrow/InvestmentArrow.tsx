import style from '@/components/InvestmentArrow/InvestmentArrow.module.css';

const types = {
  Normal: style.arrow__body,
  Bifurcation: style.arrow__body__bifurcation,
};

interface InvestmentArrowProps {
  type?: 'Normal' | 'Bifurcation';
}
export default function InvestmentArrow({
  type = 'Bifurcation',
}: InvestmentArrowProps) {
  return <div className={types[type]} aria-label="animation arrow head"></div>;
}
