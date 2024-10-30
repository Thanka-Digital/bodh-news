import { Card, Image, Text } from "@mantine/core";

export default function RelatedNewsCard() {
  return (
    <Card shadow="sm" px={8} m={0} w={420}>
      <Image src="images/npb.png" height={60} alt="news image" />
      <Text size="lg" fw={600} ta="justify">
        With Fjord Tours you can explore more of the magical fjord landscapes
        with tours and activities on and around the fjords of Norway
      </Text>
    </Card>
  );
}
