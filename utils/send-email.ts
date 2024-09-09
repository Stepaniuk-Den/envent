import { FormData } from "@/app/[locale]/components/ContactUsForm";

export async function sendEmail(data: FormData) {
  const apiEndpoint = "/api/email";
  const response = await fetch(apiEndpoint, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });
  if (!response.ok) {
    throw new Error(`Error: ${response.statusText}`);
  }

  return response.json();
}
