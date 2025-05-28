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

export function getExcerpt(content: string) {
  let plainText = content
    // Remove JSX/React components and HTML tags
    .replace(/<[^>]*>/g, '')
    // Remove markdown headers
    .replace(/^#{1,6}\s+/gm, '')
    // Remove markdown bold/italic
    .replace(/(\*\*|__)(.*?)\1/g, '$2')
    .replace(/(\*|_)(.*?)\1/g, '$2')
    // Remove markdown links
    .replace(/\[([^\]]*)\]\([^)]*\)/g, '$1')
    // Remove markdown images
    .replace(/!\[([^\]]*)\]\([^)]*\)/g, '$1')
    // Remove code blocks and inline code
    .replace(/```[\s\S]*?```/g, '')
    .replace(/`([^`]*)`/g, '$1')
    // Remove markdown lists
    .replace(/^[\s]*[-*+]\s+/gm, '')
    .replace(/^\d+\.\s+/gm, '')
    // Remove blockquotes
    .replace(/^>\s+/gm, '')
    // Remove horizontal rules
    .replace(/^[-*_]{3,}$/gm, '')
    // Remove extra whitespace and newlines
    .replace(/\n+/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();

  return plainText.slice(0, 300) + (plainText.length > 300 ? "..." : "");
}