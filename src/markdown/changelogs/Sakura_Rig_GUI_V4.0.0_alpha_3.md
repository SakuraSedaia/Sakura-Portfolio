# Version 4.0.0 Alpha 3

## Summary

Version 4 Alpha 3 is largely focused on stability improvements and cleanup, ensuring that all features from V3 are implemented carefully and properly.

## Changes

### General Improvements
- Cleaned up unnecessary imports
- Added new "Online Access Disabled" warning panel, since SACR Utils includes features which require internet access, and without permission the features cannot function properly.

### Operators
- Updated `update_collection` logic in `OP_rig_rename` to use a toggle in user preferences instead of a hardcoded value in the UI.
- Hardened http request handling in `skin_utils.py` to close connections properly.

### Utils Master
- Added ability to enable Online Access from the UI without having to navigate to user preferences.

### Rig Manager
- SACR Manifest Downloader now properly refreshes the rig list upon completion.

### Skin Manager
- Moved Profile Creation logic to a popup modal window, which allows the user to either download a new profile from Mojang or import a skin file into a new profile.
- Added support for importing local skin files directly from the computer.
- Added ability to rename individual skins within a profile for better management.
- Improved UI with custom names and improved feedback during skin imports.
- Fixed a `NoneType` error when deleting skin textures without capes.
- Moved "Apply Skin" button to the bottom of the Skin Selector.
