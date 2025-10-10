import Link from 'next/link';

type Props = Readonly<{
  rightContents: React.ReactNode;
}>;

export default function Header({rightContents}: Props) {
  return (
    <div className="flex justify-between pb-8 items-end">
      <Link className="font-medium tracking-tight text-2xl" href="/">
        Yangshun Tay
      </Link>
      {rightContents}
    </div>
  );
}
