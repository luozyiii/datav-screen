import React, { useState, useEffect } from 'react';
import {
  Container,
  Loading,
  FlyBox,
  TopHeader,
  Separator,
  TotalUser,
  AverageAge,
} from '@/components';

import './index.less';

export default function IndexPage() {
  const [ready, setReady] = useState(false);
  useEffect(() => {
    setReady(true);
  }, []);
  return (
    <div className="home">
      {!ready && <Loading>loading...</Loading>}
      {ready && (
        <Container options={{ width: 3840, height: 2160 }}>
          <div className="header">
            <TopHeader />
          </div>
          <div className="separator-wrapper">
            <Separator />
          </div>
          <div className="center">
            <div className="left">
              <div className="left1">
                <TotalUser
                  todayUser={100}
                  growthLastDay={10}
                  growthLastMonth={30}
                />
              </div>
              <div className="left2">
                <AverageAge />
              </div>
              <div className="left3">total-device</div>
              <div className="left4">total-gender</div>
              <div className="left5">line-chart</div>
              <div className="left6">bar-chart</div>
            </div>
            <div className="right">
              <div className="right-top1">center-header</div>
              <div className="right-top2">country-category</div>
              <div className="right-bottom">
                <div className="right-left">
                  <div className="right-left1">earth</div>
                  <div className="right-left2">country-category</div>
                  <div className="right-left3">dv-border-box-8</div>
                  <div className="right-left4">schedule-view</div>
                </div>
                <div className="right-right">
                  <div className="right-right1">plan-list</div>
                  <div className="right-right2">activate-user</div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      )}
    </div>
  );
}
