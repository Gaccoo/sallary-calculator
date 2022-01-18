The task is to implement the UI of simple timesheet entries for different employees and weeks. Users can select 
a timesheet filtered by an employee name and a week, and edit hours worked for selected employee and week.

You are free to choose javascript or typescript, any libraries (vue, react, angular, etc) to build the single 
page application. Mobile-only website, no need to build a responsive website. No backend.

___

Expected functionality:

* generate random timesheets with random employees
* timesheets must be generated for the current week and previous 4 weeks
* update "Hours worked" instantly
* delay update of monetary values by 0.25-1sec by faking REST API call and display a progress indicator in the 
* meantime. The assumption is the backend (REST API) calculates monetary values.
* for all employees set random hourly rate the weekdays and double hourly rate for the weekend hours
___

Example.

The hourly rate is €10 and overtime €20, and the employee worked 8 hours on Monday and 4 hours on Sunday:
hours worked is calculated as "12 = 8+4"
salary is calculated as "160 = (8 * 10) + (4 * 20)"
___

Nice to haves:
* strict TypeScript (if using TypeScript)
* code conforms to lint rules

___

### My notes

- All logic is done in App component and values are passed down as props, there is no logic in parent components
- Employee select is a custom-made dropdown
- Week select is a custom-made dropdown with a React date-picker component configured to meet the demands
- Employee names are randomly generated from a long list of names
- Employee count and work hours for the last 4 + 1 weeks are randomly generated with max and min values
- Employee work hours will be generated from this date -35days (7 days * ( 4 + 1 weeks))
- Day`s with 0 hours to show has a placeholder of 0, but that day is not added to the state
- If hours for a day gets changed from 0 to > 0, that day gets added to the state
- If hours for a day gets set to 0, that day gets deleted from the state
- Only available characters in hours input are numbers [0 - 9]
- The maximum hours of hours input has been limited to 24, if user tries to enter > 24 it automatically sets itself to it`s maximum

Design from [Figma link](https://www.figma.com/proto/SFakCFUvpr7cvtLGhRHEdm/Material-3-Design-Kit-(Community)?node-id=50995%3A3213&scaling=scale-down&page-id=50995%3A3212)  
Try it out [Heroku link](https://boiling-meadow-44930.herokuapp.com/)
