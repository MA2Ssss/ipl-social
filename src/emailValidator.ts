export function isValidEmail(email: string): boolean {


  if (email.includes(" ")) return false;


  const parts = email.split("@");
  if (parts.length !== 2) return false;

  const [before, after] = parts;

  if (!before || !after) return false;

  if (!after.includes(".")) return false;

  if (after.endsWith(".")) return false;

  return true;
}
