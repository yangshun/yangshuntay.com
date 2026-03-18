import LunchboxGrid from '../core/LunchboxGrid';
import {Props as LunchboxItemProps} from '../core/LunchboxItem';
import {ComponentType} from 'react';

type GridCellProps = Pick<LunchboxItemProps, 'rows' | 'cols'>;

type Props<TCellProps extends GridCellProps> = Readonly<{
  cell: ComponentType<TCellProps>;
  cellProps: Omit<TCellProps, keyof GridCellProps>;
}>;

const layouts = [
  {rows: 1, cols: 4},
  {rows: 2, cols: 4},
  {rows: 2, cols: 2},
  {rows: 4, cols: 2},
  {rows: 4, cols: 4},
] as const satisfies ReadonlyArray<GridCellProps>;

export default function LunchboxPlayground<TCellProps extends GridCellProps>({
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
