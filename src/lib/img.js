// Works whether an image import is a plain URL string or a Next.js static image object.
export const img = (value) => (typeof value === 'string' ? value : value?.src ?? '')
