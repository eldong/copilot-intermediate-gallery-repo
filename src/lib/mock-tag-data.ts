export interface TagCategory {
  name: string;
  tags: string[];
}

// Organizing tags by categories for better structure
export const PHOTO_TAGS = {
  SUBJECT: [
    'landscape',
    'portrait',
    'architecture',
    'nature',
    'wildlife',
    'street',
  ],
  EVENT: [
    'wedding',
    'professional',
  ],
  STYLE: [
    'studio',
    'macro',
  ],
  LOCATION: [
    'city',
    'building',
  ]
} as const;

// Flat array of all available tags (for backwards compatibility)
export const AVAILABLE_TAGS = Object.values(PHOTO_TAGS)
  .flat()
  .sort() as string[];