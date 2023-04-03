import aboutusdata from '@/data/about_us.json';
import { useQuery } from '@tanstack/react-query';
import { Label } from '@/components/Label/Label';
import { Career } from '@/components/Career/Career';
import clsx from 'clsx';
import sectionStyle from '@/components/CareerSection/CareerSection.module.css';
import { useInnerWidthState } from '@/utils/useInnerWidthState';

interface emtyBocProps {
  className?: string;
}
function EmtyBox({ className }: emtyBocProps) {
  return <div className={clsx(sectionStyle.img, className)}></div>;
}

export function CareerSection() {
  const [width] = useInnerWidthState();
  const { data } = useQuery(['Career'], () => Promise.resolve(aboutusdata), {
    staleTime: 10000,
    refetchOnWindowFocus: false,
  });
  return (
    <div role={'group'} aria-label="group" className={sectionStyle.wrapper}>
      {data?.map((item) => {
        return (
          <div
            key={1}
            className={clsx(sectionStyle.wrapper__article, [
              item.role.css === 'bold' ? '' : 'flex-row-reverse',
              width.width > 1023 && item.role.css === 'bold' ? 'font-bold' : '',
            ])}
          >
            <EmtyBox
              className={
                item.role.css === 'bold'
                  ? 'bg-gradient-to-tl from-white to-gray-300'
                  : 'bg-gradient-to-br from-white to-gray-200'
              }
            />
            <article className={sectionStyle.article}>
              <div>
                <Label
                  id={`${item.name}_title`}
                  jobTitle={item.role[1]}
                  anotherJobTitle={item.role[2]}
                  labelTextWeight={item.role.css === 'bold' ? 'bold' : 'normal'}
                  name={item.name}
                  nameTextWeight={item.role.css === 'bold' ? 'bold' : 'normal'}
                />
              </div>
              <hr />

              {item.role.description.split('/n').map((item, index) => {
                return (
                  <p key={`description_${index}`} className="mobile:px-5 px-10">
                    {item}
                  </p>
                );
              })}
              <Career
                careerfrom1={item.careears[0].career_from}
                careerto1={item.careears[0].career_to}
                detail1={item.careears[0].detail}
                careerfrom2={item.careears[1].career_from}
                careerto2={item.careears[1].career_to}
                detail2={item.careears[1].detail}
              />
            </article>
          </div>
        );
      })}
    </div>
  );
}
