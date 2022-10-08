init:
	docker-compose up -d --build

laravel:
	docker-compose exec api composer create-project laravel/laravel .

next:
	docker-compose exec front yarn create next-app  --typescript .

dev:
	docker-compose exec front yarn dev

tailwind:
	docker-compose exec front sh
	yarn add -D tailwindcss@latest postcss@latest autoprefixer@latest
	yarn tailwindcss init -p
	exit
