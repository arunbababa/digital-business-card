# Vite のビルド & Firebase デプロイ

.PHONY: build deploy

build:
	npm run build

dev:
	npm run dev

test:
	npm run test

deploy: build
	firebase deploy