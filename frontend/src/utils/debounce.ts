export default function debounce(callback: Function, wait: number) {
  let timer: any;

  const debouncing = () => {
    if (timer) {
      clearTimeout(timer);
      timer = null;
    }

    timer = setTimeout(() => {callback}, wait);
  }

  debouncing();
};