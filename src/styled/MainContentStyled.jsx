import styled from "styled-components";

const MainContentStyled = styled.div`
  .rentang__box {
    width: 100%;
    margin-bottom: 2rem;

    &-title,
    &-item {
      display: flex;
      gap: 1rem;
      justify-content: space-evenly;

      padding: 1rem;
      border: 1px solid black;
    }

    &-title {
      font-style: bold;
      font-weight: 500;
    }

    &-item {
      &-des {
        flex: 50%;
        text-align: left;
      }
      &-ket {
        flex: 50%;
        text-align: left;
      }
    }
  }

  .kepuasan__box {
    font-size: 2rem;
    font-weight: 700;
    display: flex;

    &-info {
      display: flex;
      flex-direction: column;
      gap: 3rem;
      align-items: center;

      &-index {
        font-size: 3rem;
      }
    }

    &-final {
      display: flex;
      flex: 1;
      align-items: center;
      justify-content: center;

      &-akhir {
        font-size: 5rem;
        border: 1px solid black;
        padding: 3rem;
        border-radius: 50px;
      }
    }
  }
`;
export default MainContentStyled;
