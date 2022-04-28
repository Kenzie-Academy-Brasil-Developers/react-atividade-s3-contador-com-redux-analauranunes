import { useDispatch, useSelector } from "react-redux";
import { changeNext, changePrevious } from "../../Modules/action";
import { Button } from "../Button";
import { ContainerDiv } from "./style";

export const Counter = () => {
  const dispatch = useDispatch();
  const counter = useSelector((state) => state.counter);

  const handleClickPrev = () => {
    dispatch(changePrevious(1));
  };

  const handleClickNext = () => {
    dispatch(changeNext(1));
  };

  return (
    <ContainerDiv>
      <h1>Contador: <span>{counter}</span></h1>
      <div>
        <Button onClick={handleClickPrev}>Subtraia do contador</Button>
        <Button onClick={handleClickNext}>Adicione ao contador</Button>
      </div>
    </ContainerDiv>
  );
};
