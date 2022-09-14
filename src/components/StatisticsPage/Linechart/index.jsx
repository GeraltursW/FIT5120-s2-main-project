import React, { useState, useEffect } from 'react';
import { G2, Line } from '@ant-design/plots';
import data from './data.json';

import themeOptions2 from './theme2.json'
const { registerTheme } = G2;
registerTheme('custom-theme2', themeOptions2);

const DemoLines = () => {
  
  const config = {
    data,
    xField: 'year',
    yField: 'gdp',
    seriesField: 'name',
    yAxis: {
      label: {
        
      },
      
     
    },

    // theme: 'dark',
    theme: 'custom-theme2',
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