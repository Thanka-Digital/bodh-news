import { Button } from "@mantine/core";

interface BbuttonProps {
  text: string;
  variant?: string;
  color?: string;
  rounded?: string;
  size?: string;
}

const Bbutton = (props: BbuttonProps) => {
  const {
    text,
    variant,
    color,
    rounded,
    size
  } = props;

  return (
    <Button variant={variant} color={color} radius={rounded} size={size}>
      {text}
    </Button>
  )
}

export default Bbutton;