import React from 'react';
import Helmet from 'react-helmet';
import moment from 'moment';
import DayPicker from 'react-day-picker';
import 'react-day-picker/lib/style.css';
import { getWeekDays, getWeekRange } from '../../DateGenerator';

export default class DatePicker extends React.Component {
  constructor(props) {
    super(props);
    // eslint-disable-next-line react/prop-types
    this.onDateChange = props.onDateChange;
  }

  // eslint-disable-next-line react/state-in-constructor
  state = {
    hoverRange: undefined,
    selectedDays: [],
  };

  handleDayChange = (date) => {
    this.onDateChange(getWeekDays(getWeekRange(date).from));
    this.setState({
      selectedDays: getWeekDays(getWeekRange(date).from),
    });
  };

  handleDayEnter = (date) => {
    this.setState({
      hoverRange: getWeekRange(date),
    });
  };

  handleDayLeave = () => {
    this.setState({
      hoverRange: undefined,
    });
  };

  handleWeekClick = (weekNumber, days) => {
    this.setState({
      selectedDays: days,
    });
  };

  render() {
    const {
      hoverRange,
      selectedDays,
    } = this.state;

    const daysAreSelected = selectedDays.length > 0;

    const modifiers = {
      hoverRange,
      selectedRange: daysAreSelected && {
        from: selectedDays[0],
        to: selectedDays[6],
      },
      hoverRangeStart: hoverRange && hoverRange.from,
      hoverRangeEnd: hoverRange && hoverRange.to,
      selectedRangeStart: daysAreSelected && selectedDays[0],
      selectedRangeEnd: daysAreSelected && selectedDays[6],
    };

    return (
      <div className="SelectedWeekExample">
        <DayPicker
          selectedDays={selectedDays}
          showOutsideDays
          modifiers={modifiers}
          onDayClick={this.handleDayChange}
          onDayMouseEnter={this.handleDayEnter}
          onDayMouseLeave={this.handleDayLeave}
          onWeekClick={this.handleWeekClick}
          firstDayOfWeek={1}
        />
        {selectedDays.length === 7 && (
          <div>
            {moment(selectedDays[0])
              .format('LL')}
            {' '}
            –
            {' '}
            {moment(selectedDays[6])
              .format('LL')}
          </div>
        )}

        <Helmet>
          <style>
            {`
            .SelectedWeekExample .DayPicker-Month {
              border-collapse: separate;
            }
            .SelectedWeekExample .DayPicker-WeekNumber {
              outline: none;
            }
            .SelectedWeekExample .DayPicker-Day {
              outline: none;
              border: 1px solid transparent;
            }
            .SelectedWeekExample .DayPicker-Day--hoverRange {
              background-color: #EFEFEF !important;
            }

            .SelectedWeekExample .DayPicker-Day--selectedRange {
              background-color: #fff7ba !important;
              border-top-color: #FFEB3B;
              border-bottom-color: #FFEB3B;
              border-left-color: #fff7ba;
              border-right-color: #fff7ba;
            }

            .SelectedWeekExample .DayPicker-Day--selectedRangeStart {
              background-color: #FFEB3B !important;
              border-left: 1px solid #FFEB3B;
            }

            .SelectedWeekExample .DayPicker-Day--selectedRangeEnd {
              background-color: #FFEB3B !important;
              border-right: 1px solid #FFEB3B;
            }

            .SelectedWeekExample .DayPicker-Day--selectedRange:not(.DayPicker-Day--outside).DayPicker-Day--selected,
            .SelectedWeekExample .DayPicker-Day--hoverRange:not(.DayPicker-Day--outside).DayPicker-Day--selected {
              border-radius: 0 !important;
              color: black !important;
            }
            .SelectedWeekExample .DayPicker-Day--hoverRange:hover {
              border-radius: 0 !important;
            }
          `}
          </style>
        </Helmet>
      </div>
    );
  }
}
