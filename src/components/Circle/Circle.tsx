import { SlideCard } from '@/components/SlideCard/SlideCard';
import LogoImage from '@/assets/Logo_white.svg';
import { VariationIcon } from '@/data/icon/icon';

export function Circle() {
  return (
    <>
      <div className="fix desktop:-translate-x-[21.5625rem] laptop:-translate-x-[26.375rem]  py-7 mobile:hidden">
        <div className="bg-white w-[914px] h-[914px] rounded-full flex justify-center items-center">
          <div className="bg-white w-[28.625rem] h-[28.625rem] rounded-full -left-[117px] outline outline-kc-red outline-[5.75rem] flex items-center justify-center">
            <img
              src={LogoImage}
              width={200}
              className="laptop:ml-32"
              alt="K&C Capital Management Logo"
            />
          </div>
        </div>
      </div>
      <SlideCard
        name="investment"
        name2="company"
        icon={VariationIcon[0]}
        className="fix desktop:-translate-y-[560%] desktop:translate-x-[80%] laptop:-translate-y-[560%] laptop:translate-x-[80%]"
      />
      <SlideCard
        name="investment"
        name2="Strategy"
        icon={VariationIcon[1]}
        className="fix desktop:-translate-y-[360%] desktop:translate-x-[115%] laptop:-translate-y-[360%] laptop:translate-x-[66%]"
      />
      <SlideCard
        name="Secured"
        name2="Reinvestment"
        icon={VariationIcon[2]}
        className="fix desktop:-translate-y-[155%] desktop:-translate-x-[110%] laptop:-translate-y-[170%] laptop:-translate-x-[110%] "
      />
    </>
  );
}
