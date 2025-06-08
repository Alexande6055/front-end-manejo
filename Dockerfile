# Etapa 1: build
FROM node:18 AS builder

# Establece el directorio de trabajo
WORKDIR /app

# Copia los archivos de dependencias
COPY package.json package-lock.json* ./

# Instala dependencias
RUN npm install

# Copia el resto de la aplicación
COPY . .

# Genera el build de producción
RUN npm run build

# Etapa 2: producción
FROM node:18-alpine AS runner

# Establece el directorio de trabajo
WORKDIR /app

# Establece la variable de entorno para producción
ENV NODE_ENV=production

# Copia solo lo necesario desde la etapa de build
COPY --from=builder /app/package.json ./
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/public ./public
COPY --from=builder /app/node_modules ./node_modules

# Expone el puerto que usa Next.js
EXPOSE 3000

# Comando para arrancar la app
CMD ["npm", "start"]
