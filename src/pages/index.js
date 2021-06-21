import { Loading, FlyBox } from '@/components';

import './index.less';

export default function IndexPage() {
  const content = function () {
    return <p style={{ color: 'red' }}>数据大屏加载中</p>;
  };
  const contentP = function () {
    return (
      <div>
        <p>123</p>
        <p>123</p>
        <p>123</p>
        <p>123</p>
        <p>123</p>
        <p>123</p>
        <p>123</p>
      </div>
    );
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
      <FlyBox content={contentP} duration="5" />
      <div style={{ width: '200px', height: '200px' }}>
        <FlyBox content="1234" />
      </div>
    </div>
  );
}
