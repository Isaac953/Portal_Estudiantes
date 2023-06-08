# Etapa 1: Compilar la aplicación Angular
FROM node:latest as build-stage
WORKDIR /app
COPY package*.json /app
RUN npm install
RUN npm install -g @angular/cli
COPY . /app

# Etapa 2: Ejecutar la aplicación en un servidor de desarrollo
FROM node:latest as production-stage
WORKDIR /app
COPY --from=build-stage /app/dist /app/dist

