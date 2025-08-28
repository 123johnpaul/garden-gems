export async function postData(endpoint, data) {
  const response = await fetch(`${process.env.API_BASE_URL}${endpoint}`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });

  // Read body (may be empty) before deciding what to return / throw
  let rawText;
  try {
    rawText = await response.text();
  } catch (_) {
    rawText = "";
  }

  let parsed;
  if (rawText) {
    try {
      parsed = JSON.parse(rawText);
    } catch {
      // Non‑JSON response; leave parsed undefined
    }
  }

  if (!response.ok) {
    // Prefer explicit backend error fields
    const message =
      (parsed && (parsed.error || parsed.message)) ||
      `Request failed (${response.status})`;
    const err = new Error(message);
    err.status = response.status;
    err.data = parsed;
    throw err;
  }

  return parsed ?? {};
}
