import React, { ComponentType, useState } from 'react';
export interface WithHoverProps {
  isHovered: boolean;
  onMouseEnter: () => void; //mouse entering the component
  onMouseLeave: () => void; //mouse leaving the component
}

const withHover = <P extends object>(
  WrappedComponent: ComponentType<P & WithHoverProps>
) => {
  return (props: P) => {
    const [isHovered, setIsHovered] = useState(false);

    const handleMouseEnter = () => {
      setIsHovered(true);
    };

    const handleMouseLeave = () => {
      setIsHovered(false);
    };

    return (
      <div onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
        <WrappedComponent {...props} isHovered={isHovered} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} />
      </div>
    );
  };
};

export default withHover;
