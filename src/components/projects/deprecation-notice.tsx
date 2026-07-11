import { NoHydration } from "solid-js/web";

export default function DeprecationNotice(props: { message: string }) {
  return (
    <NoHydration>
      <div class="deprecation-notice">
        <h1>Deprecation Notice:</h1>
        <p>{props.message}</p>
      </div>
    </NoHydration>
  );
}
