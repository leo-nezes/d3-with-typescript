import React, {useEffect, useState} from 'react';

import * as d3 from 'd3';
import d3Scale from 'd3-scale';

import dataNumbers from './files/values.json'

const App: React.FC = () => {
  const [values, setValues] = useState<number[]>([0])

  useEffect(() => {
    async function fetchData() {
      const {data} = dataNumbers 
      setValues(data)
    }
  
    fetchData()
  }, [])

  const margin = { top: 30, right: 30, bottom: 40, left: 50 };
  const height = 300 - margin.top - margin.bottom;
  const width = 500 - margin.left - margin.right;
  const barWidth = 50;
  const barOffset = 5;
  
  const colors = d3.scaleLinear()
  .domain([0, values.length * .33, values.length * .66, values.length])
  .range([1, 100]);

  if (!values) return;

  const yScale = d3.scaleLinear()
  .domain([0, d3.max(values)])
  .range([0, height - 10]);

  const xScale = d3.scaleOrdinal()
  .domain(d3.range(0, bardata.length))
  .rangeBands([0, width], .2)

  return (
    <h1>Hello World</h1>
  );
  
}

export default App;
