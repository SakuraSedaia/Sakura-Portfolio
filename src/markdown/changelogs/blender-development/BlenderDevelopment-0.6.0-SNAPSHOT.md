# Changelog

## [0.6.0-SNAPSHOT] - 2026-04-26

Blender Development for PyCharm 0.6.0 significantly strengthens the foundation of the plugin. The move to `uv`, the
improved project setup tools, the safer execution flow, and the extensive threading and process fixes make this release
faster, more predictable, and better suited for real-world Blender extension development across Windows, macOS, and
Linux.

### Added

#### uv-Powered Python Integration ([#4](https://codeberg.org/SakuraSedaia/blender_pycharm/issues/4))

- Implemented a mandatory `uv` integration for ultra-fast virtual environment management and linter installation.
- Added automated `uv` installation for the user and support for specific Python versions per Blender release.
- Deep integration with PyCharm's native `uv` metadata.
- Enhanced `uv` venv creation with the `--seed` flag to ensure `pip`, `setuptools`, and `wheel` are always present,
  resolving packaging tool failures.

#### Project Traits Management

- Added new capabilities to the Blender tool window to generate essential project files for existing projects.
- Supports generation of Junie Agent Guidelines, default Run Configurations, `.gitignore` templates, and GPL V3 LICENSE
  files.

#### Background Task Management

- Centralized all long-running operations (linter setup, downloads, reloads) into a new `BlenderTaskManager` to ensure a
  smooth, non-blocking IDE experience.

#### Execution Validation

- Implemented proactive detection of filesystem execution restrictions (e.g., `noexec` on Linux). The plugin now
  identifies restricted partitions and provides actionable troubleshooting guides.

#### User Permission Prompt

- Added explicit confirmation dialogs before the plugin performs invasive operations like Python SDK management or
  environment recreation.
- Improved Python version tracking to use full semantic versions (e.g., 3.11.7) for better compatibility with specific
  Blender releases.

#### Enhanced Blender Discovery

- Improved `BlenderScanner` and `BlenderPathUtil` for more reliable detection of system-wide installations across all
  platforms.

#### Robust Downloader

- Overhauled `BlenderDownloader` and `ArchiveUtil` to improve extraction reliability and properly handle Unix execution
  permissions.

#### Internationalization (i18n)

- Audited and cleaned up the `LangManager` message bundles.
- Removed redundant and unused keys and standardized terminology (using "Module" consistently for Blender components).
- Synchronized all 11 supported language bundles.
- Created unified `button.yes` and `button.no` keys and updated confirmation dialogs across the UI for better
  consistency.

#### Version Updates

- Updated supported Blender and Python version metadata to include the latest releases.

### Changed

#### UI Modernization

- Updated the Virtual Environment recreation prompt to display the project name instead of the absolute file path for a
  cleaner, more user-friendly interface.
- Refactored the Tool Window, Settings, and Run Configuration editors using modern Kotlin DSL components for a cleaner,
  more responsive interface.

#### Repository & CI Migration

- Migrated the project templates and CI workflows from `.github` to `.forgejo` for native Codeberg compatibility.
- Fixed the `release.yml` workflow to use the correct `inputs.version` syntax for `workflow_dispatch`.

#### Junie Agent Guidelines

- Renamed the agent configuration directory from `.agent` to `.junie` and expanded the documentation guidelines to
  require detailed changelog entries when updating existing features.
- Improved the **AI Usage Declaration** in the `README.md`.
- Consolidated the **Features** section into core summaries.
- Updated the project description to reflect the current state (uv integration, Project Traits, and Codeberg migration).

#### Core Refactoring

- Enhanced the service layer (`BlenderService`, `BlenderLinker`, `BlenderCommunicationService`) and centralized version
  parsing/comparison logic for better maintainability.

#### Path Centralization

- Introduced a new `BlenderProjectPaths` utility to centralize and standardize all project-local paths (e.g., `.venv`,
  `.blender_sandbox`).
- Refactored `BlenderLauncher`, `BlenderLinker`, `BlenderService`, `PythonSdkService`, `PythonLinterService`, and
  project generators to use these centralized definitions, improving maintainability and reducing hardcoded string
  usage.
- Centralized constants for `src`, `blender_manifest.toml`, `LICENSE`, `README.md`, `.gitignore`, `.agent`,
  `pyvenv.cfg`, and Python entry points (`__init__.py`, `auto_load.py`).

