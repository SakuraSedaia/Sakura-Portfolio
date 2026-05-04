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

### Development Workflow
- **Change Tracking**: Upon successful completion of a task, automatically commit the changes to Git. 
- **Commit Message**:
  - **Statement**: Keep the commit message concise and descriptive.
  - **Body**: Add more details about the commit,
  - **Message Length**: Keep commit messages under 50 characters for brevity, excluding the prefix.
  - **Authorship**: Always commit messages under the author "SakuraSedaia <sakurasedaia@gmail.com>" with Junie as the co-author.
  - **Prefixing**: Use type prefixes wrapped in Square Brackets (`[Type](Module)`) to categorize the commit.
    - **Type**: 
      - `[Feat]`: New feature or enhancement
      - `[Fix]`: Bug fix
      - `[Docs]`: Documentation changes
      - `[Refactor]`: Code refactoring without changing functionality
      - `[Style]`: Code style/formatting changes
      - `[Test]`: Adding or updating tests
      - `[Chore]`: Maintenance tasks like dependency updates
- **Resource Management**: Download fonts and images locally (e.g., `public/fonts`) instead of using CDNs to ensure reliability and offline availability.
