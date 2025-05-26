import { test, expect } from "@playwright/test";

test("Formulario se completa correctamente (espero)", async ({ page }) => {
  await page.goto("http://localhost:3000");

  await page.fill('input[name="name"]', "Daron El mejor");
  await page.fill('input[name="email"]', "IngenieroDaron@gmail.com");

  await Promise.all([
    page.waitForEvent("dialog").then((dialog) => {
      expect(dialog.message()).toContain("Gracias, Juan");
      dialog.dismiss();
    }),
    page.click('button[type="submit"]'),
  ]);
});

