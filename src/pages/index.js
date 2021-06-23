import React, { useState, useEffect } from 'react';
import {
  Container,
  Loading,
  FlyBox,
  TopHeader,
  Separator,
  TotalUser,
  AverageAge,
  TatolDevice,
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
            <div className="home-left">
              <div className="home-left1">
                <TotalUser
                  todayUser={100}
                  growthLastDay={10}
                  growthLastMonth={30}
                />
              </div>
              <div className="home-left2">
                <AverageAge />
              </div>
              <div className="home-left3">
                <TatolDevice />
              </div>
              <div className="home-left4">total-gender</div>
              <div className="home-left5">line-chart</div>
              <div className="home-left6">bar-chart</div>
            </div>
            <div className="home-right">
              <div className="home-right-top1">center-header</div>
              <div className="home-right-top2">country-category</div>
              <div className="home-right-bottom">
                <div className="home-right-home-left">
                  <div className="home-right-home-left1">earth</div>
                  <div className="home-right-home-left2">country-category</div>
                  <div className="home-right-home-left3">dv-border-box-8</div>
                  <div className="home-right-home-left4">schedule-view</div>
                </div>
                <div className="home-right-right">
                  <div className="home-right-right1">plan-list</div>
                  <div className="home-right-right2">activate-user</div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      )}
    </div>
  );
}
