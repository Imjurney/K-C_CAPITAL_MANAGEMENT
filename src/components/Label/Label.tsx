interface LabelProps {
  jobTitle?: string;
}

export function Label({ jobTitle }: LabelProps) {
  return <figcaption className="p-[0.625rem] bg-kc-red">{jobTitle}</figcaption>;
}
