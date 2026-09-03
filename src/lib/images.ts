/** Build a responsive srcSet from sized siblings: photo.webp + photo-480.webp … */
export function photoSrcSet(src: string, widths: number[], fullWidth?: number) {
  const parts = widths.map((width) => `${src.replace(/(\.\w+)$/, `-${width}$1`)} ${width}w`)
  if (fullWidth) parts.push(`${src} ${fullWidth}w`)
  return parts.join(', ')
}
