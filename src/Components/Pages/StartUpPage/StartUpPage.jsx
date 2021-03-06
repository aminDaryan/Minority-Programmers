import React, { useEffect, useState } from "react";

// Utils
import styled from "styled-components";
import PropTypes from "prop-types";

// Components
import ContentHeader from "./Components/ContentHeader";
import Content from "./Components/ContentMain";

const ContentContainer = styled.div`
  height: 100%;
  padding: 3rem 0;
`;

export default function StartUpPage(props) {
  const [startUpInfo, setStartUpInfo] = useState(null);

  useEffect(() => {
    setStartUpInfo(props.location.state.item);
  }, [props]);

  return (
    <ContentContainer>
      <ContentHeader startUpInfo={startUpInfo} />
      <Content startUpInfo={startUpInfo} />
    </ContentContainer>
  );
}

StartUpPage.propTypes = {
  location: PropTypes.shape({
    state: PropTypes.shape({
      item: PropTypes.shape({}).isRequired,
    }).isRequired,
  }).isRequired,
};
