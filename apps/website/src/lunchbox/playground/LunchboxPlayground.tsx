import LunchboxGrid from '../core/LunchboxGrid';

type Props = Readonly<{
  cell: Function;
  cellProps: Record<string, unknown>;
}>;

export default function LunchboxPlaygroundInstagram({
  cell: Cell,
  cellProps,
}: Props) {
  return (
    <LunchboxGrid>
      <Cell rows={1} cols={4} {...cellProps} />
      <Cell rows={2} cols={4} {...cellProps} />
      <Cell rows={2} cols={2} {...cellProps} />
      <Cell rows={4} cols={2} {...cellProps} />
      <Cell rows={4} cols={4} {...cellProps} />
    </LunchboxGrid>
  );
}
