enum DomainType {
  "org" = "organization",
  "com" = "commercial",
  "net" = "network",
  "info" = "information",
}

export const domainType = (domains: string[]): string[] => domains.map(domain => DomainType[domain.split('.')?.[domain.split('.').length - 1]]);

console.log(domainType(["en.wiki.org", "codefights.com", "happy.net", "code.info"]));