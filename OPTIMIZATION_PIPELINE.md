# Asset Optimization Pipeline Documentation

This document describes the structure, configuration, and usage of the Python-based asset optimization pipeline used in the Sakura-Portfolio project.

## Overview

The pipeline is designed to automate the processing of media assets (images, GIFs, videos, icons) into web-optimized formats, specifically prioritizing **JXL** for high-quality images while providing automatic fallbacks (**PNG/JPG**) for maximum compatibility.

### Key Components

- **TUI Hub (`utils/launch_optimizer.py`)**: The central entry point for all operations.
- **Image Optimizer (`image_optimizer.py`)**: Handles general asset optimization in `public/images`.
- **Render Map Generator (`create_render_map_v2_2.py`)**: Processes high-quality renders into multiple sizes and formats.
- **Manifest Assembler (`assemble_manifest.py`)**: Consolidates individual metadata files into a single JSON for the frontend.
- **Backup Manager (`backup_manager.py`)**: Ensures safety by preserving original assets during processing.
- **Config Loader (`config_loader.py`)**: Manages project-wide settings via `config.toml`.

---

## Workflow

### 1. General Image Optimization
Processes static images, GIFs, videos, and icons within the source directory (default: `utils/pipeline_sources/images`).
- **Setup**: Before running the pipeline, ensure Python dependencies are installed. Use `utils/install_requirements.sh` (Linux/macOS) or `utils/install_requirements.bat` (Windows).
- **Procedural Sources**: The pipeline utilizes a `utils/pipeline_sources` folder to house various procedural inputs. This allows for cleaner organization and future expansion of procedural pipelines.
- **Static Images**: Converted to `.jxl` (primary) with `.png` (transparent) or `.jpg` (opaque) fallbacks.
- **GIFs**: Optimized and kept as `.gif`.
- **Videos**: Compressed to web-optimized H.264 `.mp4`.
- **Icons**: Optimized into multi-size `.ico` files.
- **Sandboxed Source**: By default, the pipeline scans `utils/pipeline_sources/images` and outputs to `public/images`, keeping source files pristine and separate from processed assets.
- **Ignore List**: Specific directories (e.g., `renders`, `vectors`) can be ignored via the `ignore_list` in `config.toml`.

### 2. Render Pipeline (V2.2)
Specifically for the render gallery located in `utils/renders`.
- **Processing**: Generates three sizes for every render: `lg` (1920px), `md` (1600px), and `sm` (1200px).
- **Metadata**: Generates individual `.json` manifests in `utils/lib` containing name, date, and available sizes.
- **Assembly**: Combines all individual manifests into `src/jsondata/render-map.json`, sorted by date (newest first).

---

## Configuration (`utils/config.toml`)

The pipeline is driven by a TOML configuration file. Key sections include:

- **`[general]`**: Toggle `debug` mode, set `max_width`, and configure the `ignore_list` for directory exclusion.
- **`[paths]`**: Define locations for `images_source`, `public_images`, source renders, and backups.
- **`[formats]`**: Set global `quality` (1-100) and supported file extensions.
- **`[render_map]`**: Configure categories and target resize dimensions.

---

## Safety & Testing (DEBUG Mode)

**Mandatory for all development and testing.**

When `debug = true` is set in `config.toml`:
1. **Sandboxed Output**: All generated files are written to `.hidden/testing` instead of production directories.
2. **Safe Source**: The pipeline uses `.hidden/images_backup_manual` as the source for all operations.
3. **Single-Save Verification**: To save time and space during testing, the pipeline only saves/writes the first image processed (per category in the render pipeline, or globally in the image optimizer). Subsequent images are still scanned and logged, but no files are written to disk.
4. **Verbose Logging**: Logging level drops to `DEBUG`, providing file-by-file status updates and explicitly denoting when saves are skipped.
5. **TUI Debug Options**:
   - `d1`: Clear the testing output directory.
   - `d2`: Verify the integrity of the testing source.

### Error Handling
If an error or edge case is found during testing, a specific test case should be integrated to ensure future versions of the pipeline handle the scenario correctly.

---

## Restoration

The pipeline provides two main ways to revert changes:
- **Standard Restore**: Reverts assets from the automatic backup (`.hidden/image_backup`).
- **Source Restore**: Reverts assets from the pristine source backup (`.hidden/images_backup_manual`).
- **Complete Overwrite**: Restoration automatically clears the target `public/images` directory to ensure no leftover optimized files remain.

---

## Dependencies

Required Python packages are listed in `utils/scripts/requirements.txt`:
- `Pillow`: Image processing and resizing.
- `jxlpy`: JXL format support.
- `moviepy`: Video compression.
- `toml`: Configuration management.
- `tqdm`: ASCII progress bars.
