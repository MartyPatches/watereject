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
