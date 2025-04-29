export function DateFormatter(dateString: string, format: string): string {
  let date = null;
  // Check if the string is a 4-digit year only
  if (/^\d{4}$/.test(dateString)) {
    date = new Date(parseInt(dateString, 10), 0, 1); // January 1st of that year
  }
  // Check if it's a year-month format (YYYY-MM)
  else if (/^\d{4}-\d{1,2}$/.test(dateString)) {
    const [year, month] = dateString.split("-").map((num) => parseInt(num, 10));
    date = new Date(year, month - 1, 1); // First day of that month (months are 0-indexed)
  }
  // For checking year-range, for now I just pass the string back as is
  //   else if (/^\d{4}-(\d{4}|present)$/i.test(dateString){
  //   }
  // Else just parse it normally
  else {
    date = new Date(dateString);
  }

  switch (format) {
    case "year":
      return date.getFullYear().toString();

    case "month-year":
      return date.toLocaleDateString("en-US", {
        year: "numeric",
        month: "short",
      });
    case "year-range":
      return dateString;
    case "full":
    default:
      return date.toLocaleDateString("en-US", {
        year: "numeric",
        month: "short",
        day: "numeric",
      });
  }
}
