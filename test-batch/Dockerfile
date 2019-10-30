FROM node:12-alpine
WORKDIR /spec
COPY src/* ./
RUN npm i
ENTRYPOINT ["npm", "run", "test"]
