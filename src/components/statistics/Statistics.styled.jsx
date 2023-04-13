const { default: styled } = require('styled-components');

export const StyledStatistics = styled.section`
  width: 300px;
  height: 150px;
  border-radius: 4px;
  box-shadow: 0 2px 12px rgba(28, 173, 163, 0.5);
  margin: 10px auto;
  padding: 25px 0 0;
  position: relative;
  overflow: hidden;
`;

export const StyledTitle = styled.h2`
  font-size: 26px;
  text-align: center;
  margin: auto;
`;
export const StyledStatList = styled.ul`
  display: flex;
  list-style-type: none;
  position: absolute;
  width: 100%;
  padding: 0;
  position: absolute;
  bottom: 0;
  margin: 0;
`;

export const StyledItem = styled.li`
  display: flex;
  flex-direction: column;
  padding: 10px 0;
  width: calc(100% / 5);
  background-color: ${props =>
    `#${Math.floor(Math.random() * 16777215).toString(16)}`};
`;

export const StyledLabel = styled.span`
  font-size: 14px;
  text-align: center;
`;
export const StyledPercentage = styled.span`
  font-size: 22px;
  text-align: center;
`;
