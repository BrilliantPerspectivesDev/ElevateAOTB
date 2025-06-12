## [Date: 2024-06-12] Increased Top Padding in Hero Section
- Increased the top padding of the hero text in `Hero.tsx` by changing `pt-8` to `pt-12` on the main content wrapper div. This adds more space above the hero text for improved visual balance. 

## [Date: 2024-06-12] Increased Hero Header Top Padding
- Increased the top padding of the hero header by changing pt-12 to pt-20 for more space above the hero content in Hero.tsx

## [Date: 2024-06-12] Added Date to Hero Header
- Added a clear, prominent date below the main hero heading in the Hero component for better event clarity.

## [Date: 2024-06-12] Center-Aligned Hero Header and Date
- Center-aligned the hero header text and date by adding text-center to the container in Hero.tsx for improved visual hierarchy.

## [Date: 2024-06-12] Restructured Speakers Component
- Modified the Speakers component to show three speakers and a host who are present all three days
- Updated the data structure to separate speakers and host
- Simplified the day structure to just show dates
- Updated the layout to show the host prominently above the three speakers
- Updated the description text to reflect the new format
- Maintained the tabbed interface for the three days 

## [Date: 2024-06-12] Refactored Speakers Section to Card Grid
- Refactored the Speakers component to a simple responsive grid of four cards (three speakers + host)
- Each card now features a large rounded-corner image, name, subtitle/role, and short bio
- Removed tabs and vertical orientation logic
- Updated data structure to include bios for each person
- Used event style headings and color palette for consistency 

## [Date: 2024-06-12] Added SalesLetter Component
- Created a new SalesLetter component featuring a large heading, several paragraphs of placeholder content, and a prominent CTA button
- Section is centered, uses event color palette, and is fully responsive 

## [Date: 2024-06-12] Added SalesLetter to Main Page
- Imported and added the SalesLetter component to the main page (src/app/(main)/page.tsx), placing it after Hero and before Features for a logical sales flow. 

## [Date: 2024-06-12] Added CTA Buttons to All Sections
- Added a CTA button to the end of the Features, Speakers, Schedule, Sponsors, and Newsletter sections
- Each button uses the label 'Get Your Ticket', links to '#', and matches the event's color palette and responsive styling 

## [Date: 2024-06-12] Center-Aligned All Section CTA Buttons
- Center-aligned all CTA buttons in Features, Speakers, Schedule, Sponsors, and Newsletter sections by wrapping each in a flex justify-center div and removing w-full from the Button for consistent alignment 

## [Date: 2024-06-12] Made All CTA Buttons Green
- Updated all CTA buttons in Features, Speakers, Schedule, Sponsors, Newsletter, and SalesLetter sections to use green styling (bg-moss, hover:bg-celadon, text-charcoal) for consistency with the event palette

## [Date: 2024-06-12] Button Component Color Override Fix
- Removed hardcoded color classes from the Button component so custom color classes passed via className take effect
- Only base layout, spacing, and focus/active classes remain for maximum flexibility

## [Date: 2024-06-12] Removed Hero Stats Section
- Removed the stats section (Speakers, People Attending, Venue, Location) from the Hero component for a cleaner hero area.

## [Date: 2024-06-12] Added Urgency Components
- Added CountdownTimer component: counts down to a target date with large, bold numbers and labels
- Added UrgencyBanner component: full-width colored banner with urgent text
- Added LimitedSpots component: shows a progress bar and 'Only X tickets left!' text
- All components use the event color palette and are responsive

## [Date: 2024-06-12] Deleted Sponsors and Schedule Components
- Deleted the Sponsors and Schedule component files
- Removed all imports and usage of these components from the main page

## [Date: 2024-06-12] Added Urgency and Event Overview Components to Main Page
- Added UrgencyBanner at the top of the main page
- Added CountdownTimer and LimitedSpots after Hero
- Added EventDays after SalesLetter
- Ensured all new components use event palette and are responsive

