# Étape de construction
FROM node:16-alpine AS builder

# Définir le répertoire de travail
WORKDIR /app

# Copier les fichiers nécessaires
COPY package.json package-lock.json ./

# Installer les dépendances de production
RUN npm install --production

# Copier les fichiers de l'application
COPY . .

# Construire l'application Next.js
RUN npm run build

# Étape de déploiement
FROM node:16-alpine AS runner

WORKDIR /app

# Copier les fichiers nécessaires depuis l'étape de construction
COPY --from=builder /app/package.json ./package.json
COPY --from=builder /app/.next/ ./.next/
COPY --from=builder /app/public ./public

# Installer uniquement les dépendances de production
RUN npm install --production

# Démarrer le serveur Next.js
CMD ["npm", "start"]