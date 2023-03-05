import clsx from 'clsx';
import { ReactNode, useEffect, useState } from 'react';
import FooterStyle from '@/components/Footer/Footer.module.css';
import axios, { AxiosResponse } from 'axios';

// import { ReactComponent as FooterLogo } from '@/components/Footer/FooterLogo.svg';
interface FooterWrapper {
  children: ReactNode;
}
interface FooterContentsProps {
  width?: number;
}

const ResPonsiveLayout = [
  'mobile:px-16 mobile:pt-10',
  'laptop:px-10 laptop:pt-14',
  'desktop:px-10 desktop:pt-14',
];

const ResPonsiveContents = [
  'mobile:flex mobile:flex-col mobile:gap-4 mobile:my-4',
  'laptop:flex laptop:flex-col-reverse laptop:gap-4 laptop:mt-8',
  'desktop:flex desktop:flex-col-reverse desktop:gap-4 desktop:mt-8',
];

const ResPonsiveCopyright = [
  'mobile:ml-[63px] mobile:pb-10',
  'laptop:flex laptop:justify-end laptop:px-10 laptop:pb-12',
  'desktop:flex desktop:justify-end desktop:px-10 desktop:pb-12',
];

function FooterWrapper({ children }: FooterWrapper) {
  return (
    <footer id="footer" className={clsx('bg-kc-contents_dark')}>
      {children}
    </footer>
  );
}

function test(datas: any[]) {
  return (
    <ul className={clsx(ResPonsiveContents)}>
      {datas?.map(
        (item: { subject: string; contents: string; className: string }) => {
          return (
            <li key={'footer'} className={item.className}>
              <span className={'text-kc-footer_lightgray'}>
                {item.subject}.&nbsp;&nbsp;
              </span>
              <span className={'text-kc-footer_gray'}>{item.contents}</span>
            </li>
          );
        }
      )}
    </ul>
  );
}

function FooterContents({ width = 240 }: FooterContentsProps) {
  const [datas, setData] = useState<any[]>();
  useEffect(() => {
    const getfooterInfromation = () => {
      axios.get('src/data/footer.json').then((res) => setData(res.data));
    };
    getfooterInfromation();
  }, []);
  return (
    <FooterWrapper>
      <address className={clsx(FooterStyle.default, ResPonsiveLayout)}>
        <img
          width={width}
          src="src/assets/FooterLogo.svg"
          alt="K&amp;C Capital Management 로고 입니다"
        />
        {datas && test(datas)}
      </address>
      <p className={clsx('text-kc-footer_gray text-sm', ResPonsiveCopyright)}>
        &copy;2022 K&amp;C Capital Management.
      </p>
    </FooterWrapper>
  );
}

export function Footer() {
  return <FooterContents />;
}