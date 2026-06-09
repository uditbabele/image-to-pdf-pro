export default function PreviewModal({
  image,
  onClose,
}) {
  if (!image) return null;

  return (
    <div
      className="
      fixed inset-0
      bg-black/70
      flex justify-center
      items-center
      z-50
      "
      onClick={onClose}
    >
      <img
        src={image}
        alt=""
        className="
        max-h-[90vh]
        max-w-[90vw]
        rounded-xl
        "
      />
    </div>
  );
}