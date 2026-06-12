export function assetPath(path: string) {
  if (!path) return '';
  if (/^https?:\/\//.test(path)) return path;
  const cleanBase = import.meta.env.BASE_URL || './';
  const cleanPath = path.startsWith('/') ? path.slice(1) : path;
  return `${cleanBase}${cleanPath}`.replace(/([^:]\/)\/+/g, '$1');
}
