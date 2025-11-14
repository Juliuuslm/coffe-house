import { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import ToastContainer from './Toast';

export const ToastProvider = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const container = document.getElementById('toast-container');
  if (!container) return null;

  return createPortal(<ToastContainer />, container);
};

export default ToastProvider;
