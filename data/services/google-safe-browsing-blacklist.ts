import { DataType } from "../serviices";

const reasons = [
  "Malicious Content Detection: Google Safe Browsing scans websites for malicious content, such as phishing pages, malware, and deceptive downloads.",
  "Protection for Users: When Google detects unsafe content on a website, it warns users with a red warning page, discouraging them from accessing the site.",
  "Search Engine Impact: Websites flagged by Google Safe Browsing may experience a drop in search engine rankings and reduced organic traffic.",
];

const approach = [
  "Diagnosis and Analysis: Our team conducts a thorough analysis of your website to identify the source of the Google Safe Browsing warning.",
  "Malware Removal: If malware is detected, we promptly remove it from your website to eliminate the security threat.",
  "Phishing Page Removal: We locate and remove any phishing pages that might be causing the red warning message.",
  "Deceptive Download Removal: If your site hosts deceptive downloads, we clean up the content and ensure compliance with Google's guidelines.",
  "Content Review and Cleanup: We review your website's content to ensure that it complies with Google's Safe Browsing policies.",
  "Request Review: After cleaning your website, we submit a review request to Google to remove the red warning and blacklist status.",
  "Preventive Measures: We implement security measures to prevent future occurrences, including regular security scans and updates.",
  "Monitoring and Maintenance: Our team continuously monitors your website to ensure it stays clear of any Google Safe Browsing issues.",
];

export const googleSafeBrowsing: DataType = {
  paragraph: "",
  reasons: {
    title: "Why Your Website is on Google Safe Browsing Blacklist",
    list: reasons,
  },
  approach: {
    title: "Our Approach to Resolving Google Safe Browsing Issues",
    list: approach,
  },
  deliveryTime: {
    title: "Estimated Resolution Time",
    text: "The time it takes to remove malware from a WordPress site depends on the complexity and extent of the infection. Typically, our WordPress Malware Removal service is completed within [timeframe]. We prioritize rapid,efficient, and thorough cleaning to minimize any disruptions to your online presence.",
  },
};
