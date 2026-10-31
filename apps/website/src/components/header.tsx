import { Anchor } from './anchor';

type Props = Readonly<{
  rightContents: React.ReactNode;
}>;

export function Header({ rightContents }: Props) {
  return (
    <div className="flex justify-between pb-8 items-end">
      <Anchor className="font-medium tracking-tight text-2xl" href="/">
        Yangshun Tay
      </Anchor>
      {rightContents}
    </div>
  );
}
