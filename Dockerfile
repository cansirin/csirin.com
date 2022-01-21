FROM public.ecr.aws/lambda/nodejs:latest as dependecies
WORKDIR /blog-web
COPY package.json package-lock.json ./
RUN npm ci


FROM public.ecr.aws/lambda/nodejs:latest as builder
WORKDIR /blog-web
COPY . .
COPY --from=dependecies /blog-web/node_modules ./node_modules
RUN npm run build


FROM public.ecr.aws/lambda/nodejs:latest as runner
MAINTAINER Can Sirin <cansirin12@gmail.com>
WORKDIR /blog-web

COPY --from=builder /blog-web/next.config.js ./
COPY --from=builder /blog-web/public ./public
COPY --from=builder /blog-web/.next ./.next
COPY --from=builder /blog-web/resources/posts ./resources/posts
COPY --from=builder /blog-web/resources/projects ./resources/projects
COPY --from=builder /blog-web/node_modules ./node_modules

EXPOSE 3000

ENTRYPOINT ["node_modules/.bin/next", "start"]
