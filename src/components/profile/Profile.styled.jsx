import styled from 'styled-components';

export const StyledProfile = styled.div`
  width: 300px;
  height: 330px;
  border-radius: 4px;
  box-shadow: 0 4px 12px rgba(28, 173, 163, 0.5);
  margin: 10px auto;
  padding: 25px 0 0;
  position: relative;
  overflow: hidden;
`;

export const StyledDescription = styled.div`
  display: block;
`;

export const StyledAvatar = styled.img`
  display: block;
  margin: 0 auto;
  object-fit: cover;
  border: 1px solid transparent;
  border-radius: 50%;
  width: 100px;
  height: 100%;
`;
export const StyledName = styled.p`
  font-size: 26px;
  text-align: center;
  margin: 10px;
`;

export const StyledTag = styled.p`
  font-size: 20px;
  text-align: center;
  color: grey;
  margin-bottom: 8px;
  font-weight: 600;
`;
export const StyledLocation = styled.p`
  font-size: 14px;
  text-align: center;
  color: grey;
  margin-top: 8px;
  font-weight: 600;
`;
export const StyledStats = styled.ul`
  display: flex;
  list-style-type: none;
  position: absolute;
  /* bottom: 0; */
  width: 100%;
  padding: 0;
  position: absolute;
  bottom: 0;
  margin: 0;
  & li {
    padding: 7px 0;
    width: calc(100% / 3);
    border-right: 1px solid rgba(180, 180, 180, 0.7);
    background-color: rgb(240, 240, 240);
  }
  & li:last-child {
    border-right: 1px solid rgb(200, 200, 200);
  }
`;
export const StyledLabel = styled.span`
  display: block;
  font-size: 16px;
  color: grey;
  text-align: center;
`;
export const StyledQuantity = styled.span`
  display: block;
  font-size: 20px;
  text-align: center;
  margin-top: 5px;
  font-weight: 600;
`;
