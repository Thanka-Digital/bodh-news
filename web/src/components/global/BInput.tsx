import { Input } from "@mantine/core";

interface BInputProps {
  placeholder?: string;
  icon?: React.ReactNode
  size?: string;
  rounded?: string;
}

const BInput = (props: BInputProps) => {
  const {
    placeholder,
    icon,
    size,
    rounded,
  } = props;

  return (
    <Input placeholder={placeholder} leftSection={icon} size={size} radius={rounded} />
  )
}

export default BInput;