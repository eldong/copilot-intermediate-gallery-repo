# Generate Mock Photo Data

Please generate additional mock photo data entries for the photo gallery application. The data should follow the existing structure in `mock-photo-data.ts`.

## Instructions

1. How many new photo entries would you like to add to the mock data? (Please specify a number)

## Data Structure Reference
Each photo entry should include:
```typescript
{
  id: string;          // Unique identifier
  url: string;         // Path to photo (format: '/placeholder-{number}.jpg')
  title: string;       // Descriptive title
  tags: string[];      // Array of relevant tags
  likes: number;       // Number of likes (range: 50-500)
  downloads: number;   // Number of downloads (range: 20-200)
  views: number;       // Number of views (range: 500-5000)
  photographer: string;// Photographer's name
  dateTaken: string;   // ISO date format (YYYY-MM-DD)
}
```

## Requirements
- Each entry should have unique IDs continuing from the last ID in the existing data
- URLs should follow the pattern '/placeholder-{number}.jpg'
- Include diverse photo categories (landscape, portrait, architecture, nature, etc.)
- Use realistic engagement numbers (likes, downloads, views)
- Include dates within the last 6 months
- Provide varied but realistic photographer names
- Include 3-5 relevant tags per photo

## Example Entry
```typescript
{
  id: '10',
  url: '/placeholder-10.jpg',
  title: 'Morning Mist Valley',
  tags: ['landscape', 'morning', 'fog', 'nature'],
  likes: 178,
  downloads: 67,
  views: 1843,
  photographer: 'Rachel Green',
  dateTaken: '2024-01-20'
}
```

Please provide the number of entries you'd like to generate, and I'll help create new mock data that matches these requirements.
