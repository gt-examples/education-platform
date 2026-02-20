import path from "path";
import fs from "fs";

export default async function loadTranslations(
  locale: string
): Promise<Record<string, unknown> | undefined> {
  const filePath = path.join(process.cwd(), "public", "gt", `${locale}.json`);
  try {
    const content = fs.readFileSync(filePath, "utf-8");
    return JSON.parse(content);
  } catch {
    return undefined;
  }
}
