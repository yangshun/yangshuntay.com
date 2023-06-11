import {Props as CellProps} from '../core/LunchboxItem';

import LunchboxItem from '../core/LunchboxItem';
import clsx from 'clsx';

export type SelfProps = Readonly<{
  className?: string;
  title: string;
  subtitle?: string;
  icon: React.ReactElement;
  image?: React.ReactElement;
  action?: React.ReactElement;
}>;

export type Props = CellProps & SelfProps;

function LunchboxItemLink1x4({action, icon, subtitle, title}: SelfProps) {
  return (
    <div className="w-full flex h-full p-3 items-center justify-between gap-4">
      <div className={clsx('flex items-center gap-3')}>
        {icon}
        <div>
          <p className="text-sm">{title}</p>
          <p className="text-xs text-zinc-500 truncate">{subtitle}</p>
        </div>
      </div>
      {action && <div>{action}</div>}
    </div>
  );
}

function LunchboxItemLink2x2({action, icon, subtitle, title}: SelfProps) {
  return (
    <div className="w-full flex flex-col h-full p-6 gap-4 justify-between">
      <div className={clsx('grid gap-2')}>
        {icon}
        <div>
          <p className="text-sm">{title}</p>
          <p className="text-xs text-zinc-500 truncate">{subtitle}</p>
        </div>
      </div>
      {action && <div>{action}</div>}
    </div>
  );
}

function LunchboxItemLink4x2({
  action,
  icon,
  image,
  subtitle,
  title,
}: SelfProps) {
  return (
    <div className="w-full flex flex-col h-full p-6 gap-4 justify-between">
      <div className={clsx('grid gap-4')}>
        <div className={clsx('grid gap-2')}>
          {icon}
          <div className="flex flex-col">
            <p className="text-sm">{title}</p>
            <p className="text-xs text-zinc-500 truncate">{subtitle}</p>
          </div>
        </div>
        {image && <div>{image}</div>}
      </div>
      {action && <div>{action}</div>}
    </div>
  );
}

function LunchboxItemLink2x4({
  action,
  icon,
  image,
  subtitle,
  title,
}: SelfProps) {
  return (
    <div className="w-full flex h-full p-6 gap-4 justify-between items-stretch">
      <div className="flex flex-col justify-between">
        <div className={clsx('grid gap-2')}>
          {icon}
          <div className="flex flex-col">
            <p className="text-sm">{title}</p>
            <p className="text-xs text-zinc-500 truncate">{subtitle}</p>
          </div>
        </div>
        {action && <div>{action}</div>}
      </div>
      {image && <div className="flex w-1/2 h-full justify-end">{image}</div>}
    </div>
  );
}

function LunchboxItemLink4x4({
  action,
  icon,
  image,
  subtitle,
  title,
}: SelfProps) {
  return (
    <div className="w-full flex flex-col h-full p-6 items-stretch justify-between gap-4">
      <div className={clsx('flex justify-between gap-4')}>
        <div className={clsx('grid gap-2')}>
          {icon}
          <div className="flex flex-col">
            <p className="text-sm">{title}</p>
            <p className="text-xs text-zinc-500 truncate">{subtitle}</p>
          </div>
        </div>
        {action && <div>{action}</div>}
      </div>
      {image && <div className="flex h-1/2 w-full justify-end">{image}</div>}
    </div>
  );
}

export default function LunchboxItemLink(props: Props) {
  const {className, cols, rows, ...rest} = props;

  return (
    <LunchboxItem
      className={clsx('bg-white hover:shadow-lg transition', className)}
      {...props}>
      <div className={clsx('absolute w-full inset-0 flex h-full')}>
        {(() => {
          if (rows === 1 && cols === 4) {
            return <LunchboxItemLink1x4 {...rest} />;
          }

          if (rows === 2 && cols === 2) {
            return <LunchboxItemLink2x2 {...rest} />;
          }

          if (rows === 2 && cols === 4) {
            return <LunchboxItemLink2x4 {...rest} />;
          }

          if (rows === 4 && cols === 2) {
            return <LunchboxItemLink4x2 {...rest} />;
          }

          if (rows === 4 && cols === 4) {
            return <LunchboxItemLink4x4 {...rest} />;
          }
        })()}
      </div>
    </LunchboxItem>
  );
}
