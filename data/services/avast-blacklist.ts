import { DataType } from "../serviices";

const reasons = [
  "Trust and Credibility Impact: Being blacklisted or flagged by Avast can erode user trust and discourage visitors from interacting with your website.",
  "Malware and Security Detection: Avast scans websites for malware, phishing attempts, and other security vulnerabilities, ensuring user safety.",
  "Search Engine Impact: Blacklisting by Avast can lead to lower search engine rankings and decreased organic traffic to your website.",
];

const approach = [
  "Comprehensive Assessment: Our team conducts a detailed assessment to identify the cause of your website being flagged or blacklisted by Avast.",
  "Malware and Threat Removal: We detect and eliminate malware, malicious code, and vulnerabilities that are causing the security issues.",
  "Security Enhancement: Our experts strengthen your website's security by implementing industry best practices to prevent future security breaches.",
  "Content Review and Compliance: We ensure that your website's content aligns with Avast's guidelines and policies.",
  "Delisting Request: After securing your website and ensuring compliance, we submit a request to Avast for delisting.",
  "Preventive Measures: We establish continuous security monitoring and preventive measures to protect your website from future blacklisting or warning incidents.",
  "Ongoing Monitoring: Our team provides ongoing monitoring to swiftly address any security concerns and maintain a secure online presence.",
];

export const avastBlacklist: DataType = {
  paragraph: "",
  reasons: {
    title: "Reasons Your Website is Flagged or Blacklisted by Avast",
    list: reasons,
  },
  approach: {
    title: "Our Approach to Resolving Avast Blacklist and Warning Issues",
    list: approach,
  },
  deliveryTime: {
    title: "Estimated Resolution Time",
    text: "The time it takes to remove malware from a WordPress site depends on the complexity and extent of the infection. Typically, our WordPress Malware Removal service is completed within [timeframe]. We prioritize rapid,efficient, and thorough cleaning to minimize any disruptions to your online presence.",
  },
};
