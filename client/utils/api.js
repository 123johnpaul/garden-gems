const API_BASE_URL = "http://localhost:5000";

export async function postData(endpoint, data) {
  const response = await fetch(`${API_BASE_URL}/${endpoint}`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });

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
      // Non-JSON response; leave parsed undefined
    }
  }

  if (!response.ok) {
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

export async function fetchData(endpoint) {
  try {
    const response = await fetch(`${API_BASE_URL}${endpoint}`);
    const data = await response.json();
    return data;
  } catch (err) {
    throw err.message;
  }
}

export async function verifyPayment(endpoint){
      try {    
        const response = await fetch(`http://localhost:4000${endpoint}`);
        const data = await response.json();
        return {...data, status: response.status}
      } catch (error) {
        throw err.message
      }
}