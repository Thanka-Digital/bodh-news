
import { Input } from "@mantine/core";

interface BInputProps {
  placeholder?: string;
  icon?: React.ReactNode
  size?: string;
}

const BInput = (props: BInputProps) => {
  const {
    placeholder,
    icon,
    size,
  } = props;

  return (
    <Input placeholder={placeholder} leftSection={icon} size={size} />
  )
}

export default BInput;