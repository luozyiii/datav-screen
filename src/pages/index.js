import React, { useEffect } from 'react';
import { Container, Loading, FlyBox } from '@/components';

import './index.less';

export default function IndexPage() {
  useEffect(() => {
    window.addEventListener('resize', () => {});
  }, []);
  return (
    <div className="home">
      <Container options={{ width: 3840, height: 2160 }}>
        <div className="test">111</div>
      </Container>
    </div>
  );
}
