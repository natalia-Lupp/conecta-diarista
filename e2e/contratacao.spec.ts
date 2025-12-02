import { test, expect } from "@playwright/test";

test("fluxo de contratação de diarista", async ({ page }) => {
  const diaristaId = 1;

  await page.goto("http://localhost:8081/");

  await page.getByRole("link", { name: "São Paulo" }).click();

  const verDetalhesButton = page.locator(`a[href="/profile/${diaristaId}"]`);
  await verDetalhesButton.click();

  const contratarButton = page.getByText("Quero Contratar");
  await contratarButton.click();

  const actionContratarButton = page.getByRole("button", { name: "Contratar" });
  await actionContratarButton.click();

  const modalContratacao = page.getByText(/foi contratada com sucesso/);
  await expect(modalContratacao).toBeVisible();
});
