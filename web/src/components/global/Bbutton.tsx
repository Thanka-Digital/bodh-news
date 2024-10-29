import { Button } from "@mantine/core";

interface BbuttonProps {
  text: string;
  variant?: string;
  color?: string;
  rounded?: string;
}

const Bbutton = (props: BbuttonProps) => {
  const {
    text,
    variant,
    color,
    rounded,
  } = props;

  return (
    <Button variant={variant} color={color} radius={rounded}>
      {text}
    </Button>
  )
}

export default Bbutton;