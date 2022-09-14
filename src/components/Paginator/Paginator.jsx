import { useContext } from "react";
import { PokeContext } from "../../state/context";

export const Paginator = () => {
  const { nextPage } = useContext(PokeContext);
  console.log("Paginator", nextPage);
  return (
    <div>
      <button>Next</button>
    </div>
  );
};
