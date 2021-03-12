import React, { useRef, useEffect } from 'react';
import { select, scaleLinear, max, axisBottom, axisLeft, line, scaleTime, timeParse, extent, timeFormat, circle } from 'd3';
import useResizeObserverHooks from "../hooks/useResizeObserverHooks";
import styled from 'styled-components';

const GraphWrapper = styled.div`
  background-color: #505362;
  width: 80%;
  height: 250px;
  margin-left: 35px;
`
const SvgCondition = styled.svg`
  width: 100%;
  height: 100%;
  border-radius: 20px;
  overflow: visible;
`;

function CondtionGraph({ data }) {
  const svgRef = useRef();
  const graphWrapperRef = useRef();
  const dimensions = useResizeObserverHooks(graphWrapperRef);
  useEffect(() => {
    const svg = select(svgRef.current);
    if(!dimensions) {
      return;
    }
    const parseDate = timeParse("%Y-%m-%d");
    const fiveDaysvaccineData = data.length >= 5 ? data.slice(-5) : data;
    const xScale = scaleTime()
      .domain(extent(fiveDaysvaccineData, (d) => parseDate(d.date)))
      .range([0, dimensions.width])
    const yScale = scaleLinear()
      .domain([0, max(fiveDaysvaccineData , (d) => Number(d.people_vaccinated))])
      .nice()
      .range([dimensions.height, 0])
    const xAxis = axisBottom(xScale)
      .tickFormat(timeFormat('%m/%d'))
      .ticks(4)
      .tickPadding(10);
    const yAxis = axisLeft(yScale);
    const Newline = line()
      .x((value) => xScale(parseDate(value.date)))
      .y((value) => yScale(Number(value.people_vaccinated)))
    svg
      .select(".x-axis")
      .call(xAxis)
      .style("transform", `translateY(${dimensions.height}px)`);
    svg
      .select(".y-axis")
      .call(yAxis)
      .style("transform", `translateX(0px)`);
    svg
      .selectAll(".dot")
      .data(fiveDaysvaccineData)
      .join("circle")
      .attr("class", "dot")
      .attr("fill", "#ccc")
      .attr("r", "3")
      .attr("cx", (value) => xScale(parseDate(value.date)))
      .attr("cy", (value) => yScale(Number(value.people_vaccinated)))
    svg
      .selectAll(".line")
      .data([fiveDaysvaccineData])
      .join("path")
      .attr("class", "line")
      .attr("d", Newline)
      .attr("fill", "none")
      .attr("stroke", "#00bfa5")
      .attr("stroke-width", 2)
  }, [data, dimensions]);
  return (
    <GraphWrapper ref={graphWrapperRef}>
      <SvgCondition ref={svgRef}>
        <g className="x-axis" />
        <g className="y-axis" />
      </SvgCondition>
    </GraphWrapper>
  )
}

export default CondtionGraph;
