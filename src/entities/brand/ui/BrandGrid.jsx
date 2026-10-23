export function BrandGrid({ children, ...props }) {
  return (
    <div className="row row-cols-1 row-cols-sm-2 row-cols-lg-3 g-3" {...props}>
      {children}
    </div>
  );
}
