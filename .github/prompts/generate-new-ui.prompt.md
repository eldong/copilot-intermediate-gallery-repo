---
mode: 'agent'
description: 'Generate a new UI component following project patterns'
tools: ['codebase', 'editFiles']
---

# Create New UI Component

## Context
Generate a new UI component for the Photo Gallery & Portfolio application following established patterns and conventions.

## Project Patterns to Follow
- Use TypeScript with strict interfaces
- Follow the SectionContainer/SectionTitle layout pattern
- Implement responsive design with Tailwind CSS
- Include dark mode support
- Add Framer Motion animations where appropriate
- Use Lucide React icons
- Follow accessibility best practices

## Component Requirements
1. Create TypeScript interface for props
2. Use proper Tailwind classes with dark mode variants
3. Include JSDoc comments
4. Export component and types
5. Follow naming conventions (PascalCase for components)
6. Implement responsive design patterns

## File Structure
Place components in appropriate directories:
- Layout components: `src/components/ui/layout/`
- Feature components: `src/components/gallery/` or `src/components/upload/`
- Generic UI: `src/components/ui/`

## Example Usage Pattern
```tsx
<SectionContainer>
  <SectionTitle title="Component Name" />
  {/* Component content */}
</SectionContainer>
```

Create the component following these patterns and include usage examples.