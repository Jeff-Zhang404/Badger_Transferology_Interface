# Badger Transferology Interface

A React interface prototype for exploring how transfer courses may satisfy
UW-Madison breadth and general education requirements.

[View the live demo](https://jeff-zhang404.github.io/Badger_Transferology_Interface/)

> **Demonstration only:** All course records in this project are mock data.
> This project is not affiliated with UW-Madison or Transferology and should not
> be used for academic planning or official transfer-credit decisions.

## Overview

Badger Transferology Interface is an individual design and development project
focused on making transfer-course discovery easier to scan, filter, and revisit.
It combines an HCI design process with a client-side React implementation.

The project began with interviews with three students to identify pain points in
the Transferology search process. The interface was then explored through 10
low-fidelity and 14 high-fidelity Figma screens before implementation.

## Features

- Search 52 mock course records from 14 institutions
- Match every selected requirement with **AND** filtering
- Match at least one selected requirement with **OR** filtering
- Browse results by institution, requirement, and course
- Expand course cards to view descriptions, credits, and reference links
- Save and remove course bookmarks without creating an account
- Persist saved courses in the browser with `localStorage`
- Synchronize saved-course changes across browser tabs
- View responsive About and FAQ pages with project documentation

## Technology

- React 19
- Vite 7
- React Router
- React Bootstrap and Bootstrap
- Browser `localStorage`
- Static JSON data
- GitHub Pages

## Getting Started

### Prerequisites

- Node.js
- npm

### Installation

```bash
git clone https://github.com/Jeff-Zhang404/Badger_Transferology_Interface.git
cd Badger_Transferology_Interface
npm install
npm run dev
```

Open the local URL printed by Vite. Because the project uses a GitHub Pages base
path, the development URL may include `/Badger_Transferology_Interface/`.

## Available Scripts

| Command | Purpose |
| --- | --- |
| `npm run dev` | Start the Vite development server |
| `npm run build` | Create the production build in `docs/` |
| `npm run preview` | Preview the production build locally |
| `npm run lint` | Run ESLint with the repository configuration |

## How It Works

Course records are loaded from a static JSON file through a shared React context.
The search interface filters those records against the selected requirements and
groups matching results by institution.

`Match all (AND)` keeps records that satisfy every selected requirement.
`Match any (OR)` keeps records that satisfy at least one selected requirement and
lets the user continue browsing by requirement.

Bookmarks are stored as course identifiers in the browser's `localStorage`.
They persist across page refreshes on the same browser and device. Clearing
browser storage removes the saved courses.

## Project Structure

```text
src/
  components/
    DataContext.jsx               # Loads and shares course data
    BadgerTransferology.jsx       # Shared application layout
    nav/
      BadgerTransRouter.jsx       # Client-side routes
      BadgerTransNavBar.jsx       # Main navigation
      pages/
        HomePage.jsx              # Search and results workflow
        RequirementBox.jsx        # Requirement and match controls
        SavedCoursesPage.jsx      # Locally saved courses
        useSavedCourseIds.js      # localStorage bookmark logic
        AboutPage.jsx             # Project and creator background
        FaqPage.jsx               # Product and data explanations
public/
  Data/                            # Mock course records
docs/                              # Production files for GitHub Pages
```

## Deployment

The Vite production output is configured for the repository path and written to
`docs/` for GitHub Pages.

```bash
npm run build
git add -A
git commit -m "Build GitHub Pages site"
git push origin main
```

GitHub Pages should publish from the `main` branch and the `/docs` directory.

## Limitations and Privacy

- The dataset is intentionally small and does not represent official course data.
- Search results are not transfer-credit guarantees.
- The project has no authentication system or backend database.
- Saved-course identifiers remain in the local browser and are not sent to a
  project server.
- Saved courses do not automatically transfer to another browser or device.

For real transfer-credit planning, use the official Transferology service and
consult an academic advisor.

## Author

**Xuantao (Jeff) Zhang**

- M.S. in Computer Science student at UCLA
- B.S in Computer Sciences, Mathematics (Programming and
  Computing), and Statistics at UW-Madison, graduated with Distinction

Course supervisor: **Cole Nelson**
