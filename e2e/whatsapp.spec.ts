import { test, expect } from "@playwright/test";

test("fluxo de WhatsApp com diarista pelo nome", async ({ page }) => {
  const diaristaNome = "Joana Silva";
  const telefone = "21988880002";

  await page.goto("http://localhost:8081/");
  await page.getByRole("link", { name: "Rio de Janeiro" }).click();

  // 1️
  const diaristaCard = page
    .locator('div:has-text("' + diaristaNome + '")')
    .first();

  const verDetalhesButton = diaristaCard.getByRole("link", {
    name: "Ver detalhes",
  });
  await expect(verDetalhesButton).toBeVisible({ timeout: 10000 });
  await verDetalhesButton.click();

  const contratarButton = page.getByText("Quero Contratar");
  await expect(contratarButton).toBeVisible();
  await contratarButton.click();

  // Abre o WhatsApp e captura a nova página
  const [whatsappPage] = await Promise.all([
    page.waitForEvent("popup"),
    page.getByRole("button", { name: "WhatsApp" }).click(),
  ]);

  // Verifica se a URL contém o telefone correto
  await expect(whatsappPage).toHaveURL(new RegExp(telefone));
});
