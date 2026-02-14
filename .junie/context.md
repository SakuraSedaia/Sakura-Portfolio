### Core Architecture
- **Framework**: SolidStart (SolidJS-based Meta-framework).
- **Styling**: SCSS (Standardized to use HSL for colors, `rem`/`em` for sizing and typography).
- **Routing**: File-based routing in `src/routes`.
- **Data Handling**: Dynamic JSON manifests for data-driven components.

### AI Agent Interaction
- Always reference the `.junie/context.md` and `.junie/project.md` files at the beginning of a session to ensure alignment with the project's current state and architectural decisions.
### Logging & Summaries
- Maintain logs of all chat sessions in the `.logs/` folder. Log files are organized by date (e.g., `chat-session-YYYY-MM-DD.log`). Append all entries for the same day to that day's log file.
- When explicitly requested to provide a "context summary" or "summary of the day/session", create a separate file in the `.logs/` folder named `summary_YYYY-MM-DD.md` (e.g., `summary_2026-02-10.md`) containing the summarized highlights.
- When adding new rules or details to the documentation in `.junie/`, ensure they are placed within their respective sections (e.g., technical rules in `guidelines.md`, project-specific data in `project.md`, and architectural/workflow context in `context.md`) to maintain organization and reduce the need for future refactoring.
- **Guideline Sync**: When updating internal guidelines (`.junie/guidelines.md`) with new rules applicable to development style, structure, or coding standards, ensure that the public-facing `CONTRIBUTING.md` is also updated to reflect these changes.

### Development Workflow
- **Logging**: Every chat session MUST be logged in `.logs/`, unless the user explicitly starts a request with "No Log". In that case, do not log the session, do not commit the associated changes, and do not mention the omission in the response.
- **Commits**: Upon successful completion of a task, automatically commit the changes to Git. Keep commit messages brief (at most 2 full sentences) and only divulge necessary information about the changes.
- **Python Style**: PEP 8 (autopep8), minimal nesting (<= 4 indents), standard library preference.
- **Resource Management**: Download fonts and images locally (e.g., `public/fonts`) instead of using CDNs to ensure reliability and offline availability.
