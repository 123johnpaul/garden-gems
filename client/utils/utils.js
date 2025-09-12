export function formatNaira(amount) {
  // Handle null, undefined, or non-numeric values
  if (amount == null || isNaN(amount)) {
    return "₦0.00";
  }

  // Convert to number if it's a string
  const numAmount = typeof amount === "string" ? parseFloat(amount) : amount;

  return new Intl.NumberFormat("en-NG", {
    style: "currency",
    currency: "NGN",
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }).format(numAmount);
}

// 1. Flatten params (extract JSON inside ?value=...)
export const flattenParams = (params) => {
  let flat = { ...params };

  // value holds encoded JSON: %7B"firstname":"Test",...%7D
  if (flat.value) {
    try {
      const decoded = decodeURIComponent(flat.value);
      // decoded now => {"firstname":"Test",...}
      const parsed = JSON.parse(decoded);
      flat = { ...flat, ...parsed };
    } catch (e) {
      console.warn("Could not parse value param", e);
    }
    delete flat.value;
  }

  // reason often becomes "[object Object]" - discard
  delete flat.reason;
  delete flat._debugInfo;
  delete flat.status;

  // Normalize reference
  if (!flat.reference && flat.trxref) flat.reference = flat.trxref;
  // Keep trxref only if you want; otherwise drop
  delete flat.trxref;

  return flat;
};
