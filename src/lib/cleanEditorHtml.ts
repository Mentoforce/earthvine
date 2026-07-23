// export function cleanEditorHtml(html: string) {
//   return (
//     html

//       // Remove MS Office classes
//       .replace(/\sclass="Mso[^"]*"/gi, "")

//       // Remove inline styles
//       .replace(/\sstyle="[^"]*"/gi, "")

//       // Remove ALL empty paragraphs
//       .replace(/<p[^>]*>(?:\s|&nbsp;|<br\s*\/?>)*<\/p>/gi, "")

//       // Remove ALL empty divs
//       .replace(/<div[^>]*>(?:\s|&nbsp;|<br\s*\/?>)*<\/div>/gi, "")

//       // Remove empty spans
//       .replace(/<span[^>]*>(?:\s|&nbsp;)*<\/span>/gi, "")

//       // Remove multiple blank lines
//       .replace(/\n\s*\n/g, "\n")

//       .trim()
//   );
// }
export function cleanEditorHtml(html: string) {
  return (
    html
      // Remove MS Office classes
      .replace(/\sclass="Mso[^"]*"/gi, "")

      // Remove inline styles
      .replace(/\sstyle="[^"]*"/gi, "")

      // Remove empty paragraphs
      .replace(/<p[^>]*>(?:\s|&nbsp;|&#160;|<br\s*\/?>)*<\/p>/gi, "")

      // Remove empty divs
      .replace(/<div[^>]*>(?:\s|&nbsp;|&#160;|<br\s*\/?>)*<\/div>/gi, "")

      // Remove empty spans
      .replace(/<span[^>]*>(?:\s|&nbsp;|&#160;)*<\/span>/gi, "")

      // ✅ Remove empty headings
      .replace(
        /<h[1-6][^>]*>(?:\s|&nbsp;|&#160;|<br\s*\/?>|<(?:strong|b|em|i)>|<\/(?:strong|b|em|i)>)*<\/h[1-6]>/gi,
        "",
      )

      // Remove multiple blank lines
      .replace(/\n\s*\n/g, "\n")

      .trim()
  );
}
