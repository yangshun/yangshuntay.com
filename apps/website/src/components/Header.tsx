import Link from 'next/link';

type Props = Readonly<{
  rightContents: React.ReactNode;
}>;

export default function Header({rightContents}: Props) {
  return (
    <div className="flex justify-between pb-8 items-end">
      <p className="pb-2 border-b-4 border-zinc-700">
        <Link className="font-bold tracking-tight text-2xl" href="/">
          Yangshun Tay
        </Link>
      </p>
      {rightContents}
    </div>
  );
}
