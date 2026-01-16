# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a personal portfolio website for Vinay Naidu, a robotics engineer specializing in autonomous underwater vehicles. The entire site is contained in a single `index.html` file with embedded CSS and JavaScript.

## Architecture

**Single-file structure**: All HTML, CSS, and JavaScript are in `index.html`:
- Lines 10-270: CSS styles with CSS custom properties for theming (dark/light mode)
- Lines 272-437: HTML structure with semantic sections (About, Projects, Upload, Contact)
- Lines 439-734: JavaScript for tab navigation, theme toggle, dev mode, and project management

**Key JavaScript patterns**:
- `projects` array stores project data (seeded with hardcoded projects in `seed()` function)
- `devMode` toggle (Ctrl+Shift+D or button) reveals edit/delete controls and "Add Project" tab
- Projects marked with `isHardCoded: true` are protected from editing/deletion
- Media files are stored as blob URLs for dynamically added projects

**Assets**: GIF demos for projects are stored in `assets/` directory.

## Development

Open `index.html` directly in a browser - no build process or server required.

To test project upload functionality, enable dev mode with Ctrl+Shift+D or click the "Dev" button.

## Theming

CSS custom properties in `:root` define the dark theme, with `.light` class overrides for light mode. Theme preference is persisted in localStorage under `vn-theme`.
