import { Search } from 'lucide-react';
import { Input } from "@mantine/core";

interface BInputProps {
  placeholder?: string;
  icon?: boolean;
}

const BInput = (props: BInputProps) => {
  const {
    placeholder,
    icon,
  } = props;

  return (
    <Input placeholder={placeholder} leftSection={<Search />} />
  )
}

export default BInput;