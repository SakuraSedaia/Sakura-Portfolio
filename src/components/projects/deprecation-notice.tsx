export default function DeprecationNotice(props: { message: string }) {
  return (
    <div class="deprecation-notice">
      <h1>Deprecation Notice:</h1>
      <p>{props.message}</p>
    </div>
  );
}
