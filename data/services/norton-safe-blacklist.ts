import { DataType } from "../serviices";

const reasons = [
  "Reputation Impact: Being blacklisted by Norton Safe Web can negatively affect your website's reputation and discourage visitors from accessing your site.",
  "Security Concerns: Norton Safe Web scans websites for malware, phishing, and other security vulnerabilities, aiming to protect users from potential threats.",
  "Search Engine Visibility: A blacklisted status by Norton can lead to a drop in search engine rankings, resulting in reduced organic traffic.",
];

const approach = [
  "Comprehensive Analysis: Our team conducts a thorough analysis to determine why your website is blacklisted by Norton Safe Web.",
  "Malware and Threat Removal: We identify and remove any malware, malicious code, or vulnerabilities that are causing the security issues.",
  "Security Enhancement: Our experts enhance your website's security by implementing best practices and measures to prevent future security breaches.",
  "Content Review and Compliance: We ensure your website's content complies with Norton Safe Web's guidelines and policies.",
  "Delisting Request: Once your website is secure and compliant, we submit a request to Norton Safe Web for delisting.",
  "Preventive Measures: We establish ongoing security monitoring and take preventive measures to safeguard your website from future blacklisting incidents.",
  "Continuous Monitoring: Our team provides continuous monitoring to promptly address any security concerns and maintain a secure online presence.",
];

export const nortonSafe: DataType = {
  paragraph: "",
  reasons: {
    title: "Why Your Website is Blacklisted by Norton Safe Web",
    list: reasons,
  },
  approach: {
    title: "Our Approach to Resolving Norton Safe Web Blacklist Issues",
    list: approach,
  },
  deliveryTime: {
    title: "Estimated Resolution Time",
    text: "The time it takes to remove malware from a WordPress site depends on the complexity and extent of the infection. Typically, our WordPress Malware Removal service is completed within [timeframe]. We prioritize rapid,efficient, and thorough cleaning to minimize any disruptions to your online presence.",
  },
};
