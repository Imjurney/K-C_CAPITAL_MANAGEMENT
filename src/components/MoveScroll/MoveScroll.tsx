import { useInnerHeightState } from '@/utils/useInnerHeightState';
import { useInnerWidthState } from '@/utils/useInnerWidthState';

export default function MoveScroll() {
  const [window] = useInnerWidthState();
  const [windowH] = useInnerHeightState();
  return (
    <>
      {window.width < 800 && windowH.height > 600 && (
        <div
          aria-label="go to top buttom"
          onClick={() => {
            document.body.scrollIntoView({
              behavior: 'smooth',
              block: 'start',
            });
          }}
          className="fixed bg-kc-red text-white px-3 py-1 text-sm bottom-16 rounded-3xl right-2 cursor-pointer"
        >
          go to top
        </div>
      )}
    </>
  );
}
