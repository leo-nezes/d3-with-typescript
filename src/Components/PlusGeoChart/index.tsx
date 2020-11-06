import React from 'react'

import { Treemap } from 'd3plus-react';

const PlusGeoChart: React.FC = () => {
  const methods = {
    groupBy: "id",
    data: [
      {id: "alpha", value: 29},
      {id: "beta",  value: 10}
    ],
    size: d => d.value
  };

  return (
    <>
      <h1>Geo Chart D3 Plus</h1>

      <Treemap config={methods}/>
    </>
  )
}

export default PlusGeoChart;