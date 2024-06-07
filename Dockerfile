# Stage 1: Build the React app with Vite
FROM node:18-alpine AS builder

WORKDIR /app

ARG VITE_APP_API_BASE_URL

ENV VITE_APP_API_BASE_URL=$VITE_APP_API_BASE_URL

COPY package.json yarn.lock ./

RUN yarn install

COPY . .

RUN yarn build

# Stage 2: Serve the React app using a lightweight web server
FROM node:18-alpine

RUN yarn global add serve

WORKDIR /app

# Copy the build output from the previous stage
COPY --from=builder /app/dist ./dist

EXPOSE 3000

CMD ["serve", "-s", "dist", "-l", "3000"]
