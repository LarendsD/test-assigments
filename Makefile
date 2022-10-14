setup: install db-migrate

install:
	npm install

start:
	npm run start

start-dev:
	npm run start:dev

db-generate:
	npm run typeorm -- migration:generate src/migrations/migrations -d src/data-source.ts

db-migrate:
	npm run typeorm -- migration:run -d src/data-source.ts

test-e2e:
	npm run test:e2e

start-test:
	npm run test