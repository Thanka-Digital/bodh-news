import { Button } from "@mantine/core";

interface BbuttonProps {
  text: string;
  variant?: string;
  color?: string;
}

const Bbutton = (props: BbuttonProps) => {
  const {
    text,
    variant,
    color
  } = props;

  return (
    <Button variant={variant} color={color}>
      {text}
    </Button>
  )
}

export default Bbutton;