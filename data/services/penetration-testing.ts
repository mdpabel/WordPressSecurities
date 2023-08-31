import { DataType } from "../serviices";

const benefits = [
  "Identify Vulnerabilities: Pinpoint potential weaknesses in your systems before malicious actors exploit them.",
  "Enhance Security: Strengthen your defenses by addressing vulnerabilities and improving security measures.",
  "Regulatory Compliance: Meet industry standards and compliance requirements with thorough security testing.",
  "Risk Mitigation: Minimize the risk of data breaches, financial losses, and reputational damage.",
];

const approach = [
  "Planning: We collaborate with you to define the scope, goals, and testing parameters.",
  "Reconnaissance: Our team gathers information about your systems to simulate real-world attacks.",
  "Vulnerability Assessment: We systematically identify and analyze vulnerabilities in your environment.",
  "Exploitation: With your permission, we attempt to exploit identified vulnerabilities to assess their severity.",
  "Reporting: You receive a comprehensive report detailing vulnerabilities, risks, and recommended actions.",
];

export const penetrationTesting: DataType = {
  paragraph:
    "Protect your digital assets with our Penetration Testing service. Uncover vulnerabilities, assess risks, and fortify your defenses with our thorough security assessments.",
  reasons: {
    title: "Benefits of Penetration Testing",
    subTitle:
      "Penetration testing offers a range of advantages for your organization's security posture. Key benefits include:",
    list: benefits,
  },
  approach: {
    title: "Our Penetration Testing Approach",
    list: approach,
  },
  deliveryTime: {
    title: "Estimated Resolution Time",
    text: "The time it takes to remove malware from a WordPress site depends on the complexity and extent of the infection. Typically, our WordPress Malware Removal service is completed within [timeframe]. We prioritize rapid,efficient, and thorough cleaning to minimize any disruptions to your online presence.",
  },
};
