# Etapa 1: Construir la aplicación Angular
FROM node:latest as build

WORKDIR /app

COPY package*.json ./

RUN npm install && npm audit fix

RUN npm install -g @angular/cli

COPY . .

CMD ["npm", "run", "build", "--prod"]

# Etapa 2: Ejecutar la aplicación en un servidor HTTP ligero
FROM nginx:latest

COPY --from=build /app/dist/frontend-isaac /usr/share/nginx/html

EXPOSE 4200

CMD ["nginx", "-g", "daemon off;"]