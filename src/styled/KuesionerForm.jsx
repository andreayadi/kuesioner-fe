import styled from "styled-components";

const KuesionerForm = styled.form`
  .resp__desc {
    display: flex;
    justify-content: space-between;
    gap: 1rem;
    margin-bottom: 2rem;

    &-ages,
    &-apps {
      display: flex;
      flex-direction: column;
    }

    .input_date {
      padding: 1rem;
      height: 100%;

      border: none;

      :active {
        outline: gray;
      }
    }

    &-apps {
      flex: 1;
    }
  }

  .kues {
    &__ind {
      margin-bottom: 3rem;
    }

    &__ind-title {
      text-transform: uppercase;
      text-decoration: underline;
      font-size: 1.8rem;
      font-weight: 500;
      font-style: italic;
    }

    &__ind-box {
      display: flex;
      align-items: center;
      gap: 1rem;
      margin-bottom: 1rem;

      &-item {
        width: 70%;
      }

      &-answ {
        flex: 1;
      }
    }
  }

  .submit__box {
    width: 100%;
    padding: 1rem;

    font-size: 1.6rem;
  }
`;

export default KuesionerForm;
