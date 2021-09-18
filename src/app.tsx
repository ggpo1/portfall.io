import React, { memo } from "react";
import { Wrapper, SecondWrapper, ThirdWrapper, MainWrapper } from "wrapper";

export const App = memo(() => {
  return (
    <Wrapper>
      <SecondWrapper>
        <ThirdWrapper>
          <MainWrapper>
            {/* Portfall io */}
          </MainWrapper>
        </ThirdWrapper>
      </SecondWrapper>
    </Wrapper>
  );
});
