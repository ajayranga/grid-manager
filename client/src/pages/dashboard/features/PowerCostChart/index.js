import React, { useEffect, useState } from 'react';
import ReactApexChart from 'react-apexcharts';

const PowerCostChart = () => {
  const [series, setSeries] = useState([]);
  useEffect(() => {
    (async () => {
      const response = await fetch('/api/chart');
      const chartData = await response.json();
      setSeries(
        (state) =>
          (state = chartData.chartData.map((itm) => {
            return { name: itm.seriesName, data: itm.data };
          }))
      );
    })();
  }, []);
  const options = {
    chart: {
      height: 350,
      type: 'area',
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      curve: 'smooth',
    },
    xaxis: {
      type: 'datetime',
      categories: [
        '2018-09-19T00:00:00.000Z',
        '2018-09-19T01:30:00.000Z',
        '2018-09-19T02:30:00.000Z',
        '2018-09-19T03:30:00.000Z',
        '2018-09-19T04:30:00.000Z',
        '2018-09-19T05:30:00.000Z',
        '2018-09-19T06:30:00.000Z',
      ],
    },
    tooltip: {
      x: {
        format: 'dd/MM/yy HH:mm',
      },
    },
  };
  return (
    <div id='chart'>
      <ReactApexChart
        options={options}
        series={series}
        type='area'
        height={250}
      />
    </div>
  );
};

export default PowerCostChart;
