# Projet Dev


Pour run le projet on a besoin de clone notre répo:

```bash=
git clone https://github.com/Thhhe0/sos_chomage.git
```

Sur l'ordinateur il faudra aussi installé NodeJS que l'on trouve facilement sur internet.

Créer un compte MongoDB, créer une base de donnée vierge. On utilisera l'adresse de connexion comme indiqué ci-dessous.
Ensuite une fois le répo clone:

On se rend dans le bon dossier `cd /sos_chomage`.

Ensuite: 
```
npm install
cd /frontend
npm install
```

Dans backend il faut créer un ficher `.env`. Dans lequel on va rajouter ceci: 
```
PORT=8000
DATABASE= adresse de connexion de votre mongoDB
JWT_SECRET=jidsdbsFGDC19923
```

Enfin, la meilleure partie. Pour run il faut ouvrir deux terminaux. Un en étant dans le dossier backend et l'autre dans le dossier frontend.
```
cd backend
npm start
```
Dans l'autre terminal.
```
cd frontend 
npm start
```