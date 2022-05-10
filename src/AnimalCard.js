import { Text, Card, Image, Badge, Group, Button } from "@mantine/core";

function AnimalCard({ dati }) {
  return (
    <Card shadow="sm" p="lg">
      <Card.Section>
        <Image src={dati.image} height={160} alt={dati.name} />
      </Card.Section>
      <Group position="apart" style={{ marginBottom: 5, marginTop: 5 }}>
        <Text weight={500}>{dati.name}</Text>
        <Badge color="pink" variant="light">
          {dati.species}
        </Badge>
        <Badge color="green" variant="light">
          {dati.age} gadi
        </Badge>
      </Group>
      <Text size="sm" style={{ lineHeight: 1.5 }}>
        {dati.description}
      </Text>
      <Button onClick={() => console.log(dati.name + "ir paņemts")}>
        Poga
      </Button>
    </Card>
  );
}

export default AnimalCard;
