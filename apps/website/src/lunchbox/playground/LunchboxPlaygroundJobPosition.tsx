import LunchboxPlayground from './LunchboxPlayground';
import LunchboxItemJobPosition from '../layouts/LunchboxItemJobPosition';
import {BsApple} from 'react-icons/bs';
import LunchboxIcon from '../core/LunchboxIcon';

export default function LunchboxPlaygroundJobPosition() {
  return (
    <LunchboxPlayground
      cell={LunchboxItemJobPosition}
      cellProps={{
        icon: <LunchboxIcon className="text-black shadow" icon={BsApple} />,
        company: 'Apple',
        jobTitle: 'Software Engineer',
        start: 2020,
        end: 'Present',
        description: 'Lead architect for Apple vision pro',
        media: (
          <img
            alt="Apple campus"
            className="object-cover rounded-lg w-full"
            src="https://images.unsplash.com/photo-1524046960467-39d55b270f83?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2832&q=80"
          />
        ),
      }}
    />
  );
}
