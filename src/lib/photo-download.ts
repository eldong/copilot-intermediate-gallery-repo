export interface PhotoDownloadRequest {
  url: string;
  title: string;
}

const CONTENT_TYPE_EXTENSIONS: Record<string, string> = {
  'image/jpeg': 'jpg',
  'image/png': 'png',
  'image/webp': 'webp',
  'image/gif': 'gif',
  'image/svg+xml': 'svg',
};

export class PhotoDownloadError extends Error {
  constructor(message: string) {
    super(message);
    this.name = 'PhotoDownloadError';
  }
}

/**
 * Downloads a browser-accessible photo URL using a generated file name from the
 * photo title and response type. Throws PhotoDownloadError when the URL cannot
 * be fetched or when called outside the browser.
 */
export async function downloadPhoto({ url, title }: PhotoDownloadRequest): Promise<void> {
  if (!url.trim()) {
    throw new PhotoDownloadError('This photo does not have a download URL.');
  }

  if (typeof window === 'undefined' || typeof document === 'undefined') {
    throw new PhotoDownloadError('Photo downloads are only available in the browser.');
  }

  const response = await fetch(url);

  if (!response.ok) {
    throw new PhotoDownloadError('Unable to download this photo. Please try again.');
  }

  const blob = await response.blob();
  const objectUrl = window.URL.createObjectURL(blob);
  const link = document.createElement('a');

  link.href = objectUrl;
  link.download = getPhotoDownloadFileName(title, blob.type, url);
  document.body.appendChild(link);
  link.click();
  link.remove();
  window.setTimeout(() => window.URL.revokeObjectURL(objectUrl), 0);
}

function getPhotoDownloadFileName(title: string, contentType: string, sourceUrl: string): string {
  const safeTitle = title
    .trim()
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '') || 'photo';

  return `${safeTitle}.${getFileExtension(contentType, sourceUrl)}`;
}

function getFileExtension(contentType: string, sourceUrl: string): string {
  if (CONTENT_TYPE_EXTENSIONS[contentType]) {
    return CONTENT_TYPE_EXTENSIONS[contentType];
  }

  const extension = sourceUrl.split('?')[0]?.match(/\.([a-z0-9]+)$/i)?.[1];
  return extension || 'jpg';
}
