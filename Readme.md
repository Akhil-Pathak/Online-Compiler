# Online Compiler

I will think of a good name later.

# Development setup

The project have a React Client and a Node.Js+MongoDB+Docker Backend.

## Client Setup

> `cd client && npm install && npm start`

## Backend Setup

So backend setup is a bit complex:

- first you have to install redis and start it as a service [follow this quick start guide](https://redis.io/topics/quickstart)

- Next Install Docker and make the docker image using `smaller.Dockerfile` in `./backend/scripts/installDocker` you can also just run the `installDocker.sh` with root privilege (read the script once before running it).

- Finally ensure that the Docker service and Redis service are running.

- do `cd backend && npm install && npm start` to start the backend.

- Navigate to [http://localhost:3000](http://localhost:3000) to see the web app running.

# To do

- Use Sockets instead of short polling.

- Simplify backend using less components.

- Think of a new name.

- Make this stupid Readme good.

- Implement a easy way to add languages.
