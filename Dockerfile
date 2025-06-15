# ----------------------------------------------------------------------
# Étape 1 : Construction de l'application (build)
# ----------------------------------------------------------------------

FROM node:22-alpine AS builder

# Répertoire de travail
WORKDIR /app

# Copie des fichiers de dépendances
COPY package.json package-lock.json ./

# Installation des dépendances (inclut les devDeps pour build)
RUN npm ci

# Copie du reste des fichiers
COPY . .

# Compilation TypeScript
RUN npm run build


# ----------------------------------------------------------------------
# Étape 2 : Image finale pour exécution (plus légère)
# ----------------------------------------------------------------------

FROM node:22-alpine

# Répertoire de travail
WORKDIR /app

# Copie du code compilé et des fichiers nécessaires
COPY --from=builder /app/dist ./dist
COPY --from=builder /app/package.json ./
COPY --from=builder /app/package-lock.json ./

# Installer uniquement les dépendances de production
RUN npm ci --omit=dev

# Exposer le port (adapter si ce n'est pas 3000)
EXPOSE 3000

# Lancement de l'application
CMD ["node", "dist/index.js"]
