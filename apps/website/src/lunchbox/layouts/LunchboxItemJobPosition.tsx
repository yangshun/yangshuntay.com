import {Props as CellProps} from '../core/LunchboxItem';

import LunchboxItem from '../core/LunchboxItem';
import clsx from 'clsx';

export type SelfProps = Readonly<{
  className?: string;
  company: string;
  description?: React.ReactNode;
  jobTitle?: string;
  icon: React.ReactElement;
  media?: React.ReactElement;
  start?: number | string;
  end?: number | string;
}>;

export type Props = CellProps & SelfProps;

function TitleLine({
  jobTitle,
  company,
}: Pick<SelfProps, 'jobTitle' | 'company'>) {
  return (
    <p className="text-sm flex flex-wrap gap-x-1.5 whitespace-nowrap">
      <span>{jobTitle}</span>
      {jobTitle && company && <span>&middot;</span>}
      <span>{company}</span>
    </p>
  );
}

function SubtitleLine({start, end}: Pick<SelfProps, 'start' | 'end'>) {
  return (
    <p className="text-xs flex flex-wrap text-zinc-500 truncate gap-x-1">
      <span>{start}</span>
      {start && end && <span>—</span>}
      <span>{end}</span>
    </p>
  );
}

function JobDescription({description}: Pick<SelfProps, 'description'>) {
  return <div className="text-gray-600 text-xs">{description}</div>;
}

function LunchboxItemJobPosition1x4({
  icon,
  jobTitle,
  company,
  start,
  end,
}: SelfProps) {
  return (
    <div className="w-full flex h-full p-3 items-center justify-between">
      <div className={clsx('flex items-center gap-3')}>
        {icon}
        <div className="flex flex-col">
          <TitleLine jobTitle={jobTitle} company={company} />
          <SubtitleLine start={start} end={end} />
        </div>
      </div>
    </div>
  );
}

function LunchboxItemJobPosition2x2({
  icon,
  jobTitle,
  company,
  start,
  end,
}: SelfProps) {
  return (
    <div className="w-full flex flex-col h-full p-6 gap-2 justify-between">
      <div className={clsx('grid gap-2')}>
        {icon}
        <div className="flex flex-col">
          <TitleLine jobTitle={jobTitle} company={company} />
          <SubtitleLine start={start} end={end} />
        </div>
      </div>
    </div>
  );
}

function LunchboxItemJobPosition4x2({
  icon,
  media,
  jobTitle,
  company,
  start,
  end,
  description,
}: SelfProps) {
  return (
    <div className="w-full flex flex-col h-full p-6 gap-2 justify-between">
      <div className={clsx('grid gap-4')}>
        <div className={clsx('grid gap-2')}>
          {icon}
          <div className="flex flex-col">
            <TitleLine jobTitle={jobTitle} company={company} />
            <SubtitleLine start={start} end={end} />
          </div>
        </div>
        {description && <JobDescription description={description} />}
      </div>
      {media && <div className="">{media}</div>}
    </div>
  );
}

function LunchboxItemJobPosition2x4({
  icon,
  media,
  jobTitle,
  company,
  start,
  end,
  description,
}: SelfProps) {
  return (
    <div className="w-full flex flex-col h-full p-6 gap-2 justify-between">
      <div className="grid gap-2">
        <div className={clsx('flex gap-2 items-center')}>
          {icon}
          <div className="flex flex-col">
            <TitleLine jobTitle={jobTitle} company={company} />
            <SubtitleLine start={start} end={end} />
          </div>
        </div>
        {description && (
          <div className="pl-12">
            <JobDescription description={description} />
          </div>
        )}
      </div>
      {/* Only show if no description */}
      {!description && media && (
        <div className="flex h-1/2 w-full justify-end">{media}</div>
      )}
    </div>
  );
}

function LunchboxItemJobPosition4x4({
  icon,
  media,
  jobTitle,
  company,
  start,
  end,
  description,
}: SelfProps) {
  return (
    <div className="w-full flex flex-col h-full p-6 gap-2 justify-between">
      <div className="grid gap-2">
        <div className={clsx('flex gap-2 items-center')}>
          {icon}
          <div className="flex flex-col">
            <TitleLine jobTitle={jobTitle} company={company} />
            <SubtitleLine start={start} end={end} />
          </div>
        </div>
        {description && (
          <div className="pl-12">
            <JobDescription description={description} />
          </div>
        )}
      </div>
      {media && <div className="flex h-1/2 w-full justify-end">{media}</div>}
    </div>
  );
}

export default function LunchboxItemJobPosition(props: Props) {
  const {className, cols, rows, ...rest} = props;

  return (
    <LunchboxItem
      className={clsx('bg-white hover:shadow-lg transition', className)}
      {...props}>
      <div className={clsx('absolute w-full inset-0 flex h-full')}>
        {(() => {
          if (rows === 1 && cols === 4) {
            return <LunchboxItemJobPosition1x4 {...rest} />;
          }

          if (rows === 2 && cols === 2) {
            return <LunchboxItemJobPosition2x2 {...rest} />;
          }

          if (rows === 2 && cols === 4) {
            return <LunchboxItemJobPosition2x4 {...rest} />;
          }

          if (rows === 4 && cols === 2) {
            return <LunchboxItemJobPosition4x2 {...rest} />;
          }

          if (rows === 4 && cols === 4) {
            return <LunchboxItemJobPosition4x4 {...rest} />;
          }
        })()}
      </div>
    </LunchboxItem>
  );
}
