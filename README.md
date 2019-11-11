# Hotels booking app project

## Technologies

### Backend

* **Express**
* **Mongoose** 
* **Node.js v10.16.3**
* **Jasmine testing**
* **Swagger**
* **Connected to Mongo DB**

### Backend GraphQL
* **GraphQL with Apollo Server**
* **Connected to Mongo DB**


### Backend Prisma
* **Prisma**
* **GraphQL with Apollo Server**
* **Connected to Mongo DB**

### Backend Moleculer
* **Moleculer**
* **Docker**
* **Nats**
* **Traefik**

### Frontend

* **AngularJS v1.5**
* **Browserify** - Bundle Method.
* **Babelify**
* **Gulp**
* **Isomorphism**
* **GraphQL with Apollo Client**

## Libraries
* **Bootstrap**
* **Toastr**

## Services
* **SendGrid**

***

## Run Client
- cd frontend
- Install dependencies: sudo npm install
- gulp

***

## Run Server Node (Hotels, Users)

- cd backend
- Install dependencies: sudo npm install
- npm run dev

### Run DB (mongodb)

- sudo service mongod start
- mongo
- use conduit_nodejs

### Run test (Jasmine)

- cd backend
- jasmine

### Run Swagger

- http://localhost:3002/api-docs/

***

## Run Server GraphQL (Restaurants)

- cd backendGraphQL
- Install dependencies: sudo npm install
- npm run dev

### Run GraphiQL

- http://localhost:3003/api/graphql

***

## Run Server Prisma (Events)

- cd backendPrisma
- Install Prima CLI: npm install -g prisma
- Install dependencies: sudo npm install
- npm run start

###  For changes

- delete dependencies
- sudo docker-compose up -d
- prisma deploy
- install dependencies
- run

### Portainer

- sudo docker run -d -p 9000:9000 -v /var/run/docker.sock:/var/run/docker.sock -v portainer_data:/data portainer/portainer

### Prisma deploy

- http://localhost:4466/_admin

### Playground

- http://localhost:4000

***

## Run Microservers Moleculer

- cd backendMoleculer
- sudo npm install
- lanzar portainer : sudo docker run -d -p 9000:9000 -v /var/run/docker.sock:/var/run/docker.sock -v portainer_data:/data portainer/portainer (http://localhost:9000)
- sudo docker-compose up --build -d
- Browser: http://localhost:4001
- Traefik dashboard: http://localhost:4002
- npm run start

### For changes

- sudo docker-compose stop
- sudo docker-compose up --build -d







