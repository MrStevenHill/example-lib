import React from "react";
import styled from "styled-components";

const StyledExample = styled.div`
  color: blue;
`;

class Example extends React.Component {
  render() {
    return <StyledExample>lib component</StyledExample>;
  }
}

export default Example;
