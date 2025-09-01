import { Show } from "solid-js";
export default function Commissions() {
  const areComsOpen = false;

  return (
    <div class="body-container">
      <div class="commission-content body-content">
        <div class="section-header">
          <div class="section-header">
            <h1>Comissions</h1>
          </div>
        </div>
        <Show
          when={areComsOpen}
          fallback={
            <p>
              Sorry I am not taking comissions right now, I am currently busy
              with rebuilding this site at the moment.
            </p>
          }
        >
          <p>Content</p>
        </Show>
      </div>
    </div>
  );
}
