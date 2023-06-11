import LunchboxPlayground from './LunchboxPlayground';
import LunchboxItemText from '../layouts/LunchboxItemText';

export default function LunchboxPlaygroundText() {
  return (
    <LunchboxPlayground
      cell={LunchboxItemText}
      cellProps={{
        htmlString:
          'One morning, when Gregor Samsa woke from troubled dreams, he found himself transformed in his bed into a horrible vermin. He lay on his armour-like back, and if he lifted his head a little he could see his brown belly, slightly domed and divided by arches into stiff sections.',
      }}
    />
  );
}
