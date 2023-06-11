import clsx from 'clsx';
import styles from './styles.module.css';

type Props = Readonly<{
  children: React.ReactNode;
}>;

export default function LunchboxGrid({children}: Props) {
  return (
    <div
      className={clsx(
        'grid grid-cols-4 sm:grid-cols-8 auto-rows-fr',
        'gap-6 sm:gap-8 md:gap-10',
        styles.grid,
      )}>
      {/* Hack to let the grid know how tall each row should be */}
      <div className="w-0 pb-[100%] col-span-1 row-span-1 col-start-1 row-start-1" />
      {children}
    </div>
  );
}
