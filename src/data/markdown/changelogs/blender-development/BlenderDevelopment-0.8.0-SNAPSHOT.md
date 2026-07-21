# Changelog

## [0.8.0-SNAPSHOT] - 2026-07-20

This pre-release builds on `v0.7.0-Snapshot` with structured Blender extension metadata handling, expanded runtime
diagnostics, a simplified runtime source layout, and a repeatable Codeberg release workflow.

### Added

- Added a typed TOML reader for Blender extension manifests, including focused parsing and validation tests.
- Added Blender-side runtime communication and repository-sync logging with Python regression coverage.
- Added an idempotent Codeberg snapshot release script that validates the tag and changelog, builds the plugin,
  publishes the pre-release, uploads the distribution ZIP, and verifies its SHA-256 hash.
- Added Codeberg issue templates and a shared Gradle run configuration for building the plugin distribution.
- Added project documentation for snapshot publishing and updated runtime workflow and troubleshooting guidance.

### Changed

- Flattened the bundled Blender runtime sources into `src/main/python` and updated packaging and attribution paths.
- Reworked extension reloads to read manifest metadata through the structured manifest model.
- Expanded runtime command diagnostics around requests, responses, reloads, script execution, and Blender shutdown.

### Fixed

- Fixed extension reloads so the manifest extension ID is used instead of the source directory name.
- Fixed runtime repository-sync launch behavior and covered generated launch scripts with Python tests.
- Fixed plugin packaging so transitive Kotlin standard-library jars cannot shadow the IntelliJ Platform runtime.

### Removed

- Removed the superseded nested `src/main/blender-runtime/include/blender_pycharm` source layout.

### Known Issues

- This remains a pre-release and is not production-hardened.
- Live Blender integration is not covered by the automated JVM and Python test suites.
