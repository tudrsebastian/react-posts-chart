import { AnimatedAxis, AnimatedGrid, AnimatedLineSeries, XYChart } from '@visx/xychart';
export const Chart = ({ data }) => {
  const accessors = {
    xAccessor: (d) => d.month,
    yAccessor: (d) => d.total
  };

  return (
    <XYChart width={700} height={500} xScale={{ type: 'band' }} yScale={{ type: 'linear' }}>
      <AnimatedAxis orientation="bottom" numTicks={12} />
      <AnimatedAxis orientation="left" numTicks={10} />
      <AnimatedGrid columns={false} numTicks={10} />
      <AnimatedLineSeries dataKey="Line 1" data={data} {...accessors} />
    </XYChart>
  );
};
