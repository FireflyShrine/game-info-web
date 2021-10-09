import { Button, ButtonProps } from "@chakra-ui/react";
import { WithChildren } from "../../../../../@types/with-children";

interface Props extends ButtonProps {
  isRequesting?: boolean;
}
const SubmitButton = ({
  isRequesting,
  children,
  ...rest
}: WithChildren<Props>) => {
  return (
    <Button
      type="submit"
      isDisabled={isRequesting}
      isLoading={isRequesting}
      colorScheme="blue"
      variant={rest.variant ?? "solid"}
      loadingText={rest.loadingText ?? "Enviando"}
      spinnerPlacement={rest.spinnerPlacement ?? "start"}
      {...rest}
    >
      {children ?? "Enviar"}
    </Button>
  );
};

export default SubmitButton;
