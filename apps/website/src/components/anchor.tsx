import { Link } from '@void/react';
import { classify, type ClassValue } from 'reclassify';

type LinkProps = React.ComponentProps<typeof Link>;

type AnchorProps = Omit<LinkProps, 'className'> & {
  className?: ClassValue;
};

const EXTERNAL_URL_PROTOCOL = /^[a-zA-Z][a-zA-Z\d+.-]*:/;
const INTERNAL_HOST_SUFFIXES = ['yangshuntay.com', 'localhost', '127.0.0.1'];

function isInternalHostname(hostname: string) {
  return INTERNAL_HOST_SUFFIXES.some(
    (suffix) => hostname === suffix || hostname.endsWith(`.${suffix}`),
  );
}

function isExternalHref(href: string) {
  if (
    href.startsWith('/') ||
    href.startsWith('#') ||
    href.startsWith('?') ||
    href.startsWith('./') ||
    href.startsWith('../')
  ) {
    return false;
  }

  if (!href.startsWith('//') && !EXTERNAL_URL_PROTOCOL.test(href)) {
    return false;
  }

  try {
    const url = new URL(href, 'https://localhost');

    return (
      (url.protocol === 'http:' || url.protocol === 'https:') &&
      !isInternalHostname(url.hostname.toLowerCase())
    );
  } catch {
    return false;
  }
}

function mergeExternalRel(rel?: string) {
  const relValues = new Set(rel?.split(/\s+/).filter(Boolean));

  relValues.add('noopener');
  relValues.add('noreferrer');

  return Array.from(relValues).join(' ');
}

export function Anchor({
  className,
  href,
  rel,
  target,
  ...props
}: AnchorProps) {
  const external = isExternalHref(href);

  return (
    <Link
      {...props}
      className={classify(className)}
      href={href}
      rel={external ? mergeExternalRel(rel) : rel}
      target={external ? '_blank' : target}
    />
  );
}
