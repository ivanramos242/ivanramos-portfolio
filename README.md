# Ivan Ramos Portfolio

Portfolio personal estático desplegado en Cloudflare Pages y EasyPanel.

## Desarrollo local

Sirve el directorio con cualquier servidor estático:

```bash
npx serve .
```

## Despliegue

- Cloudflare Pages publica la rama `main`.
- EasyPanel construye el `Dockerfile` desde la rama `main`.
