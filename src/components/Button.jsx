export default function Button({ href, children, variant = "primary" }) {
  const className = `btn btn-${variant}`;

  if (href) {
    return (
      <a className={className} href={href}>
        {children}
      </a>
    );
  }

  return <button className={className}>{children}</button>;
}
