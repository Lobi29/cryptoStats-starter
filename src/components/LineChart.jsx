import React from 'react';
import { Col, Row, Typography } from 'antd';
import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  LineElement,
  CategoryScale, // x axis
  LinearScale, // y axis
  PointElement
} from 'chart.js';

ChartJS.register(
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement
)

const { Title } = Typography;


const LineChart = ({ coinHistory, currentPrice, coinName }) => {

  const coinPrice = [];
  const coinTimestamp = [];

  for (let i = 0; i < coinHistory?.data?.history?.length; i += 1) {
    coinPrice.push(coinHistory.data.history[i].price);
    coinTimestamp.push(new Date(coinHistory.data.history[i].timestamp).toLocaleDateString());
  }

  // console.log(coinPrice, coinTimestamp);


  const data = {
    labels: coinTimestamp,
    datasets: [{
      labels: 'bitcoin price',
      data: coinPrice,
      backgroundColor: 'aqua',
      borderColor: 'black',
      pointBorderColor: 'aqua',
      fill: true,
      tension: 0.4
    }
    ]
  }

  const options = {
    plugins: {
      legend: true
    },
    scales: {
      y: {
        // min: ,
        // max: 6
      }
    }
  }

  return (
    <>
      <Row className='chart-header'>
        <Title level={2} className='chart-title heading'>{coinName}</Title>
        <Col className='price-container'>
          <Title level={5} className='price-change heading'>{coinHistory?.data?.change}%</Title>
          <Title level={5} className='current-price heading'>Current {coinName} Price: $ {currentPrice}</Title>
        </Col>
      </Row>
      <Line
        data={data}
        options={options}
      ></Line>
    </>
  )
}

export default LineChart;
