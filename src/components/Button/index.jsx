import { ButtonRed, ButtonWhite } from "./styles";

function Button({ children, red, ...props }) {
  return (
    <div>
      {red ? (
        <ButtonRed type="button" {...props}>
          {children}
        </ButtonRed>
      ) : (
        <ButtonWhite type="button" {...props}>{children}</ButtonWhite>
      )}
    </div>
  );
}

export default Button;
