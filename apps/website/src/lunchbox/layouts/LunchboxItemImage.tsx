import {Props as CellProps} from '../core/LunchboxItem';

import LunchboxItem from '../core/LunchboxItem';
import clsx from 'clsx';

type Props = CellProps & {
  alt?: string;
  caption?: string;
  src: string;
  imageClassName?: string;
};

export default function LunchboxItemImage({
  alt,
  caption,
  imageClassName,
  src,
  ...props
}: Props) {
  return (
    <LunchboxItem border={false} {...props}>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        className={clsx(
          'absolute inset-0 w-full h-full object-cover',
          imageClassName,
        )}
        alt={alt}
        src={src}
      />
      {caption && (
        <div className="flex absolute inset-x-2 bottom-2 max-w-full">
          <p className="border bg-white text-zinc-700 rounded-full py-1 px-3 text-sm truncate inline-block max-w-full">
            {caption}
          </p>
        </div>
      )}
    </LunchboxItem>
  );
}
