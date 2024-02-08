import React from 'react';
import styled from 'styled-components';

interface CardProps {
  title: string;
  content: string;
  color?: string; 
  contentColor?: string; 
  contentSize?: string; 
}

const CardContainer = styled.div<{ color?: string }>`
  background-color: ${(props) => props.color || 'lightyellow'}; // Use custom color if provided, otherwise fallback to lightyellow
  border-radius: 8px;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
  padding: 20px;
  margin-bottom: 20px;
  width: 350px;
  margin-left: 400px;
  margin-top: 50px;
`;

const CardTitle = styled.h2`
  color: black;
  font-size: 24px;
  margin-bottom: 10px;
`;

const CardContent = styled.p<{ color?: string; size?: string }>`
  color: ${(props) => props.color || 'red'}; // Use custom color if provided, otherwise fallback to red
  font-size: ${(props) => props.size || '16px'}; // Use custom size if provided, otherwise fallback to 16px
`;

const StyledCard: React.FC<CardProps> = ({ title, content, color, contentColor, contentSize }) => {
  return (
    <CardContainer color={color}>
      <CardTitle>{title}</CardTitle>
      <CardContent color={contentColor} size={contentSize}>{content}</CardContent>
    </CardContainer>
  );
};

export default StyledCard;
