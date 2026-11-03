export const API_URL = "https://api.alliesbar.com";

/** Nest sends `message` as a string, or as a list for validation errors. */
export function apiErrorMessage(body: { message?: string | string[] } | null): string | undefined {
  const message = body?.message;
  return Array.isArray(message) ? message.join(" ") : message;
}
