import React, { useState, useEffect } from 'react';
import { G2, Line } from '@ant-design/plots';
import data from './data.json';

import themeOptions from './theme.json'
const { registerTheme } = G2;
registerTheme('custom-theme', themeOptions);

const DemoLines = () => {
  
  const config = {
    data,
    xField: 'year',
    yField: 'gdp',
    seriesField: 'name',
    yAxis: {
      label: {
        formatter: (v) => `${(v / 10e8).toFixed(1)} B`,
      },
    },

    // theme: 'dark',
    theme: 'custom-theme',
    legend: {
      position: 'top',
    },
    smooth: true,
    // @TODO 后续会换一种动画方式
    animation: {
      appear: {
        animation: 'path-in',
        duration: 5000,
      },
    },
    
  };

  return <Line {...config} />;
};

export default DemoLines;