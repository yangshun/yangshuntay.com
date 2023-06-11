import LunchboxPlayground from './LunchboxPlayground';
import LunchboxItemLinkTwitter from '../prebuilt/LunchboxItemLinkTwitter';

export default function LunchboxPlaygroundTwitter() {
  const image = (
    <img
      alt="Twitter image"
      className="object-cover rounded-lg w-full"
      src="https://images.unsplash.com/photo-1611605698335-8b1569810432?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80"
    />
  );

  return (
    <LunchboxPlayground
      cell={LunchboxItemLinkTwitter}
      cellProps={{
        username: 'yangshun',
        image,
      }}
    />
  );
}
