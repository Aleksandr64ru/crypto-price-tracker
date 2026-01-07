import React from 'react';
import { Sparklines, SparklinesLine } from 'react-sparklines';

interface SparklineChartProps {
  data: number[];
  width?: number; // maxWidth
  height?: number;
}

const SparklineChart: React.FC<SparklineChartProps> = ({
  data,
  width = 150,
  height = 40,
}) => {
  if (!data || data.length === 0) return null;

  const isGrowing = data[data.length - 1] > data[0];
  const lineColor = isGrowing ? '#4caf50' : '#f44336';

  return (
    <div style={{ width: '100%', maxWidth: width }}>
      <Sparklines data={data} width={width} height={height}>
        <SparklinesLine
          color={lineColor}
          style={{ strokeWidth: 3, fill: 'none' }}
        />
      </Sparklines>
    </div>
  );
};

export default SparklineChart;
