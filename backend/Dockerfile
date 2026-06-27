FROM node:22-alpine AS dev
WORKDIR /app/dev
COPY package*.json .
RUN npm i 
COPY . . 
CMD ["npm","run","dev"]