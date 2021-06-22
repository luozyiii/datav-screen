import React, { useEffect } from 'react';
import { Container, Loading, FlyBox } from '@/components';

import './index.less';

export default function IndexPage() {
  useEffect(() => {}, []);
  return (
    <Container options={{ width: 3840, height: 2160 }}>
      <div className="test">test</div>
    </Container>
  );
}
