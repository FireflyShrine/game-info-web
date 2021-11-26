import { HStack, Text, IconButton, Tooltip, Box } from "@chakra-ui/react";
import { HiPencilAlt, HiTrash } from "react-icons/hi";
import { IPlatform } from "../../../api/platforms";

type PlatformProps = {
  developer: IPlatform;
  onEditClick: React.MouseEventHandler<HTMLButtonElement>;
  onDeleteClick: React.MouseEventHandler<HTMLButtonElement>;
};

function CardDeveloper({ developer, onDeleteClick, onEditClick }: PlatformProps) {
  return (
    <HStack
      border="1px"
      borderColor="#999999"
      borderRadius="10px"
      justifyContent="space-between"
    >
      <Text fontSize={16} padding="8px">
        {developer.nome}
      </Text>
      <Box>
        <Tooltip hasArrow label="Editar desenvolvedora" placement="top">
          <IconButton
            colorScheme="whatsapp"
            aria-label="Edição de plataforma"
            margin={1}
            icon={<HiPencilAlt />}
            onClick={onEditClick}
          />
        </Tooltip>

        <Tooltip hasArrow label="Remover desenvolvedora" placement="top">
          <IconButton
            colorScheme="red"
            margin={1}
            aria-label="Apagar desenvolvedora"
            icon={<HiTrash />}
            onClick={onDeleteClick}
          />
        </Tooltip>
      </Box>
    </HStack>
  );
}

export default CardDeveloper;
