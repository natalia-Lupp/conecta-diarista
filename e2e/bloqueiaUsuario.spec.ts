import { test, expect } from "@playwright/test";

test("fluxo de bloquear diarista pelo nome", async ({ page }) => {
  const diaristaId = 1;

  await page.goto("http://localhost:8081/");

  await page.getByRole("link", { name: "São Paulo" }).click();

  const verDetalhesButton = page.locator(`a[href="/profile/${diaristaId}"]`);
  await verDetalhesButton.click();

  const contratarButton = page.getByText("Quero Contratar");
  await contratarButton.click();

  const bloquearButton = page.getByRole("button", { name: "Bloquear" });
  await bloquearButton.click();

  const modalBloqueio = page.getByText(/foi bloqueada/);
  await expect(modalBloqueio).toBeVisible();
});
