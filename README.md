# Progress Bar Controller

A progress bar controller. [Demo Link](https://progress-bar-controller.vercel.app)

Built with
<a href="http://react.dev/" target="_blank">![](https://img.shields.io/badge/React-61DAFB?style=flat-square&logo=react&logoColor=black)
</a>
<a href="https://www.typescriptlang.org/" target="_blank">![](https://img.shields.io/badge/TypeScript-3178C6?style=flat-square&logo=typescript&logoColor=white)
</a>
<a href="https://styled-components.com/" target="_blank">![](https://img.shields.io/badge/styledcomponents-DB7093?style=flat-square&logo=styledcomponents&logoColor=white)
</a>
<a href="https://testing-library.com/" target="_blank">![](https://img.shields.io/badge/testinglibrary-E33332?style=flat-square&logo=testinglibrary&logoColor=white)
</a>
<a href="https://vercel.com/" target="_blank">![](https://img.shields.io/badge/Vercel-000000?style=flat-square&logo=vercel&logoColor=white)
</a>

## Requirements

- Multiple bars
- One set of controls that can control each bar on the fly
- Can't go under 0
- Can go over 100, but limit the bar itself and change its color
- Display usage amount, centered
- Responsive design and mobile friendly
- Animate the bar change, and make sure it works well when you tap buttons
quickly.

## Development Tasks
```
Tasks
├── Dev env setup
│   ├── React init
│   ├── Add eslint, prettier, husky
│   └── Template files clean up
├── Deploy
│   └── Setup vercel
├── Static UI
│   ├── Set theme colors
│   ├── Define basic components
│   └── Static page with required components
├── Interaction
│   ├── Select bar to change item
│   ├── Click button to adjust values
│   └── Error handling when number exceeds limits
├── UX improvements
│   ├── Responsive web
│   └── CSS animations
└── Miscellaneous
    └── README.md
```

## How to run the app

`npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.


`npm test`

Launches the test runner in the interactive watch mode.

`npm test -- --coverage`

View test coverage report.

## Test coverage
```
--------------------|---------|----------|---------|---------|-------------------
File                | % Stmts | % Branch | % Funcs | % Lines | Uncovered Line #s
--------------------|---------|----------|---------|---------|-------------------
All files           |   93.33 |      100 |   94.73 |   93.18 |                   
 src                |       0 |      100 |       0 |       0 |                   
  App.tsx           |       0 |      100 |       0 |       0 | 5                 
  index.tsx         |       0 |      100 |     100 |       0 | 6-7               
 src/components     |     100 |      100 |     100 |     100 |                   
  BarChart.tsx      |     100 |      100 |     100 |     100 |                   
  Button.tsx        |     100 |      100 |     100 |     100 |                   
  Dropdown.tsx      |     100 |      100 |     100 |     100 |                   
  Text.tsx          |     100 |      100 |     100 |     100 |                   
  index.ts          |       0 |        0 |       0 |       0 |                   
 src/pages          |     100 |      100 |     100 |     100 |                   
  Home.tsx          |     100 |      100 |     100 |     100 |                   
  index.ts          |       0 |        0 |       0 |       0 |                   
 src/themes         |     100 |      100 |     100 |     100 |                   
  index.ts          |       0 |        0 |       0 |       0 |                   
  themes.ts         |     100 |      100 |     100 |     100 |                   
 src/utils          |     100 |     87.5 |     100 |     100 |                   
  businessHelper.ts |     100 |      100 |     100 |     100 |                   
  index.ts          |       0 |        0 |       0 |       0 |                   
  styleHelper.ts    |     100 |      100 |     100 |     100 |                 
--------------------|---------|----------|---------|---------|-------------------
Test Suites: 3 passed, 3 total
Tests:       20 passed, 20 total
```
