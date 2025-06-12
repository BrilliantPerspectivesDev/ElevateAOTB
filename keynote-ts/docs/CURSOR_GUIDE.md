# Cursor Guide: Implementing JSON-Driven Event Page

## Overview
This guide will help you use Cursor to implement a JSON-driven event page. The page uses a central JSON file to manage all content, making it easy to update and maintain.

## Prerequisites
- Cursor IDE installed
- Basic understanding of Next.js and TypeScript
- Project set up with Tailwind CSS

## Step-by-Step Implementation

### 1. Setting Up the JSON Structure
```bash
# Create the content directory
mkdir -p src/content

# Create the event content file
touch src/content/eventContent.json
```

### 2. JSON Schema Rules
- Keep all content in `src/content/eventContent.json`
- Follow this structure for each section:
  ```json
  {
    "sectionName": {
      "headline": "string (max 100 chars)",
      "description": "string (max 200 chars)",
      "cta": "string (max 50 chars)"
    }
  }
  ```
- Use consistent naming: camelCase for all keys
- Keep text concise and scannable
- Include all required fields for each section

### 3. Component Implementation Rules

#### For Each Component:
1. Add 'use client' directive if using client-side features
2. Import the JSON content:
   ```typescript
   import eventContent from '@/content/eventContent.json'
   ```
3. Use TypeScript interfaces for type safety
4. Follow mobile-first responsive design
5. Use Tailwind classes consistently

#### Component Structure:
```typescript
'use client'

import { eventContent } from '@/content/eventContent.json'

interface ComponentProps {
  // Define props
}

export function Component({ props }: ComponentProps) {
  return (
    <section>
      <h2>{eventContent.sectionName.headline}</h2>
      <p>{eventContent.sectionName.description}</p>
      <GradientCTAButton href="#register">
        {eventContent.sectionName.cta}
      </GradientCTAButton>
    </section>
  )
}
```

### 4. Cursor-Specific Tips

#### Using Cursor Effectively:
1. **Code Navigation**
   - Use `Cmd/Ctrl + P` to quickly find files
   - Use `Cmd/Ctrl + Shift + F` to search across files
   - Use `Cmd/Ctrl + Click` to jump to definitions

2. **AI Assistance**
   - Use `/` to start a command
   - Ask for help with specific tasks:
     - "Create a new component for X"
     - "Update the JSON structure for Y"
     - "Fix the styling for Z"

3. **Quick Fixes**
   - Use `Cmd/Ctrl + .` for quick fixes
   - Let Cursor suggest imports
   - Use AI to generate TypeScript interfaces

### 5. Common Tasks

#### Adding a New Section:
1. Add the section to `eventContent.json`
2. Create a new component file
3. Import and use the content
4. Add the component to the page

#### Updating Content:
1. Edit `eventContent.json`
2. Components will automatically reflect changes
3. No need to modify component code

#### Styling Guidelines:
- Use Tailwind classes consistently
- Follow the color palette:
  - Bone
  - Sand
  - Ochre
  - Moss
  - Celadon
  - Charcoal
- Maintain mobile responsiveness
- Use consistent spacing

### 6. Troubleshooting

#### Common Issues:
1. **Component Not Rendering**
   - Check 'use client' directive
   - Verify JSON import path
   - Check component export

2. **TypeScript Errors**
   - Define interfaces for all props
   - Use proper type imports
   - Check JSON structure matches types

3. **Styling Issues**
   - Verify Tailwind classes
   - Check mobile breakpoints
   - Ensure color classes exist

### 7. Best Practices

#### Code Organization:
- Keep components in `src/components`
- Keep content in `src/content`
- Use consistent file naming
- Follow TypeScript best practices

#### Performance:
- Use proper image optimization
- Implement lazy loading
- Keep components focused

#### Accessibility:
- Use semantic HTML
- Include proper ARIA labels
- Ensure keyboard navigation
- Maintain color contrast

### 8. Maintenance

#### Regular Tasks:
1. Update content in JSON
2. Check mobile responsiveness
3. Verify all links work
4. Test across browsers
5. Update dependencies

#### Version Control:
- Commit JSON changes separately
- Document major updates
- Keep component changes focused

## Example Commands for Cursor

```bash
# Create new component
/cursor create component NewSection

# Update JSON structure
/cursor update json eventContent.json

# Fix styling issues
/cursor fix styling NewSection

# Generate TypeScript interface
/cursor generate interface EventContent
```

## Need Help?
- Use Cursor's AI assistant
- Check the documentation
- Review the example components
- Ask for specific guidance

Remember: The key to success is maintaining consistency in both the JSON structure and component implementation. Use Cursor's AI features to help maintain this consistency. 