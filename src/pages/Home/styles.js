import styled from "styled-components";

export const HomeContainer = styled.div`
  max-width: 1120px;
  margin: 0 auto;
  background-color: #333;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

export const Title = styled.h1`
  font-size: 18px;
  color: #fff;
  text-align: center;
  padding: 20px 0;
`;

export const CategoryList = styled.div`
  display: flex;
  width: 100%;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  margin-bottom: 3rem;
`;

export const FactContainer = styled.article`
  width: 90%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
  user-select: none;
  margin-bottom: 4rem;
`;

export const Fact = styled.blockquote`
  width: 100%;
  font: 2.65em CallunaRegular;
  letter-spacing: 0.075em;
  padding: 45px 0 30px 25px;
  border-top: 2px dotted #858585;
  border-bottom: 2px dotted #858585;
  transform: rotate(-3deg);
  -webkit-transform: rotate(-3deg);
  -moz-transform: rotate(-3deg);
  margin-bottom: 2rem;

  :first-line {
    font: 1.85em "Sketch Block";
    color: #fff79e;
  }

  :first-letter {
    font: 2em "Sketch Block";
    text-transform: upper-case;
    float: left;
    line-height: 0.52em;
    position: relative;
    z-index: 1;
  }

  em {
    border-bottom: 2px dotted #858585;
  }

  @media (max-width: 420px) {
    width: 100%;
    font: 2em CallunaRegular;
    letter-spacing: 0.075em;
    padding: 25px 0 30px 25px;
    border-top: 2px dotted #858585;
    border-bottom: 2px dotted #858585;
    transform: rotate(-3deg);
    -webkit-transform: rotate(-3deg);
    -moz-transform: rotate(-3deg);

    :first-line {
      font: 1.85em "Sketch Block";
      color: #fff79e;
    }
  }
`;
