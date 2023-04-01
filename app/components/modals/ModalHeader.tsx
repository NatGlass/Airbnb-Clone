'use client';

import { IoMdClose } from 'react-icons/io';

interface ModalHeaderProps {
  handleClose?: () => void;
  title?: string;
}

const ModalHeader: React.FC<ModalHeaderProps> = ({ handleClose, title }) => {
  return (
    <div
      className="
            flex
            items-center
            p-6
            rounded-t
            justify-center
            relative
            border-b-[1px]
            "
    >
      <button
        onClick={handleClose}
        title="close"
        type="button"
        className="
                p-1
                border-0
                hover:opacity-70
                transition
                absolute
                left-9
            "
      >
        <IoMdClose size={20} />
      </button>
      <div className="text-lg font-semibold">{title}</div>
    </div>
  );
};

export default ModalHeader;
