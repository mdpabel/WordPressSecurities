import { DataType } from "../serviices";

const reasons = [
  "Enhanced Security: SSL (Secure Sockets Layer) encrypts data transferred between a user's browser and your server, protecting sensitive information from potential threats.",
  "Trust and Credibility: Having an SSL certificate installed on your website displays a padlock symbol in the browser's address bar, indicating a secure connection and building trust with visitors.",
  "Search Engine Ranking: SSL is a ranking factor for search engines. Websites with SSL certificates tend to rank higher in search results, improving your site's visibility.",
];

const approach = [
  "Certificate Selection: We help you choose the right SSL certificate based on your website's needs, whether it's a domain-validated (DV), organization-validated (OV), or extended-validation (EV) certificate.",
  "Purchase and Registration: We guide you through the process of purchasing the chosen SSL certificate and completing the necessary registration with the certificate authority.",
  "CSR Generation: We generate a Certificate Signing Request (CSR) to provide to the certificate authority, ensuring your certificate is issued correctly.",
  "Certificate Validation: We assist in verifying your domain ownership or organization details, which may involve responding to emails or uploading verification files.",
  "Certificate Installation: Our team installs the SSL certificate on your web server, configuring it to work seamlessly with your website.",
  "Mixed Content Resolution: We ensure that all resources on your website are loaded securely over HTTPS, addressing any mixed content issues.",
  "Server Configuration Update: We modify server settings to enforce HTTPS across your entire website, ensuring a consistent secure browsing experience.",
  "Testing and Troubleshooting: Our experts thoroughly test the SSL installation to verify proper functionality and address any potential issues.",
  "Renewal Setup and Monitoring: We set up reminders for certificate renewal and provide ongoing monitoring to ensure your SSL certificate remains valid and active.",
];

export const sslInstallation: DataType = {
  paragraph: "SSL Installation",
  reasons: {
    title: "Benefits of SSL Certificate Installation",
    list: reasons,
  },
  approach: {
    title: "Our Approach to SSL Certificate Installation",
    list: approach,
  },
  deliveryTime: {
    title: "Estimated Resolution Time",
    text: "The time it takes to remove malware from a WordPress site depends on the complexity and extent of the infection. Typically, our WordPress Malware Removal service is completed within [timeframe]. We prioritize rapid,efficient, and thorough cleaning to minimize any disruptions to your online presence.",
  },
};
