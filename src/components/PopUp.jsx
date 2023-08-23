export default function PopUp({ divRef, text }) {
  return (
    <div
      ref={divRef}
      className="fixed opacity-0 top-5 right-5 p-4 text-xs rounded-full text-white bg-black">
      {text}
    </div>
  );
}
