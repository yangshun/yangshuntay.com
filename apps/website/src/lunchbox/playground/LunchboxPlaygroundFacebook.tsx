import LunchboxPlayground from './LunchboxPlayground';
import LunchboxItemLinkFacebook from '../prebuilt/LunchboxItemLinkFacebook';

export default function LunchboxPlaygroundFacebook() {
  const image = (
    <img
      alt="Facebook image"
      className="object-cover rounded-lg w-full"
      src="https://images.unsplash.com/photo-1611162618071-b39a2ec055fb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80"
    />
  );

  return (
    <LunchboxPlayground
      cell={LunchboxItemLinkFacebook}
      cellProps={{
        username: 'yangshun',
        image,
      }}
    />
  );
}
