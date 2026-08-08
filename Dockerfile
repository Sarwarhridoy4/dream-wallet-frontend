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

COPY --from=builder --chown=nginx:nginx /app/dist ./dist

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]