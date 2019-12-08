FROM node:8 as react-build
WORKDIR /app
COPY . ./
RUN npm install
ENTRYPOINT ["npm", "start"]
