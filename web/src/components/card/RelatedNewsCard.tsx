import { Card, Image, Text } from "@mantine/core";

export default function RelatedNewsCard() {
  return (
    <Card shadow="sm" p={16} m={0} w={420}>
      <Image src="images/npb.png" height={60} alt="news image" />
      <Text
        size="md"
        fw={600}
        ta="justify"
        mt={4}
        className="overflow-hidden text-ellipsis whitespace-pre"
      >
        With Fjord Tours you can explore more of the magical fjord landscapes
        with tours.
      </Text>
    </Card>
  );
}
