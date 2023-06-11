import {Props as CellProps} from '../core/LunchboxItem';

import LunchboxItem from '../core/LunchboxItem';
import clsx from 'clsx';

type Props = CellProps & {
  align?: 'start' | 'center' | 'end';
  justify?: 'start' | 'center' | 'end';
  htmlString: string;
};

export default function LunchboxItemText({
  align = 'start',
  htmlString,
  justify = 'start',
  ...props
}: Props) {
  return (
    <LunchboxItem {...props}>
      <div className="absolute left-4 right-4 top-4 bottom-4">
        <div
          className={clsx(
            'text-ellipsis h-full overflow-hidden',
            'flex',
            align === 'start' && 'items-start',
            align === 'center' && 'items-center',
            align === 'end' && 'items-end',
            justify === 'start' && 'justify-start',
            justify === 'center' && 'justify-center',
            justify === 'end' && 'justify-end',
            'text-ellipsis',
          )}
          dangerouslySetInnerHTML={{
            __html: htmlString,
          }}></div>
      </div>
    </LunchboxItem>
  );
}
