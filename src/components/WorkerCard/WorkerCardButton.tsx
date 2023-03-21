import clsx from 'clsx';
import { ReactNode } from 'react';
import { BsChevronLeft, BsChevronRight } from 'react-icons/bs';
clsx;

interface WorkerCardButtonProps {
  children?: ReactNode;
  className?: string;
}
function WorkerCardButton({ children, className }: WorkerCardButtonProps) {
  return (
    <button
      className={clsx(
        'bg-black text-white px-2.5 py-2.5 rounded-[0.25rem]',
        className
      )}
    >
      {children}
    </button>
  );
}

export function LeftWorkerCardButton() {
  return (
    <WorkerCardButton className="ml-10">
      <BsChevronLeft size={'20'} strokeWidth={0.5} />
    </WorkerCardButton>
  );
}

export function RightWorkerCardButton() {
  return (
    <WorkerCardButton className="mr-10">
      <BsChevronRight size={'20'} strokeWidth={0.5} />
    </WorkerCardButton>
  );
}
