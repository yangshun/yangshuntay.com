import { Props as CellProps } from '../core/lunchbox-item';

import { LunchboxItem } from '../core/lunchbox-item';

type Props = CellProps & {
  align?: 'start' | 'center' | 'end';
  justify?: 'start' | 'center' | 'end';
  htmlString: string;
};

export function LunchboxItemText({
  align = 'start',
  htmlString,
  justify = 'start',
  ...props
}: Props) {
  return (
    <LunchboxItem {...props}>
      <div className="absolute left-4 right-4 top-4 bottom-4">
        <div
          className={[
            'flex h-full overflow-hidden text-ellipsis',
            {
              'items-start': align === 'start',
              'items-center': align === 'center',
              'items-end': align === 'end',
              'justify-start': justify === 'start',
              'justify-center': justify === 'center',
              'justify-end': justify === 'end',
            },
          ]}
          dangerouslySetInnerHTML={{
            __html: htmlString,
          }}
        ></div>
      </div>
    </LunchboxItem>
  );
}
