import { Loading } from '@/components';

import './index.less';

export default function IndexPage() {
  const content = function () {
    return <p style={{ color: 'red' }}>数据大屏加载中</p>;
  };
  return (
    <div className="app">
      <Loading content="123" />
      <Loading
        width="100"
        height="100"
        outsideColor="red"
        insideColor="blue"
        duration="1"
        content={content}
      />
    </div>
  );
}
