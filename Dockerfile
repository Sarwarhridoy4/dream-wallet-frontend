FROM oven/bun:1-alpine AS base


FROM base AS deps
WORKDIR /app

COPY package.json bun.lock ./
RUN bun install --frozen-lockfile


FROM base AS builder
WORKDIR /app

COPY --from=deps /app/node_modules ./node_modules
COPY . .

RUN bun run build


FROM nginx:alpine AS runner

WORKDIR /usr/share/nginx/html

ENV NODE_ENV=production

# Required for Coolify health checks
RUN apk add --no-cache curl

# Copy frontend build directly into Nginx web root
COPY --from=builder /app/dist /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]