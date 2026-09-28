import { Link } from 'react-router-dom';

/** Router <Link> for internal routes, or <a target="_blank"> for external URLs. */
export default function SmartLink({ link, className, children, ariaLabel }) {
  if (link.kind === 'external') {
    return (
      <a href={link.href} target="_blank" rel="noopener noreferrer" className={className} aria-label={ariaLabel}>
        {children}
      </a>
    );
  }
  return (
    <Link to={link.to} className={className} aria-label={ariaLabel}>
      {children}
    </Link>
  );
}
