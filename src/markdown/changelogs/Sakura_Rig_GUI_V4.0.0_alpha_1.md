# Version 4.0.0 Alpha 1

## Summary

Version 4.0.0 is a complete, ground-up refactor of the extension, transitioning from a monolithic legacy structure to a modern, modular extension architecture. This update focuses on scalability, rig-specific property management, and standardized development practices to ensure compatibility across multiple Sakura rig versions without property pollution or conflicts.

Key architectural shifts include moving UI properties from the global `Scene` and local `PoseBone` to individual `Object` data-blocks, allowing multiple rigs to coexist in a single scene with independent settings, and the implementation of a modular registration system for better maintainability.

## General Extension Changes

- Refactored the entire UI system into a multi-script submodule structure (`src/sacr_uis`)
- Ported and refactored core utility operators into a dedicated `src/operators` module
- Implemented `allow_online()` guardrails for all network-dependent operations
- Introduced a GitHub Actions workflow for automated building and releasing
- Implemented automatic inclusion of `beta_version` in the release filename and tag
- Standardized class registration using loop-based `register()`/`unregister()` functions

### Prefixer System

- Adopted a unified `Prefixer` system for `bl_idname` across all panels and operators
- Incorporated Major SACR and UI versions (e.g., `sacr_7_ui_2`) into the ID names
- Replaced the legacy and problematic `ids` dictionary system

### Security & Safety

- Added internet access checks to Download Manifest, Download Rig, Download Skin, and Update Player
- Ensures that network requests only occur if "Online Functionality" is enabled in Blender's system settings

## Rig UI Changes

### SACR R7 UI1 & UI2

- Split monolithic UI files into focused components like `global` settings and `face` settings
- Moved UI state storage from `bpy.types.PoseBone` to `bpy.types.Object`
- Attached properties directly to the rig object to prevent cross-rig interference
- Implemented a bidirectional synchronization system between new `Object` properties and legacy `PoseBone` custom properties

## Refactoring & Cleanup

### Legacy Removal

- Deleted `SACR_R7_UI1.py`, `SACR_R7_UI2.py`, and `sedaia_utils.py` after successful porting

### Code Standards

- Implemented project-wide use of standard Blender API aliases (`T`, `P`, `O`, `U`)
- Conducted a project-wide linting and formatting pass for PEP8 compliance
- Fixed multiple broken relative imports across all submodules after structural changes
