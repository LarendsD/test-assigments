db-generate:
	npm run typeorm -- migration:generate src/migrations/migrations -d src/data-source.ts

db-migrate:
	npm run typeorm -- migration:run -d src/data-source.ts