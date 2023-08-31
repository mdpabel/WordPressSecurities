import { SubMenuHefType } from "./navItems";
import { avastBlacklist } from "./services/avast-blacklist";
import { ddos } from "./services/ddos";
import { googleSafeBrowsing } from "./services/google-safe-browsing-blacklist";
import { internalServerError } from "./services/internal-server-error";
import { malwarePrevention } from "./services/malware-prevention";
import { malwareRemoval } from "./services/malware-removal";
import { mcafeeBlacklist } from "./services/mcafee-blacklist";
import { nortonSafe } from "./services/norton-safe-blacklist";
import { penetrationTesting } from "./services/penetration-testing";
import { sslInstallation } from "./services/ssl-installation";
import { redirectMalware } from "./services/website-redirection-due-to-malware";

export type DataType = {
  paragraph: string;
  reasons: {
    title: string;
    subTitle?: string;
    list: string[];
  };
  approach: {
    title: string;
    list: string[];
  };
  deliveryTime: {
    title: string;
    text: string;
  };
};

type ServiceType = {
  title: string;
  subTitle: string;
  page: SubMenuHefType;
  data: DataType;
};

export const services: ServiceType[] = [
  {
    title: "Malware Removal Services",
    subTitle: "Get Your Website Clean and Secure from Malicious Threats",
    page: "/malware-removal",
    data: malwareRemoval,
  },
  {
    title: "Avast Blacklist Resolution",
    subTitle: "Regain User Trust and Address Blacklist Warnings",
    page: "/avast-blacklist",
    data: avastBlacklist,
  },
  {
    title: "DDoS Protection Services",
    subTitle: "Safeguard Your Website from Disruptive DDoS Attacks",
    page: "/ddos-protection",
    data: ddos,
  },
  {
    title: "Google Safe Browsing Blacklist Resolution",
    subTitle: "Regain Trust and Reputation by Removing Blacklist Warnings",
    page: "/google-safe-browsing-blacklist",
    data: googleSafeBrowsing,
  },
  {
    title: "Internal Server Error Troubleshooting",
    subTitle:
      "Resolve 500 Internal Server Errors and Maintain Site Availability",
    page: "/internal-server-error",
    data: internalServerError,
  },
  {
    title: "WordPress Malware Prevention",
    subTitle: "Protect Your WordPress Site from Malicious Infections",
    page: "/malware-prevention",
    data: malwarePrevention,
  },
  {
    title: "McAfee Blacklist Removal",
    subTitle:
      "Eliminate Security Concerns and Restore Your Website's Reputation",
    page: "/mcafee-blacklist",
    data: mcafeeBlacklist,
  },
  {
    title: "Norton Safe Web Blacklist Removal",
    subTitle: "Restore Your Website's Reputation by Removing Blacklist Status",
    page: "/norton-safe-blacklist",
    data: nortonSafe,
  },
  {
    title: "Website Redirection Malware Cleanup",
    subTitle: "Stop Unauthorized Redirects and Ensure User Safety",
    page: "/redirect-malware",
    data: redirectMalware,
  },
  {
    title: "SSL Certificate Installation",
    subTitle: "Enhance Security and Trust with Proper SSL Certificate Setup",
    page: "/ssl-certificate-installation",
    data: sslInstallation,
  },
  {
    title: "Penetration Testing Services",
    subTitle: "Uncover Vulnerabilities and Strengthen Your Website's Security",
    page: "/penetration-testing",
    data: penetrationTesting,
  },
];

export const getSolution = (url: string) => {
  const page = "/" + url;
  return services.find((service) => service.page === page);
};
