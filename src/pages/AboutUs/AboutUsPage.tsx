import { Career } from '@/components/Career/Career';
import { Footer } from '@/components/Footer/Footer';
import { Header } from '@/components/Header/Header';
import { Label } from '@/components/Label/Label';
import { TitleContent } from '@/components/TitleContent/TitleContent';
import AboutUsStyle from '@/pages/AboutUs/AboutUsPage.module.css';
import clsx from 'clsx';
import { useState } from 'react';
import { FiMoreHorizontal as More, FiChevronUp as Fold } from 'react-icons/fi';

export default function AboutUsPage() {
  return (
    <>
      <Header description="this is aboutus Page" />
      <section className={AboutUsStyle.section__top}>
        <TitleContent content="ABOUT US" />
        <figure className={clsx('relative', AboutUsStyle.figure)}>
          <img
            className="object-center w-full"
            src="/public/assets/img/aboutus/top_bg.png"
            alt=""
          />
          <figcaption className={AboutUsStyle.figcaption}>
            <p> K&C CAPITAL MANAGEMENT Helps</p>
            <p>you make a successful New Zealand real</p>
            <p>estate investment.</p>
          </figcaption>
        </figure>
        <Article />
      </section>
      <section className="bg-teal-500 h-screen pt-14">
        <TitleContent content="THE DIRECTORS OF COMPANY" />
        <div className="bg-gradient-to-b from-gray-50 to-gray-300 w-full h-[24.4375rem]"></div>
        <Label
          anotherJobTitle="Founder"
          id="ceo_title"
          jobTitle="CEO"
          labelTextWeight="bold"
          name="Gun Kim"
          nameTextWeight="bold"
        />
        <hr />
        <Career
          careerfrom1={2010}
          careerto1={2014}
          detail1={'Quantity Surveyor of Design Plus Build Ltd'}
          careerfrom2={2015}
          careerto2={'Present'}
          detail2={'Director of GNS Interior Systems Ltd'}
        />
        The principal of the Company, Gun Kim has over 20 years experience in
        Construction industry. Prior to establishing K&C Capital, he worked at
        New Zealand local building company for 5 years and currently running his
        own construction company for 8 years. Gun Kim holds a Bachelor of
        Architecture design and engineering from Myongji University in South
        Korea and Diploma of Quantity Surveying from Christchuch Polytechnic
        Institute of Technology. He is passionate about cost and risk management
        in construction projects.
        <Label
          anotherJobTitle="Co-Founder"
          id="cfo_titile"
          jobTitle="CFO"
          labelTextWeight="normal"
          name="Steven W. J Choi"
          nameTextWeight="normal"
        />
        <hr />
        <Career
          careerfrom1={2010}
          careerto1={2014}
          detail1={'Quantity Surveyor of Design Plus Build Ltd'}
          careerfrom2={2015}
          careerto2={'Present'}
          detail2={'Director of GNS Interior Systems Ltd'}
        />
        <div className="bg-gradient-to-br from-gray-50 to-gray-300 w-full h-[24.4375rem]"></div>
      </section>
      <section className="h-screen"></section>
      <Footer />
    </>
  );
}

function Article() {
  const [toggle, setToggle] = useState(true);
  return (
    <section
      className={clsx('pb-[3.75rem] bg-white', toggle ? ' h-500px' : 'h-500px')}
    >
      <article
        className={clsx(
          'fix text-sm w-[90%] translate-x-[5.5%] px-3 pt-5  bg-white shadow-contents_shadow',
          toggle ? 'translate-y-[18.2%]' : 'translate-y-[10%]'
        )}
      >
        <p className={toggle ? 'mobile:pb-5 ' : ''}>
          <strong className="text-xl">K&C Capital</strong> is founded to help
          overseas investors to invest in the real estate market in New Zealand,
          especially in construction funding, and we offer investors the access
          to a professionally managed portfolio with diversified exposure to the
          New Zealand property market. We focus on growing our shareholders’
          capital through positive portfolio performance and offer regular
          dividends. we aim for the safe and sound returns to our investors with
          guaranteed fixed returns.
        </p>
        <p className={toggle ? 'mobile:hidden' : 'mobile:pb-9'}>
          Our investment strategy is carefully planned to focus risk management
          as well as the assurance of good returns for our investors. Majority
          of our clients are investing under the investors residency visa
          category receiving guaranteed returns in quarterly or half basis
          payments and continuing to manage their investment portfolio with K&C
          Capital even after residency visa gets granted. Our company is a
          registered financial service provider which is governed by Financial
          Markets Authority New Zealand.
        </p>

        <div className="flex justify-center pb-2">
          <button
            role="tab"
            type="button"
            onClick={() => setToggle((prev) => !prev)}
          >
            {toggle ? (
              <More aria-expanded="false" color="#848484" size={24} />
            ) : (
              <Fold aria-expanded="true" size={25} color="#E7020F" />
            )}
          </button>
        </div>
      </article>
    </section>
  );
}
