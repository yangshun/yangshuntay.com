import LunchboxPlayground from './LunchboxPlayground';
import LunchboxItemLinkInstagram from '../prebuilt/LunchboxItemLinkInstagram';

export default function LunchboxPlaygroundInstagram() {
  const image = (
    <img
      alt="Instagram image"
      className="object-cover rounded-lg w-full"
      src="https://images.unsplash.com/photo-1611162616305-c69b3fa7fbe0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80"
    />
  );

  return (
    <LunchboxPlayground
      cell={LunchboxItemLinkInstagram}
      cellProps={{
        username: 'yangshun',
        image,
      }}
    />
  );
}
