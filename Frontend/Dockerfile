# Etapa 1: Construir la aplicación Angular
FROM node:latest as node
WORKDIR /app
COPY . .
RUN npm install
RUN npm run build --prod

# Etapa 2: Ejecutar la aplicación en un servidor HTTP ligero
FROM nginx:alpine
COPY default.conf /etc/nginx/conf.d
COPY --from=node /app/dist/frontend-isaac /usr/share/nginx/html
