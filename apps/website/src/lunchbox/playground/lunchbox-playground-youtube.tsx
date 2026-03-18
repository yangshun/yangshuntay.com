import { LunchboxPlayground } from './lunchbox-playground';
import { LunchboxItemLinkYouTube } from '../prebuilt/lunchbox-item-link-youtube';

export function LunchboxPlaygroundYouTube() {
  const image = (
    <img
      alt="YouTube"
      className="object-cover rounded-lg w-full"
      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxG9NaQoN8jsLEC0ynzKmqQnyW3Vh-IXyykQ&usqp=CAU"
    />
  );

  return (
    <LunchboxPlayground
      cell={LunchboxItemLinkYouTube}
      cellProps={{
        username: 'MrBeast',
        image,
      }}
    />
  );
}
