import styled from "styled-components";

export const Container = styled.div`
  top: 0;
  left: 0;
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  margin: 0 auto;
  box-sizing: border-box;
  max-width: 1320px;
  padding: 0px;

  @media (max-width: ${({ theme }) => theme?.breakpoints?.xl}) {
    max-width: 1140px;
    padding: 0px 25px;
  }
  @media (max-width: ${({ theme }) => theme?.breakpoints?.lg}) {
    max-width: 960px;
  }
  @media (max-width: ${({ theme }) => theme?.breakpoints?.md}) {
    max-width: 720px;
    padding: 0px 15px;
  }
  @media (max-width: ${({ theme }) => theme?.breakpoints?.sm}) {
    max-width: 100%;
  }
`;

export const FlexBox = styled.div`
  display: flex;
  justify-content: ${(props) => props.justify};
  align-items: ${(props) => props.align};
  flex-direction: ${(props) => props.direction};
  max-width: ${(props) =>
    props.width ? props.theme.breakpoints[props.width] : "100%"};
  width: 100%;
  gap: ${(props) => (props.gap ? props.theme.spacing[props.gap] : 0)};
  flex-wrap: ${(props) => props.wrap || "nowrap"};
`;


