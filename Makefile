# ----------------------------------------------------------------------
# Docker Makefile
# ----------------------------------------------------------------------

# Démarrer tous les services dans (docker-compose.yml)
up:
	docker compose up --build

# Arrêter les conteneurs
down:
	docker compose down

# Supprimer les conteneurs + volumes (attention aux données)
clean:
	docker compose down --volumes --remove-orphans

# rebuild uniquement l image de Hono
rebuild:
	docker compose build hono-app