'use client';

interface ModalFooterProps {
  children: React.ReactNode;
  footer: any;
}

const ModalFooter: React.FC<ModalFooterProps> = ({ children, footer }) => {
  return (
    <div className="flex flex-col gap-2 p-6">
      <div className="flex flex-row gap-4 w-full">{children}</div>
      {footer}
    </div>
  );
};

export default ModalFooter;
