import { useEffect, useRef } from 'react';
import { tv } from 'tailwind-variants';

const modalOverlay = tv({
  base: 'fixed inset-0 z-50 flex items-end justify-center bg-stone-950/90 pl-4 pr-4.75 pb-6 pt-16',
});

const modalContent = tv({
  base: 'relative mx-auto flex h-full w-full max-w-2xl flex-col rounded-md bg-stone-800',
});

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  children: React.ReactNode;
  footer?: React.ReactNode;
}

export function Modal({ isOpen, onClose, title, children, footer }: ModalProps) {
  const modalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    if (isOpen) {
      const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth;
      document.addEventListener('keydown', handleEscape);
      document.body.style.overflow = 'hidden';
      document.body.style.paddingRight = `${scrollbarWidth}px`;
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'unset';
      document.body.style.paddingRight = '0px';
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      className={modalOverlay()}
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
    >
      <div
        ref={modalRef}
        className={modalContent()}
      >
        <div className="flex shrink-0 items-center pl-4 pr-2 pb-4 pt-2">
          <h2
            id="modal-title"
            className="text-2xl"
          >
            {title}
          </h2>
          <button
            type="button"
            className="ml-auto inline-flex h-10 w-10 items-center justify-center lg:h-12 lg:w-12"
            onClick={onClose}
            aria-label="Close modal"
          >
            <svg
              className="h-5 w-6"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 14 14"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
              />
            </svg>
          </button>
        </div>
        <div className="flex-1 overflow-y-auto px-4 pb-[68px]">
          <div className="flex min-h-full flex-col items-center justify-center">{children}</div>
        </div>
        {footer && <div className="shrink-0 px-4 pb-4">{footer}</div>}
      </div>
    </div>
  );
}
