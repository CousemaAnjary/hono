# ----------------------------------------------------------------------
# Construction de l'image Docker pour l'application
# ----------------------------------------------------------------------

# Étape 1: Utilisation de l'image de base Node.js
FROM node:22-alpine AS builder

# Étape 2: Définition du répertoire de travail
WORKDIR /app

# Étape 3: Copier les fichiers de dépendances
COPY package.json package-lock.json ./

# Étape 4: Installation des dépendances (dev + prod)
RUN npm install

# Étape 5: Copier le reste des fichiers de l'application
COPY . .

# Étape 6: Construction de l'application
RUN npm run build

# Étape 7: Création de l'image finale
FROM node:22-alpine

# Étape 8: Définition du répertoire de travail
WORKDIR /app

# Étape 9: Copier les fichiers buildés depuis builder
COPY --from=builder /app/dist ./dist
COPY --from=builder /app/package*.json ./

# Exposer le port
EXPOSE 3000

# Démarrer l'application
CMD [ "node", "dist/index.js" ]