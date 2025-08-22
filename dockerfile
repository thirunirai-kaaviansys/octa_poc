# ---------- Stage 1: Build React app ----------
FROM node:22-alpine AS build

# Set working directory
WORKDIR /app

# Copy frontend code
COPY my-app ./my-app

# Install dependencies and build React
WORKDIR /app/my-app
RUN npm install
RUN npm run build

# ---------- Stage 2: Run Node/Express server ----------
FROM node:22-alpine

WORKDIR /app

# Copy backend code
COPY server ./server

# Copy built React files from stage 1
COPY --from=build /app/my-app/dist ./dist

# Install backend dependencies
WORKDIR /app/server
RUN npm install

# Expose port (Azure uses process.env.PORT, typically 80)
EXPOSE 80

# Start server
CMD ["node", "index.js"]