# Guía Rápida: Uso de Playwright con Yarn y Codegen para Testing de Next.js

---

## 1. Instalación

```bash
yarn add -D playwright #Instala Playwright
yarn playwright install #Instala los navegadores
```
## 2. Inicializar proyecto Playwright

```bash
npx playwright test init
```

## 3. Generar tests con Codegen
Escribir este comando en la consola:

```bash
yarn playwright codegen http://localhost:3000
```

- Esto abrirá un navegador con tu app.

- Interactúa con la página para que Playwright genere el código automáticamente.

- Copia el código generado para crear tus tests.

## 4. Crear archivo de test

```ts
import { test, expect } from '@playwright/test';

test('llenar y enviar formulario', async ({ page }) => {
  // Pegar aquí el código generado por codegen
});
```

## 5. Ejecutar los tests

```bash
yarn playwright test
```

## 6. Ver reporte HTML

```bash
yarn playwright show-report
```

## 7. Configuración recomendada de **playwright.config.ts**

```ts
import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  testDir: './tests',
  fullyParallel: true,
  retries: 0,
  reporter: 'html',
  use: {
    trace: 'on-first-retry',
    headless: false,
    video: 'on',
  },
  projects: [
    { name: 'chromium', use: { ...devices['Desktop Chrome'] } },
    { name: 'firefox', use: { ...devices['Desktop Firefox'] } },
    { name: 'webkit', use: { ...devices['Desktop Safari'] } },
  ],
});
```

## Notas importantes
- No es necesario instalar nada adicional para usar codegen, viene incluido con Playwright.

- Es importante correr yarn playwright install para descargar los navegadores.
- El uso **headless: false**  es para ver los tests en ejecución mientras desarrollas. Se cambia a **headless: true** para ejecuciones en CI o cuando no se necesita la UI.