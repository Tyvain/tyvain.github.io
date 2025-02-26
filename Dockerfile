# Utilisation de l’image officielle Marp CLI avec Node.js
FROM ghcr.io/marp-team/marp-cli:latest

# Installer Express.js pour servir les slides
RUN apt update && apt install -y nodejs npm && npm install -g express

# Définir le dossier de travail
WORKDIR /app
COPY . .

# Installer les dépendances du projet
RUN npm install

# Exposer le port 3000 pour Codespaces
EXPOSE 3000

# Commande de démarrage automatique
CMD ["npm", "start"]
