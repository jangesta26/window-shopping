const slugify = (text: string): string => {
  return text
    .toString()
    .toLowerCase()
    .trim()
    .replace(/\s+/g, '-')        // Replace spaces with dashes
    .replace(/[^\w\-]+/g, '')    // Remove all non-word characters
    .replace(/\-\-+/g, '-')      // Replace multiple dashes with a single dash
    .replace(/^-+/, '')          // Remove leading dashes
    .replace(/-+$/, '');         // Remove trailing dashes
};
export default slugify