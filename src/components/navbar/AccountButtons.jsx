export default function AccountButtons({ text }) {
  return (
    <button
      type="button"
      className="px-5 py-1 border transition-colors font-semibold text-sm border-black hover:bg-black hover:text-fourth">
      {text}
    </button>
  );
}
