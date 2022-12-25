import { useContext } from "react";
import { toastContext } from "../components/ToastProvider/ToastProvider";

function useToast() {
  const ctx = useContext(toastContext);

  if (ctx === null || ctx === undefined) throw new Error('useToast error');

  return ctx;
}

export default useToast;