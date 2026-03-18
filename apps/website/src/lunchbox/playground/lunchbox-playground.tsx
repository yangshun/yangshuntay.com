import { LunchboxGrid } from '../core/lunchbox-grid';
import { Props as LunchboxItemProps } from '../core/lunchbox-item';
import { ComponentType } from 'react';

type GridCellProps = Pick<LunchboxItemProps, 'rows' | 'cols'>;

type Props<TCellProps extends GridCellProps> = Readonly<{
  cell: ComponentType<TCellProps>;
  cellProps: Omit<TCellProps, keyof GridCellProps>;
}>;

const layouts = [
  { rows: 1, cols: 4 },
  { rows: 2, cols: 4 },
  { rows: 2, cols: 2 },
  { rows: 4, cols: 2 },
  { rows: 4, cols: 4 },
] as const satisfies ReadonlyArray<GridCellProps>;

export function LunchboxPlayground<TCellProps extends GridCellProps>({
  cell: Cell,
  cellProps,
}: Props<TCellProps>) {
  return (
    <LunchboxGrid>
      {layouts.map((layout) => (
        <Cell
          key={`${layout.rows}x${layout.cols}`}
          {...({ ...layout, ...cellProps } as TCellProps)}
        />
      ))}
    </LunchboxGrid>
  );
}
