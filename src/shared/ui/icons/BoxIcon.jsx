import { Icon } from './Icon';

export function BoxIcon(props) {
  return (
    <Icon {...props}>
      <path d="M2 5 8 2l6 3v6l-6 3-6-3z" />
      <path d="m2 5 6 3 6-3M8 8v6" />
    </Icon>
  );
}
