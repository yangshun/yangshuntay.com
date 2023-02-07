type Props = Readonly<{
  unixTimestamp: number;
}>;

export default function Timestamp({unixTimestamp}: Props) {
  const date = new Date(unixTimestamp);
  const intlFormat = new Intl.DateTimeFormat('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
  return <span>{intlFormat.format(date)}</span>;
}
