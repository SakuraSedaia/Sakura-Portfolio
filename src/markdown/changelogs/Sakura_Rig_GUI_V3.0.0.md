# Sakura's Rig Interfaces

Version: 3.0.0
Blender 4.2

---

This version brings about many architectural changes, mainly in the way that Modules are loaded, registered, and structured, as well as new features, a new UI Script for the latest SACR Version, and a Skin Download Utility to make getting Minecraft Skins much easier.

---

## Main Changelog

### General
- Extension name changed to Sedaia Rig Interfaces
- Created "Modules" module to handle Module Registry
- Global UI module created to handle any universal operators.
- Build Script to automate the process of packaging

### Preferences

- Renamed file from "addon_prefs" to just "prefs"
- Created a copy of the "File Open" class inside Preferences.
- Added more options

### Sedaia Utils

- Renamed module "SedaiaOperators" to "sedaia_utils"
- Added Import "extension_path_user" from BPY Utils, and updated associated calls
- Removed Unused definition "update()"
- Removed Unused "File Delete" class
- Removed Rig Importer (Temporarily)
- Class standard renamed to be simply the category and function.
- Replaced all "print" Calls with the proper Report calls
- Made changes within def generate_player_data()
  - Rewrote core router to be more readable and clear.
  - Added Else case for if Online Access is disabled
  - Users can now either Load data, add new entry, or purge and replace existing data when loading previously called Username
  - Restructured Player JSON
    - Removed HTTP links
    - "SKIN" dictionary changed to support multiple skin files saved from a single username.

### All Modules:

- Added lookup table for Class ID Names

## Rig UI Changelogs

### General UI Changes

- Applied new more reliable method for Material Object Detection
  - New method iterates through an Enumerator and just checks for the presence of a matching Keyword

### SACR R7 UI Version 1 (Final Update):

- Renamed Module to sacrUI_R7_UI1 to SACR_R7_UI1
- Updated all external module calls to the new standard.
- Version 1 of the R7 GUI will no longer recieve updates from this point on, except to ensure continued compatability with the rest of the Addon

### SACR R7 UI Version 2:

- Renamed Module to sacrUI_R7_UI2 to SACR_R7_UI2
- Performed a complete UI Rewrite, incorporating more advanced features and QoL changes.
- Added Restrict Select option
- Added option to reset rig scale