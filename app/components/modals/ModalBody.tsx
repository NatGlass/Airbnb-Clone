'use client';

interface ModalBodyProps {
  children: React.ReactNode;
}

const ModalBody: React.FC<ModalBodyProps> = ({ children }) => {
  return <div className="relative p-6 flex-auto">{children}</div>;
};

export default ModalBody;
