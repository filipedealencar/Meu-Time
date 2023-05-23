import { ContainerPlayers, ImagePlayers, NamePlayers } from "./styles";

export const BadgePlayers: React.FC<{ name: string; img: string }> = ({
  name,
  img,
}) => {
  return (
    <ContainerPlayers>
      <ImagePlayers src={img} />
      <NamePlayers>{name}</NamePlayers>
    </ContainerPlayers>
  );
};
