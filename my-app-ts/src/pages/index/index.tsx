import { Axis, Chart, Interval } from '@antv/f2';
import * as React from "react";
import { FC } from "react";
import { View } from 'remax/wechat';
const data = [
  { genre: 'Sports', sold: 275 },
  { genre: 'Strategy', sold: 115 },
  { genre: 'Action', sold: 120 },
  { genre: 'Shooter', sold: 350 },
  { genre: 'Other', sold: 150 },
];

const Index: FC = () => {
  const [a,setA]=React.useState<number>(1);
  return <View>
    <Chart data={data}>
      <Axis field="genre" />
      <Axis field="sold" />
      <Interval x="genre" y="sold" color="genre" />
    </Chart>
  </View>
};
export default Index;