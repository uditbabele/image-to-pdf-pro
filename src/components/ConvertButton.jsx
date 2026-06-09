export default function ConvertButton({
  onClick,
  disabled,
}) {
  return (
    <button
      disabled={disabled}
      onClick={onClick}
      className="
      mt-6
      px-8
      py-4
      bg-blue-600
      text-white
      rounded-xl
      font-bold
      hover:bg-blue-700
      transition
      disabled:opacity-50
      "
    >
      Convert To PDF
    </button>
  );
}