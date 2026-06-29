# Vattenutkast

En liten webbsida som spelar upp en ljudvåg (svep 50–500 Hz eller fast 165 Hz)
för att hjälpa till att trycka ut vatten ur en telefonhögtalare.

## Publicering med GitHub Pages

Sidan ligger som [`index.html`](index.html) i repo-roten och publiceras
via GitHub Pages med källan **Deploy from a branch** (branchen `main`, mappen
`/ (root)`). GitHub serverar då `index.html` direkt — ingen byggsteg behövs.

### Inställning (görs en gång)

1. Gå till repots **Settings → Pages**.
2. Under **Build and deployment → Source**, välj **Deploy from a branch**.
3. Välj branch **`main`** och mapp **`/ (root)`**, spara.

Sidan publiceras sedan på:

```
https://martypatches.github.io/watereject/
```

Varje push till `main` uppdaterar sidan automatiskt.

### Användning

Öppna sidan i mobilen, maxa volymen, stäng av tyst läge och håll högtalaren
nedåt. Använd **inte** hörlurar.

## Lägg till på hemskärmen (app-läge)

Sidan är en installerbar webbapp (PWA) med manifest, ikoner och en service
worker som cachar app-skalet så att den funkar offline efter första besöket.

- **iPhone (Safari):** Dela-knappen → *Lägg till på hemskärmen*.
- **Android (Chrome):** menyn ⋮ → *Installera app* / *Lägg till på hemskärmen*.

Appen öppnas då i helskärm utan adressfält, med egen ikon och namnet
"Vattenutkast".

Relaterade filer: [`manifest.webmanifest`](manifest.webmanifest),
[`sw.js`](sw.js) och ikonerna i [`icons/`](icons/).
