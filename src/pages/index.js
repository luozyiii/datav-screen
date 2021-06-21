import { Loading } from '@/components';

import './index.less';

export default function IndexPage() {
  return (
    <div className="app">
      <Loading />
      <Loading
        width="100"
        height="100"
        outsideColor="red"
        insideColor="blue"
        duration="1"
      />
    </div>
  );
}