## [Date: 2024-06-12] Removed and Deleted LimitedSpots Component
- Removed the import and usage of the LimitedSpots ('17 tickets left') component from the main page
- Deleted the LimitedSpots component file from the codebase

## [Date: 2024-06-12] Removed and Deleted UrgencyBanner Component
- Removed the import and usage of the UrgencyBanner component from the main page
- Deleted the UrgencyBanner component file from the codebase

## [YYYY-MM-DD] Update eventContent.json with new copy

- Replaced all content in `keynote-ts/src/content/eventContent.json` with the latest user-provided JSON.
  - Updated AnnouncementBanner, Hero, SalesLetter, EventDays, Features, Speakers, CTA Section, Testimonials, FAQ, and Footer with new copy, structure, and details as provided.
- All sections now reflect the most current event messaging, speaker bios, testimonials, and FAQ per user direction.

## [YYYY-MM-DD] Stack EventDays Boxes Vertically

- Updated `EventDays.tsx` so the event day boxes are always stacked vertically (one per row) on all screen sizes.
- Removed `sm:grid-cols-3` from the grid container, so it never switches to a horizontal layout.

## [YYYY-MM-DD] Refactor EventDays to Two-Column Layout

- Refactored `EventDays.tsx` so each event day is now a two-column row: left column for the day, right column for the theme and description.
- On mobile, columns stack vertically; on sm+ screens, they display side by side using `sm:grid-cols-2`.
- Added visual separation and improved responsive design for clarity and accessibility.

## [YYYY-MM-DD] Remove Personal Journey and Target Breakthrough from EventDays

- Edited `eventContent.json` to remove the following from each event day description:
  - Graham's personal journey and 'Target Breakthrough' from Day 1
  - Dionne's personal journey and 'Target Breakthrough' from Day 2
  - Jenny's personal journey and 'Target Breakthrough' from Day 3
- Only the core permission and learning content remains for each day.

## [YYYY-MM-DD] Remove 'The 3 Permissions That Change Everything' Paragraph from SalesLetter

- Removed the final paragraph in `salesLetter.paragraphs` that began with 'The 3 Permissions That Change Everything: ...' from `eventContent.json`.
- This keeps the sales letter focused and avoids redundancy with the rest of the page content.

## [YYYY-MM-DD] Update CTA Section Description

- Updated `ctaSection.description` in `eventContent.json` with new copy:
  - Old: "You don't have to spend another day trying to fix yourself. The permissions you need are already available - you just need credible guides to help you discover and live from them. Join Graham, Dionne, and Jenny for three days that could transform your entire relationship with God and yourself. June 19-21, 2025 | 90 Minutes Each Day | Virtual Event"
  - New: "You don't have to spend another day trying to fix yourself. The three permissions that end the exhausting cycle are waiting to be discovered. Join us for three days where you'll learn to live from rest instead of striving and discover the relational way to grow with God. June 19-21, 2025 | 90 Minutes Each Day | Virtual Event"

## [YYYY-MM-DD] Unify All CTA Button Labels to 'Secure my seat Today'

- Updated all CTA button labels in `eventContent.json` (hero, salesLetter, features, speakers, ctaSection) to 'Secure my seat Today' for consistency.
- Updated `GradientCTAButton.tsx` to always display 'Secure my seat Today' as the main label, regardless of children, and kept the event details as the sub-label.
- Ensures a unified, clear CTA across the entire site.

## [YYYY-MM-DD] Add CTA Button to EventDays Section

- Added a centered CTA button below the event day boxes in the EventDays section, using the unified GradientCTAButton and the event registration link.
- Ensures a clear call to action is present after the event overview.

## [YYYY-MM-DD] Move Hero CTA Button Above Countdown

- Moved the CTA button in the Hero section above the countdown timer for improved visual hierarchy and clarity.
- Maintained spacing and layout for a clean appearance.

---