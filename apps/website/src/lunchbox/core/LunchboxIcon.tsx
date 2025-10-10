import clsx from 'clsx';
import {IconType} from 'react-icons';

type IconBorderRadius = 'default' | 'lg' | 'full';

const borderRadiusClass: Record<IconBorderRadius, string> = {
  default: '',
  lg: 'rounded-lg',
  full: 'rounded-full',
};

type Props = Readonly<{
  borderRadius?: IconBorderRadius;
  className?: string;
  icon: IconType;
}>;

export default function LunchboxIcon({
  borderRadius = 'full',
  className,
  icon: Icon,
}: Props) {
  return (
    <span
      className={clsx(
        'items-center justify-center w-10 h-10 inline-flex shrink-0',
        borderRadiusClass[borderRadius],
        className,
      )}>
      <Icon className="size-5" />
    </span>
  );
}
