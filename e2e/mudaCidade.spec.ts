import { test, expect, Page } from "@playwright/test";

async function selecionarCidade(page: Page, cidade: string) {
  await page.getByRole("link", { name: cidade }).click();
}

async function clicarDiarista(page: Page, nome: string) {
  const card = page.locator(`div:has-text("${nome}")`).first();
  await expect(card).toBeVisible({ timeout: 10000 });
  await card.click();
}

test("fluxo de mudança de cidade e seleção de diarista", async ({ page }) => {
  await page.goto("http://localhost:8081/");

  await selecionarCidade(page, "São Paulo");
  await clicarDiarista(page, "Maria Souza");
  await clicarDiarista(page, "Ana Lima");

  await page.getByRole("link", { name: "Conecta Diarista, back" }).click();
  await selecionarCidade(page, "Rio de Janeiro");
  await clicarDiarista(page, "Joana Silva");
});
