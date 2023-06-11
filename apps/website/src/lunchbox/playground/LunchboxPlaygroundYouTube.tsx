import LunchboxPlayground from './LunchboxPlayground';
import LunchboxItemLinkYouTube from '../prebuilt/LunchboxItemLinkYouTube';

export default function LunchboxPlaygroundYouTube() {
  const image = (
    <img
      alt="YouTube image"
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
