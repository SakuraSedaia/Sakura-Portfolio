# Version 4.0.0 Alpha 2

## Summary

Version 4.0.0 Alpha 2 introduces a dedicated Rig Preset system within the Rig Manager, allowing users to save, load, and manage custom rig configurations. This update also brings significant UI refinements across all dynamic lists to better align with standard Blender interface patterns, providing a more cohesive and efficient user experience.

## New Features

### Rig Preset Management
- Implemented a dynamic "Saved Presets" list in the Rig Manager panel.
- Added operators to Save, Load, and Delete rig presets directly from the UI.
- Integrated automatic directory handling for storing presets in the addon's data folder.
- Added a "New Preset Name" input field with automatic synchronization to the selected preset.
- Enhanced the "Import Preset" functionality to support both base rigs and saved presets.

### UI & UX Enhancements
- Standardized all dynamic lists (Base Presets, Saved Presets, and Skins) to mirror Blender's Material UI slot control pattern.
- Implemented dynamic row heights for `template_list` elements (expanding from 3 to 5 rows based on content).
- Added vertical slot control columns (Refresh, Save, Delete, etc.) next to all dynamic lists for better accessibility.
- Improved layout grouping with logical separators and icon-only buttons for a cleaner, more compact interface.

## General Improvements
- Added persistent load handlers to automatically refresh all lists (Rigs, Presets, Skins) when a file is opened or the addon is registered.
- Refined the "Save" logic to conditionally show Save or Load operators based on the current file's saved state and location.
- Optimized the `append_rig` operator to handle multiple list contexts seamlessly.

## Cleanup
- Completely removed the obsolete `MT_save_dialog` component and its associated registration logic.
- Conducted a project-wide cleanup of redundant UI labels and text.