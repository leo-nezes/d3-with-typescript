import React from 'react';

import { Chart } from 'react-google-charts';

const GeoChart: React.FC = () => {

  return(
    <>
      <h1>Geo Chart Rect Google Chart</h1>

      <Chart
        width={'500px'}
        height={'300px'}
        chartType="GeoChart"
        
        data={[
          ['Country', 'Popularity'],
          ['Germany', 200],
          ['United States', 300],
          ['Brazil', 400],
          ['Canada', 500],
          ['France', 600],
          ['RU', 700],
        ]}
        // Note: you will need to get a mapsApiKey for your project.
        // See: https://developers.google.com/chart/interactive/docs/basic_load_libs#load-settings
        mapsApiKey="YOUR_KEY_HERE"
        // options={{ 
        //   region: 'IT',
        //   displayMode: 'markers',
        //   colorAxis: {colors: ['green', 'blue']}
        // }} 
      />
    </>
  );
}

export default GeoChart;