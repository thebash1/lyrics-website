FROM oven/bun:alpine AS builder
WORKDIR /app

COPY package.json ./
RUN bun install
COPY . .
RUN bun run build

FROM oven/bun:alpine AS runtime
WORKDIR /app
COPY --from=builder /app/dist ./dist

ENV HOST=0.0.0.0
ENV PORT=4321
EXPOSE 4321

CMD ["bun", "run", "./dist/server/entry.mjs"]
