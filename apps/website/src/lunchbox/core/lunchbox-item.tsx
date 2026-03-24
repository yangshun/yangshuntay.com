import type { ClassValue } from 'reclassify';

export type Props = Readonly<{
  className?: ClassValue;
  border?: boolean;
  children?: React.ReactNode;
}> &
  Ratio;

type Ratio =
  | Readonly<{ rows: 1; cols: 4 }>
  | Readonly<{ rows: 2; cols: 2 }>
  | Readonly<{ rows: 2; cols: 3 }>
  | Readonly<{ rows: 2; cols: 4 }>
  | Readonly<{ rows: 4; cols: 2 }>
  | Readonly<{ rows: 4; cols: 4 }>;

export function LunchboxItem({
  border = true,
  children,
  className,
  rows = 2,
  cols = 2,
}: Props) {
  return (
    <div
      className={[
        border && 'border border-zinc-200',
        'relative rounded-xl sm:rounded-2xl md:rounded-3xl overflow-clip',
        {
          'col-span-2': cols === 2,
          'col-span-4': cols === 4,
          'row-span-1': rows === 1,
          'row-span-2': rows === 2,
          'row-span-4': rows === 4,
          'aspect-square': rows === cols,
        },
        className,
      ]}
    >
      {children}
    </div>
  );
}
