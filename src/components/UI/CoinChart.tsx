import React, { useEffect } from 'react';

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import { fetchCryptoChartData } from '../../redux/cryptoSlice';
import { useLocation } from 'react-router-dom';
import styled from 'styled-components';
import { TCryptoChart } from '../../types/types';

const ChartWrapper = styled.div`
  display: flex;
  padding: 55px 0px 0px 0px;
`;

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend,
);

const CoinChart = () => {
  const dispatch = useAppDispatch();
  const chartData = useAppSelector((state) => state.cryptos.cryptoChart);
  const coinName = useLocation().pathname.split('/').pop();

  const chartDataLoading = async () => {
    await dispatch(fetchCryptoChartData(coinName));
  };

  useEffect(() => {
    chartDataLoading();
  }, []);

  const options = {
    responsive: true,
    scales: {
      x: {
        ticks: {
          callback: function (value: string | number, index: number) {
            const date = new Date(chartData[index].time).toString();
            const dateArray = date.split(' ');
            const timeArray = dateArray[4].slice(0, 5);
            const q = `${dateArray[1]} ${dateArray[2]}, ${dateArray[3]} - ${timeArray}`;
            const b = `${dateArray[1]} ${dateArray[2]}, ${dateArray[3]} - ${timeArray}`;
            return q.slice(-2, q.length) === '00' ? b.slice(-5, b.length) : '';
          },
          color: 'black',
        },
        grid: {
          display: false,
        },
      },
    },
    pointStyle: false,
    plugins: {
      legend: {
        display: false,
      },
    },
  };

  const data = {
    labels: chartData.map((el: TCryptoChart) => {
      const date = new Date(el.time).toString();
      const dateArray = date.split(' ');
      const timeArray = dateArray[4].slice(0, 5);
      return `${dateArray[1]} ${dateArray[2]}, ${dateArray[3]} - ${timeArray}`;
    }),
    datasets: [
      {
        fill: true,
        label: 'Price',
        data: chartData.map((el) => Number(el.priceUsd).toFixed(2)),
        pointHitRadius: 100,
        borderColor: 'rgb(53, 162, 235)',
        backgroundColor: 'rgba(53, 162, 235, 0.5)',
      },
    ],
  };

  return (
    <ChartWrapper>
      <Line options={options} data={data} />
    </ChartWrapper>
  );
};

export default CoinChart;
