export type WorkHoursWithSalary = WorkHours & {
  salary: number
}

export type WorkHours = {
  day: string
  hours: number
}

export type Employee = {
  id: number
  name: string
  workHours: WorkHours[]
}

const data: Employee[] = [
  {
    id: 1,
    name: 'Jānis',
    workHours: [
      { day: '1/10/2022', hours: 1 },
      { day: '1/11/2022', hours: 2 },
      { day: '1/12/2022', hours: 3 },
      { day: '1/13/2022', hours: 4 },
      { day: '1/14/2022', hours: 5 },
      { day: '1/15/2022', hours: 6 },
      { day: '1/16/2022', hours: 7 },
    ],
  },
  {
    id: 2,
    name: 'Artūrs',
    workHours: [
      { day: '1/10/2022', hours: 1 },
      { day: '1/11/2022', hours: 1 },
      { day: '1/12/2022', hours: 1 },
      { day: '1/13/2022', hours: 1 },
      { day: '1/14/2022', hours: 1 },
      { day: '1/15/2022', hours: 1 },
      { day: '1/16/2022', hours: 1 },
    ],
  },
  {
    id: 3,
    name: 'Gints',
    workHours: [
      { day: '1/10/2022', hours: 2 },
      { day: '1/11/2022', hours: 2 },
      { day: '1/12/2022', hours: 2 },
      { day: '1/13/2022', hours: 2 },
      { day: '1/14/2022', hours: 2 },
      { day: '1/15/2022', hours: 2 },
      { day: '1/16/2022', hours: 2 },
    ],
  },
  {
    id: 4,
    name: 'Atis',
    workHours: [
      { day: '1/10/2022', hours: 3 },
      { day: '1/11/2022', hours: 3 },
      { day: '1/12/2022', hours: 3 },
      { day: '1/13/2022', hours: 3 },
      { day: '1/14/2022', hours: 3 },
      { day: '1/15/2022', hours: 3 },
      { day: '1/16/2022', hours: 3 },
    ],
  },
  {
    id: 5,
    name: 'Māris',
    workHours: [
      { day: '1/10/2022', hours: 4 },
      { day: '1/11/2022', hours: 4 },
      { day: '1/12/2022', hours: 4 },
      { day: '1/13/2022', hours: 4 },
      { day: '1/14/2022', hours: 4 },
      { day: '1/15/2022', hours: 4 },
      { day: '1/16/2022', hours: 4 },
    ],
  },
];

export default data;
