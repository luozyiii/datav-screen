# datav-screen
数据大屏：基于umi + antd + echart, 使用hooks编写。

### react-countup
简单好用的一个数字滚动插件
```javascript
// 安装
yarn add react-countup -D

// 使用
import CountUp from 'react-countup';
 
<CountUp end={100} />

<CountUp
  start={-875.039}
  end={160527.012}
  duration={2.75}
  separator=" "
  decimals={4}
  decimal=","
  prefix="EUR "
  suffix=" left"
  onEnd={() => console.log('Ended! 👏')}
  onStart={() => console.log('Started! 💨')}
>
  {({ countUpRef, start }) => (
    <div>
      <span ref={countUpRef} />
      <button onClick={start}>Start</button>
    </div>
  )}
</CountUp>
```
