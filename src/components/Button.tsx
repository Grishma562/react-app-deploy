import withHover, { WithHoverProps } from '../hoc/withHover';

interface ButtonProps {
  label: string;
}

const Button: React.FC<ButtonProps & WithHoverProps> = ({ label, isHovered, onMouseEnter, onMouseLeave }) => {
  return (
    <button
      style={{
        padding: '10px',
        backgroundColor: isHovered ? 'lightblue' : 'lightgray',
        border: 'none',
        cursor: 'pointer',
      }}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      {label}
    </button>
  );
};

const HoverButton = withHover(Button);

export default HoverButton;
