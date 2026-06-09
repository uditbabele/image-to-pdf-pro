export default function LoadingOverlay({
  show,
}) {
  if (!show) return null;

  return (
    <div
      className="
      fixed inset-0
      bg-black/50
      flex items-center
      justify-center
      z-50
      "
    >
      <div
        className="
        bg-white
        p-8
        rounded-xl
        "
      >
        Generating PDF...
      </div>
    </div>
  );
}