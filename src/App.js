import { SimpleGrid, Container } from "@mantine/core";

import AnimalCard from "./AnimalCard";

const dati = [
  {
    name: "Džeris",
    species: "Suns",
    age: 5,
    description: "Džeris ir draudzīgs. Būs piemērots ģimenēm ar bērniem.",
    image:
      "https://media.istockphoto.com/photos/happy-adopted-dog-playing-in-the-garden-picture-id1138793510?k=20&m=1138793510&s=612x612&w=0&h=ZnFjIksvjNWwMTD0H4fH24h4eqEMb1TvGZRGG5acUzg=",
  },
  {
    name: "Muris",
    species: "Kaķis",
    age: 7,
    description:
      "Murim patīk sildīties pie kamīna, tomēr vēl vairāk viņš novērtē cilvēka sirds siltumu.",
    image:
      "https://images.unsplash.com/photo-1511044568932-338cba0ad803?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTh8fGNhdHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=900&q=60",
  },
  {
    name: "Rožers",
    species: "jūrascūka",
    age: 2,
    description: "Rodžeram patīk sildīties saulītē un ēst zaļas lapas.",
    image:
      "https://www.petekspo.lv/wp-content/uploads/2019/10/j%C5%ABras-c%C5%ABci%C5%86a-lv.jpg",
  },
];

function App() {
  const allAnimalsRendered = dati.map((animal) => (
    <AnimalCard dati={animal} key={animal.name} />
  ));

  return (
    <Container>
      <SimpleGrid cols={3}>{allAnimalsRendered}</SimpleGrid>
    </Container>
  );
}

export default App;
