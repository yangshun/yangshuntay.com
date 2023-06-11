import LunchboxItemLinkGitHub from '../prebuilt/LunchboxItemLinkGitHub';
import LunchboxPlayground from './LunchboxPlayground';

export default function LunchboxPlaygroundGitHub() {
  const image = (
    <img
      alt="GitHub image"
      className="object-cover rounded-lg w-full"
      src="https://images.unsplash.com/photo-1647166545674-ce28ce93bdca?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80"
    />
  );

  return (
    <LunchboxPlayground
      cell={LunchboxItemLinkGitHub}
      cellProps={{
        username: 'yangshun',
        image,
      }}
    />
  );
}
