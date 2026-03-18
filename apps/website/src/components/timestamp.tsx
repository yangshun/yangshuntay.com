type Props = Readonly<{
  date: string;
}>;

export function Timestamp({ date: dateProp }: Props) {
  const date = new Date(dateProp);
  const intlFormat = new Intl.DateTimeFormat('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  });

  return <span>{intlFormat.format(date)}</span>;
}
