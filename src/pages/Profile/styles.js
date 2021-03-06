import styled from 'styled-components';

export const Content = styled.div`
  max-width: 63.75em;
  height: 100%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
`;

export const FooterForm = styled.footer`
  display: flex;
  justify-content: space-between;
  > div {
    display: flex;
    align-items: center;
  }
  a,
  span {
    text-decoration: none;
    color: var(--dark-purple);
    &:hover {
      text-decoration: underline;
    }
  }
`;
