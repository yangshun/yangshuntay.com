import LunchboxPlayground from './LunchboxPlayground';
import LunchboxItemImage from '../layouts/LunchboxItemImage';

export default function LunchboxPlaygroundImage() {
  return (
    <LunchboxPlayground
      cell={LunchboxItemImage}
      cellProps={{
        src: 'https://images.unsplash.com/photo-1579546929662-711aa81148cf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80',
        alt: 'Image',
        caption: 'Artificial Nature from Codioful',
      }}
    />
  );
}
