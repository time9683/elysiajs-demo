# Dockerfile (ubicado en el directorio raíz del proyecto)
FROM oven/bun:slim

# Actualizar e instalar dependencias mínimas si son necesarias
# Bun suele ser autosuficiente para la mayoría de estas librerías
# RUN apt-get update && apt-get install -y \
#     openssl \
#     && rm -rf /var/lib/apt/lists/*

WORKDIR /app

# Copiar dependencias e instalar
COPY package*.json ./
COPY bun.lock ./
RUN bun install

# Copiar el esquema de Prisma y generar el cliente
# Esto asegura que el cliente se regenere si el esquema cambia
# COPY prisma ./prisma/
# RUN bunx --bun prisma generate

# Copiar el resto del código fuente
COPY . .
RUN chmod +x ./entrypoint.sh

# Variables de entorno (ajustar según necesidades)
ENV NODE_ENV=production

EXPOSE 3000

ENTRYPOINT ["./entrypoint.sh"]

# Ejecutar la aplicación
CMD ["bun", "start"]