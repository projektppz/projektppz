import React from 'react';
import styled from 'styled-components';
import { Bar } from '../common/Bar';
import { setFlex } from '../../styles/functions';
import { colors } from '../../styles/colors';

const Wrapper = styled.div`
  ${setFlex()};
  .advertisement {
  }
  .container {
    flex: 1;
    border: 1px solid ${colors.orange};
    border-radius: 10px;
    margin: 20px 10px;
    height: 70vh;
    overflow-x: hidden;
    &::-webkit-scrollbar{
      display: none;
    }
  }
  .c{
    flex: 1;
  }
  .news{
    height: 35vh;
  }
  .lotto{
    height: calc(35vh - 20px);
  }
`;

export const IndexPage = () => {
  return (
    <Wrapper>
      <div className="advertisement container">
        <Bar
          title="Jakies ogłoszenie losowe"
          content="Sprtest test test test test test test test test"
          date="22.10.2021"
        />
        <Bar
          title="Jakies ogłoszenie losowe"
          content="test test test test test test test test test"
          date="22.10.2021"
        />
        <Bar
          title="Ja"
          content="Sp"
          date="22.10.2021"
        />
        <Bar
          title="Ja"
          content="Sp"
          date="22.10.2021"
        />
        <Bar
          title="Ja"
          content="Sp"
          date="22.10.2021"
        />
        <Bar
          title="Ja"
          content="Sp"
          date="22.10.2021"
        />
      </div>
      <div className="c">
        <div className="news container">
          <Bar
            title="Jakies news losowe"
            content="test test test test test test test test test"
            date="22.10.2021"
          />
        </div>
        <div className="lotto container">TU BĘDZIE LOTTO</div>
      </div>
    </Wrapper>
  );
};
