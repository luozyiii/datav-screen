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
  TotalGender,
  LineChart,
  BarChart,
  CenterHeader,
  CountryCategory,
  AverageView,
  ScheduleView,
  PlanList,
  ActivateUser,
} from '@/components';

import './index.less';

export default function IndexPage() {
  const [ready, setReady] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      setReady(true);
    }, 2000);
  }, []);
  return (
    <div className="home">
      {!ready && <Loading>数据加载中...</Loading>}
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
              <div className="home-left4">
                <TotalGender />
              </div>
              <div className="home-left5">
                <LineChart />
              </div>
              <div className="home-left6">
                <BarChart />
              </div>
            </div>
            <div className="home-right">
              <div className="home-right-top1">
                <CenterHeader />
              </div>
              <div className="home-right-top2">
                <CountryCategory
                  data={['ALL', '北京', '上海', '深圳', '杭州', '南京', '武汉']}
                />
              </div>
              <div className="home-right-bottom">
                <div className="home-right-left">
                  <div className="home-right-left1">earth</div>
                  <div className="home-right-left2">
                    <CountryCategory
                      data={['订单量', '销售额', '用户数', '退单量']}
                    />
                  </div>
                  <div className="home-right-left3">
                    <AverageView />
                  </div>
                  <div className="home-right-left4">
                    <ScheduleView />
                  </div>
                </div>
                <div className="home-right-right">
                  <div className="home-right-right1">
                    <PlanList />
                  </div>
                  <div className="home-right-right2">
                    <ActivateUser />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      )}
    </div>
  );
}
