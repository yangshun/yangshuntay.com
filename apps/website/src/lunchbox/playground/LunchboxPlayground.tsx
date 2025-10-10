import LunchboxGrid from '../core/LunchboxGrid';
import {ComponentType} from 'react';

type Props = Readonly<{
  cell: ComponentType<any>;
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
