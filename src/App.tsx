import React from 'react';

// import * as d3 from 'd3';

import BarChart from './Components/BarChart'
import Chart from './Components/Chart'
import GeoChart from './Components/GeoChart';
import PlusGeoChart from './Components/PlusGeoChart';

const App: React.FC = () => {
    // const svgRef = useRef<SVGSVGElement>(null);  
    // const divRef = useRef(null);  
    // const data = [100, 200, 300, 400, 500]

    // useLayoutEffect(() => {
    //   const size = 500 
    //   const svg = d3.select(divRef.current)
    //                   .append("svg")
    //                   .attr("width", size)
    //                   .attr("height", size)

    //   const rectWidth = 95;
    //   svg.select('rect')
    //       .data(data)
    //       .enter()
    //       .append('rect')
    //       .attr('x', (d, i) => 5 + i * (rectWidth + 5))
    //       .attr('y', d => size - d)
    //       .attr('width', rectWidth)
    //       .attr('height', d => d)
    //       .attr('fill', 'red')

    // }, [data]);

    return (
      <>
        <BarChart />
        <Chart />
        <GeoChart />
        <PlusGeoChart />
        {/* <div id="t" ref={divRef}> */}
          {/* <svg ref={svgRef}></svg> */}
        {/* </div> */}
      </>
    )
  };

export default App;
