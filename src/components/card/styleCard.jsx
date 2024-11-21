import styled from "styled-components";
import { FlexBox } from "../flexbox/index";

export const Container = styled(FlexBox)`
  max-width: 225px;
  background-color: ${(props) => props?.theme?.colors?.neutral?.pure};
  border-radius: 10px;
  box-shadow: rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px;
  padding: 0px 10px;
  height: 100%;
  max-height: 300px;
`;

export const PokemonSpot = styled(FlexBox)`
  background: ${(props) => {
    const types = props.type || [];
    const colors = types
      .map((type) => props?.theme?.colors?.types?.[type] || "gray")
      .filter(Boolean);
    return colors.length > 1
      ? `linear-gradient(170deg, ${colors.join(", ")})`
      : colors[0] || "gray";
  }};
  border-radius: 8%;
  width: 200px;
  height: 200px;
`;

export const PokemonSprites = styled.img`
  height: 180px;
`;

export const PokemonText = styled.span`
  color: ${(props) => props?.theme?.colors?.types?.[props.type?.[0]] || "gray"};
  font-size: 1.25em;
  font-weight: bold;
`;
