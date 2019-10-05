RUN CLIENT

- cd frontend
- sudo npm install
- gulp

RUN DB (MONGODB)

- sudo service mongod start
- mongo
- use conduit_nodejs

RUN SERVER

- cd backend
- sudo npm install
- npm run dev

RUN TESTS (JASMINE)

- cd backend
- jasmine

RUN SWAGGER 

- http://localhost:3001/api-docs/



