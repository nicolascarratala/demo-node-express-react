# Dockerfile

FROM node:16
RUN mkdir -p /home/app/ && chown -R node:node /home/app
WORKDIR /home/app
COPY --chown=node:node . .

USER node

RUN yarn install --frozen-lockfile

RUN yarn run build

CMD [ "yarn", "start" ]