#### Process Management

- Refactored Blender process launching to use `KillableProcessHandler`, improving responsiveness and termination
  handling.

#### Run Configuration Flow

- Improved path resolution and validation to ensure managed versions are correctly handled before launch.
- Resolved Issue #3 by ensuring startup scripts use deterministic filenames to prevent scratch directory clutter.

#### Enhanced Build & Validate ([#5](https://codeberg.org/SakuraSedaia/blender_pycharm/issues/5), [#6](https://codeberg.org/SakuraSedaia/blender_pycharm/issues/6))

- Added dedicated inputs for source and output directories in Build and Validate run configurations, allowing for more
  flexible extension packaging.

#### Reactive Error Handling

- Refactored permission checks to be reactive, triggering detailed diagnostics only when a "Permission denied" error
  occurs.

#### Sandbox Management

- Relocated the Sandbox directory from `.venv/blender_sandbox` to `.blender_sandbox` at the project root level.
- This preserves sandbox data when switching Python virtual environments or recreating the `.venv`.
- The folder is now automatically marked as "excluded" in the IDE to prevent indexing and tracking.

### Fixed

#### Filesystem Safety & Protection

- Implemented robust protections to prevent accidental deletion of source files or system directories.
- Added strict `isVenv` validation that excludes system paths and requires the presence of `pyvenv.cfg`.
- Introduced `isSafeToDelete` checks for all recursive deletion operations, ensuring they are contained within project
  boundaries or managed download directories.
- Added explicit blacklisting for critical system paths and common user folders (Documents, Desktop, etc.).

#### Thread Safety & EDT Compliance

- Fixed an issue where "Access is allowed from Event Dispatch Thread (EDT) only" would occur during Python SDK
  initialization and linter setup by ensuring all model-modifying calls (like `PythonSdkUpdater.update`, SDK creation,
  and virtual environment management) are correctly synchronized on the EDT.

#### Codebase Modernization

- Audited the codebase and replaced several deprecated IntelliJ APIs with modern recommended implementations.
- Replaced deprecated `SdkType.getAllTypes()` with the modern `SdkType.EP_NAME.extensionList` for SDK type discovery.
- Replaced `Messages.showYesNoDialog` with `MessageDialogBuilder` for improved dialog management.
- Refactored `BlenderNotification` to use the standard `NotificationGroupManager` retrieval pattern.
- Modernized various UI components and SDK initialization logic to align with the latest IntelliJ Platform guidelines.
- Replaced deprecated `Project.baseDir` with `Project.guessProjectDir()` for more reliable project root resolution.
- Fixed build errors in `BlenderProjectService.kt` by adding missing `Project` import and standardizing path resolution.
- Replaced deprecated `ProgressManager.runProcessWithProgressSynchronously` with modern `Task.Modal` pattern via
  `BlenderTaskManager`.

#### Enhanced Debugging

- Updated `BlenderLogger` to print debug messages directly to the console (`println`) when running the IDE, ensuring
  immediate visibility of logs during development without extra platform configuration.

#### Archive & Download Reliability

- Implemented robust extraction using temporary directories, atomic moves, file size verification, and improved
  top-level directory stripping to prevent corrupted installations.

#### Thread Safety & Synchronization

- Resolved race conditions and `ConcurrentModificationException` in shared caches. Added synchronization locks in
  `BlenderService` to ensure atomic process initialization.

#### Communication Server Leak

- Implemented a robust cleanup mechanism in `BlenderCommunicationService` to prevent resource leaks and ensure only one
  active client connection.

#### Linter & Setup Stability

- Ensured valid version string usage during linter setup and improved New Project Wizard validation for sandbox
  settings.

#### Command & Reload Safety

- Implemented proper shell-style quoting for project paths with spaces and robust JSON serialization for extension
  reload commands.

#### Cancellation Responsiveness

- Improved responsiveness by adding `checkCanceled()` calls throughout long-running processes, allowing users to abort
  operations.

#### Linux Execution (Error 13)

- Resolved issues where Blender failed to launch on Linux partitions with restrictive mount flags by providing clear
  diagnostic feedback.

#### Sandbox Extension Path

- Fixed a path mismatch in sandbox mode by correctly aligning the linker path with `BLENDER_USER_SCRIPTS`.

#### Process Execution

- Replaced inefficient busy-wait loops with a listener-based approach and improved resource cleanup.
