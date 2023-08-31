import { Title, TitleWithBottomBorder } from "@/components/common/Title";
import { DataType } from "@/data/serviices";
import React, { ReactNode } from "react";

const WrapperDescription = ({ children }: { children: ReactNode }) => {
  return <div className="space-y-5">{children}</div>;
};

const DescriptionParagraph = ({
  children,
  title,
}: {
  title?: string;
  children: ReactNode;
}) => {
  return (
    <div className="space-y-1">
      {title && <TitleWithBottomBorder>{title}</TitleWithBottomBorder>}
      <p>{children}</p>
    </div>
  );
};

const DescriptionList = ({
  title,
  subTitle,
  items,
}: {
  title: string;
  items: string[];
  subTitle?: string;
}) => {
  return (
    <div className="space-y-4">
      <div className="space-y-1">
        <TitleWithBottomBorder>{title}</TitleWithBottomBorder>
        {subTitle && <p>{subTitle}</p>}
      </div>
      <ul className="space-y-1">
        {items.map((item, index) =>
          item.includes(":") ? (
            <li key={index}>
              <strong>{item.split(":")[0]}:</strong> {item.split(":")[1]}
            </li>
          ) : (
            <li className="list-disc" key={index}>
              {item}
            </li>
          )
        )}
      </ul>
    </div>
  );
};

const reasons = [
  "Vulnerable Plugins or Themes: Outdated or poorly coded plugins and themes can create security vulnerabilities that malware exploits.",
  "Weak Passwords: Weak administrator passwords provide an easy entry point for hackers to gain access and inject malware.",
  "Unsafe Downloads: Downloading themes, plugins, or scripts from untrusted sources can introduce malicious code into your WordPress site.",
  "Unsecure Hosting: Using a low-quality or insecure hosting provider can expose your website to malware attacks.",
];

const approach = [
  "Thorough Site Scan: Our experienced team performs a comprehensive scan of your WordPress site to detect and identify all forms of malware.",
  "Customized Removal Plan: Based on the scan results, we create a tailored strategy to effectively remove the malware from your website.",
  "Malware Removal Process: Our experts use advanced tools and techniques to eliminate malware, ensuring that your website is clean and secure.",
  "Security Enhancements: After removing malware, we bolster your website's security by updating plugins, themes, and implementing best security practices.",
];

const solution = {
  paragraph:
    "Is your WordPress website acting strange? Are you encountering unexpected errors, slow loading times, or suspicious redirects? Your website might be compromised by malware. Our specialized 'WordPress Malware Removal' service is designed to clean up your website, enhance its security, and restore its functionality.",
  reasons: {
    title: "Why Do WordPress Malware Infections Happen?",
    subTitle:
      "WordPress malware infections can occur due to a variety of reasons, including:",
    list: reasons,
  },
  approach: {
    title: "Our Approach to Resolution",
    list: approach,
  },
  deliveryTime: {
    title: "Estimated Resolution Time",
    text: "The time it takes to remove malware from a WordPress site depends on the complexity and extent of the infection. Typically, our WordPress Malware Removal service is completed within [timeframe]. We prioritize rapid,efficient, and thorough cleaning to minimize any disruptions to your online presence.",
  },
};

const Description = ({ solution }: { solution: DataType }) => {
  return (
    <WrapperDescription>
      <DescriptionParagraph>{solution.paragraph}</DescriptionParagraph>
      <DescriptionList
        items={solution.reasons.list}
        subTitle={solution.reasons.subTitle}
        title={solution.reasons.title}
      />
      <DescriptionList
        items={solution.approach.list}
        title={solution.approach.title}
      />

      <DescriptionParagraph title={solution.deliveryTime.title}>
        {solution.deliveryTime.text}
      </DescriptionParagraph>
    </WrapperDescription>
  );
};

export default Description;
