# RevisaCar Pages

Site estático do RevisaCar, publicado com páginas HTML simples e assets locais.

## Estrutura

```text
.
├── index.html
├── lojas.html
├── privacy_policy.html
├── 404.html
├── assets/
│   ├── css/
│   │   ├── index.css
│   │   ├── lojas.css
│   │   ├── privacy-policy.css
│   │   └── 404.css
│   ├── js/
│   │   └── lojas.js
│   ├── apple-logo.png
│   ├── document.png
│   ├── icon.png
│   └── play.png
├── CNAME
└── README.md
```

## Padrão

- HTML fica responsável por conteúdo, semântica e links.
- CSS fica em `assets/css/`, separado por página.
- JavaScript fica em `assets/js/`.
- Imagens e ícones ficam em `assets/`.
- Caminhos devem permanecer relativos para funcionar em hospedagem estática.

## Desenvolvimento local

```bash
python3 -m http.server 4173
```

Depois acesse `http://127.0.0.1:4173/`.
