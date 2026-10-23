export function Panel({ as: Tag = 'div', className = '', ...props }) {
  return <Tag className={`card border-0 shadow-sm rounded-4 ${className}`} {...props} />;
}
