# --- Stage 1: Build ---
FROM node:22-alpine AS builder
WORKDIR /app

COPY package*.json ./
RUN npm ci

COPY . .
RUN npm run build

# --- Stage 2: Serve Static Files ---
FROM node:22-alpine
WORKDIR /app

# Install lightweight static file server
RUN npm install -g serve

# Copy built files only
COPY --from=builder /app/dist ./dist

EXPOSE 3000
CMD ["serve", "-s", "dist", "-l", "3000"]

