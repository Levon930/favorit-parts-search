import { Icon } from './Icon';

export function WarningIcon(props) {
  return (
    <Icon {...props}>
      <path d="M8 2 1.5 13.5h13z" />
      <path d="M8 6.5v3M8 11.5v.01" />
    </Icon>
  );
}
