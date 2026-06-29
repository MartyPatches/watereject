# Vattenutkast

En liten webbsida som spelar upp en ljudvåg (svep 50–500 Hz eller fast 165 Hz)
för att hjälpa till att trycka ut vatten ur en telefonhögtalare.

## Publicering med GitHub Pages

Sidan ligger som [`index.html`](index.html) i repo-roten och publiceras
automatiskt via GitHub Actions (se [`.github/workflows/pages.yml`](.github/workflows/pages.yml)).

### Aktivera Pages (görs en gång)

1. Gå till repots **Settings → Pages**.
2. Under **Build and deployment → Source**, välj **GitHub Actions**.

Därefter körs deploy-workflowen automatiskt vid varje push till
branchen `claude/github-pages-setup-q5iw4q` (och `main`). När den är klar
hittar du adressen under workflow-körningens "Deploy to GitHub Pages"-steg,
oftast:

```
https://martypatches.github.io/watereject/
```

### Användning

Öppna sidan i mobilen, maxa volymen, stäng av tyst läge och håll högtalaren
nedåt. Använd **inte** hörlurar.
