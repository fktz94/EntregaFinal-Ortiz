export default function usePopUp() {
  const handlePopUp = (ref) => {
    ref.current?.classList.remove('addedCart');
    setTimeout(() => {
      ref.current?.classList.add('addedCart');
    }, 100);
  };
  return { handlePopUp };
}
