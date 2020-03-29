import React from 'react';
import Tooltip from 'rc-tooltip';
import Slider, { Range } from 'rc-slider';
import 'rc-slider/assets/index.css';
import 'rc-tooltip/assets/bootstrap.css';
import { setStartDateFilter, setEndDateFilter } from '../../../../actions/filters';
import { connect } from 'react-redux';
const Handle = Slider.Handle;

const dotStyle = {
	'bottom': '-10px',
    'width': '1px',
    'border': '1px solid #e9e9e9',
    'borderRadius': '0%',
    'marginLeft': '-1px',
};

const handleDateRangeChange = (props) => {
  const { value, dragging, index, key, className, disabled, offset, prefixCls} = props;

  console.log(value, index, key);

  return (
    <Tooltip
      prefixCls="rc-slider-tooltip"
      overlay={'Posted ' + value + ' days ago'}
      visible={dragging}
      placement="top"
      key={index}
    >
      <Handle value={value} index={index} key={key} className={className} disabled={disabled} offset={offset} prefixCls={prefixCls} />
    </Tooltip>
  );
};

const DateRangeSlider = (props) => {
	const state = {
		maxValue: 21,
		minValue: 0,
		steps: 7
	}

	const getMarks = (minValue, maxValue) => {
		let dayMarks = [];
		for (let i = maxValue; i >= minValue; i--) {
		  if (i == minValue || i == maxValue || i % state.steps == 0) {
			dayMarks.push(i);
		  }
		}
	   
		return dayMarks.reduce(function(mark, value, index) {
		  const days_ago = state.maxValue - (state.steps * index);
		  mark[value] = {label: days_ago + ' days'};
		  return mark;
		}, {});
	}

	return (
		<div className="range-container">
			<Range
				min={state.minValue}
				max={state.maxValue}
				marks={getMarks(state.minValue, state.maxValue)}
				dots={true}
				dotStyle={dotStyle} 
				defaultValue={[state.minValue, state.maxValue]}
				onChange={(value)=> {
					props.dispatch(setEndDateFilter(value[0]))
					props.dispatch(setStartDateFilter(value[1]))
				}}
				handle={handleDateRangeChange}
				/>
		</div>
	)
}

export default connect()(DateRangeSlider);