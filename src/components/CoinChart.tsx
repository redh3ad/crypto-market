import React, { useEffect, useState } from 'react';
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
import { useAppDispatch, useAppSelector } from '../redux/hooks';
import { fetchCryptoChartData } from '../redux/cryptoSlice';
import { useLocation } from 'react-router-dom';

import { TChartDateFilter, TCryptoChart } from '../types/types';
import { CoinAddButton } from './UI/CoinInfoUI';
import {
  ChartButtons,
  ChartInfo,
  ChartInfoDiv,
  ChartWrapper,
  CryptoChange,
} from './UI/CoinChartUI';

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

const CoinChart: React.FC<{ nameCoin: string; symbolCoin: string }> = ({
  nameCoin,
  symbolCoin,
}) => {
  const [dateFilter, setDateFilter] = useState<TChartDateFilter>('day');

  const dispatch = useAppDispatch();
  const chartData = useAppSelector((state) => state.cryptos.cryptoChart);
  const chartInfo = useAppSelector((state) => state.cryptos.cryptoChartInfo);

  const name = useLocation().pathname.split('/').pop();

  const chartDataLoading = async (dateFilter: string) => {
    await dispatch(fetchCryptoChartData({ name, dateFilter }));
  };

  useEffect(() => {
    chartDataLoading(dateFilter);
  }, [dateFilter]);

  const options = {
    responsive: true,
    scales: {
      x: {
        ticks: {
          callback: function (
            value: string | number,
            index: number,
            ticks: any,
          ) {
            const date = new Date(chartData[index].time).toString();
            const dateArray = date.split(' ');
            if (dateFilter === 'month') {
              const timeArray = `${dateArray[1]} ${dateArray[2]}`;
              return timeArray;
            } else if (dateFilter === 'year') {
              const timeArray = `${dateArray[1]} ${dateArray[3]}`;
              return timeArray;
            } else {
              const timeArray = dateArray[4].slice(0, 5);
              return timeArray;
            }
          },
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
      <ChartInfo>
        <ChartInfoDiv>
          <p>
            {nameCoin}({symbolCoin})
          </p>
          <span>{new Date().toLocaleDateString()}</span>
        </ChartInfoDiv>
        <ChartInfoDiv>
          <span>
            HIGH: <p>${chartInfo.high}</p>
          </span>
          <span>
            LOW: <p>${chartInfo.low}</p>
          </span>
        </ChartInfoDiv>
        <ChartInfoDiv>
          <span>
            AVERAGE: <p>${chartInfo.average}</p>
          </span>
          <span>
            CHANGE:{' '}
            <CryptoChange className='last-p' color={chartInfo.change}>
              {chartInfo.change}%
            </CryptoChange>
          </span>
        </ChartInfoDiv>
      </ChartInfo>
      <Line options={options} data={data} />
      <ChartButtons>
        <CoinAddButton onClick={() => setDateFilter('day')}>Day</CoinAddButton>
        <CoinAddButton onClick={() => setDateFilter('month')}>
          Month
        </CoinAddButton>
        <CoinAddButton
          onClick={() => setDateFilter('year')}
          style={{ marginRight: '0px' }}>
          Year
        </CoinAddButton>
      </ChartButtons>
    </ChartWrapper>
  );
};

export default CoinChart;
