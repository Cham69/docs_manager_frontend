# Dashboard Layout Components

This directory contains reusable layout components for the Docs Manager application.

## Components

### DashboardLayout
The main layout wrapper that includes header, sidebar, and footer. It manages the mobile sidebar state and provides a responsive layout structure.

**Props:**
- `children`: React nodes to render in the main content area

**Usage:**
```tsx
import { DashboardLayout } from './layouts';

function MyPage() {
  return (
    <DashboardLayout>
      <h1>My Page Content</h1>
      {/* Your page content here */}
    </DashboardLayout>
  );
}
```

### Header
A responsive header component with:
- Mobile menu button (hamburger menu)
- Logo/brand name
- Search bar (hidden on mobile)
- Notifications icon
- User profile menu

**Props:**
- `onMenuClick`: Function to toggle the mobile sidebar

### Sidebar
A responsive sidebar with:
- Navigation menu items
- Independent scrolling (doesn't scroll with main content)
- Mobile off-canvas menu
- User profile section at bottom

**Props:**
- `isOpen`: Boolean to control mobile sidebar visibility
- `onClose`: Function to close mobile sidebar

### Footer
A footer component with:
- Copyright information
- Legal links
- Version information
- Responsive layout

## Features

### Mobile Responsiveness
- **Header**: Adapts to mobile with hamburger menu
- **Sidebar**: Off-canvas mobile menu with smooth transitions
- **Footer**: Responsive layout that stacks on mobile

### Independent Scrolling
The sidebar has its own scrollbar and doesn't scroll with the main page content. This is achieved using:
- `overflow-y-auto` on the sidebar navigation area
- Proper flexbox layout structure
- Fixed positioning for mobile overlay

### Accessibility
- Proper focus management
- Keyboard navigation support
- Screen reader friendly
- High contrast colors

## Styling

All components use Tailwind CSS v4 with:
- Consistent color scheme (grays, blues)
- Modern shadow and border styles
- Smooth transitions and hover effects
- Responsive breakpoints (sm, md, lg)

## Customization

To customize the layout:

1. **Colors**: Update the Tailwind color classes in each component
2. **Navigation**: Modify the `navigation` array in `Sidebar.tsx`
3. **Logo**: Replace the SVG icons and text in Header and Sidebar
4. **Layout**: Adjust the width classes (e.g., `w-64` for sidebar width)

## Browser Support

- Modern browsers with CSS Grid and Flexbox support
- Mobile browsers with touch support
- Progressive enhancement for older browsers 