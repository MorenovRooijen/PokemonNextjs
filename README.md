# Opzetten projec

## Eerste installatie

Voor de eerste installatie is het nodig om de juiste packages te installeren voor de map nextjs. Dit kan gedaan worden met de volgende regel.

```sh
npm install
```

Deze stap moet elke keer worden gedaan wanneer er extra packages zijn toegevoegd aan het project.

## NextJS opstarten

Om de NextJS website op te starten, moeten je in de nextjs folder zitten. Hierna kan je hem opstarten

```sh
cd nextjs
npm run dev
```

De terminal geeft daarna aan op welke poort de website te bekijken is.
Standaard is dit: http://localhost:3000

## Test omgeving inrichting

Productie vereist het gebruik van PM2.
In de map nextjs start de applicatie op met
pm2 start "npm run dev" --name PROJECTNAAM

```sh
cd nextjs
pm2 stop PROJECTNAAM
pm2 start "npm run dev" --name PROJECTNAAM
```
