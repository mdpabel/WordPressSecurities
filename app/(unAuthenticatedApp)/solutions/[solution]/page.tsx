import React from "react";
import PricingColumnBody from "../../PricingColumnBody";
import Portfolio from "../Portfolio";
import PricingCard from "../PricingCard";
import ComponentWrapper from "@/components/common/ComponentWrapper";
import { SectionTitleWithSubTitle } from "@/components/common/Title";

type SolutionType = {
  params: {
    solution: string;
  };
};

const Solution = ({ params }: SolutionType) => {
  const service = {
    title: "Blacklist Removal",
    explanation: "",
    Portfolio: "",
    Pricing: "",
  };
  return (
    <ComponentWrapper>
      <SectionTitleWithSubTitle
        title="Malware Removal Services"
        subTitle="Get Your Website Clean and Secure from Malicious Threats"
      />
      {/* <ReactMarkdown>{service.explanation}</ReactMarkdown> */}
      <div>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab ullam
        officia nam assumenda in maiores enim necessitatibus laudantium natus
        nesciunt sapiente molestias nisi commodi ex harum repellat, sed minus.
        Exercitationem, nobis perspiciatis quod autem saepe eum accusantium
        aliquid, maxime cum animi expedita. Illum hic labore magni itaque
        impedit aspernatur enim assumenda vitae iusto nulla dignissimos suscipit
        quis libero delectus iste qui nisi minus, nobis nostrum sequi sapiente
        ipsum! A cupiditate quia sit, sapiente corrupti impedit necessitatibus
        illum minima atque, ratione debitis nulla distinctio inventore
        repellendus placeat aliquam ad, commodi natus alias veniam odit
        perferendis iste eos! Rem iusto facere ratione, quidem neque repudiandae
        voluptas blanditiis veritatis ducimus unde suscipit non fugiat ipsa,
        deserunt odit quaerat asperiores. Expedita illum, tempore accusamus
        exercitationem fugit dolorum esse nemo voluptatem magni atque ducimus
        odio debitis optio laborum delectus? Est tenetur dolore nisi,
        repellendus veniam in corporis numquam voluptas voluptatum alias libero
        soluta ab fugit sequi praesentium error provident non maiores eos esse!
        Modi ad harum veniam optio, commodi nulla nisi voluptate praesentium
        adipisci, veritatis ab. Cum aut ipsa hic saepe harum, atque
        necessitatibus. Maxime ipsam, sequi inventore ullam nostrum accusantium
        quam aliquam suscipit aliquid reprehenderit facilis, placeat provident
        corporis quibusdam illum reiciendis ducimus tempora deserunt nulla
        quaerat, vel ex! Deserunt voluptatum delectus, deleniti eligendi quas
        voluptatibus harum iste commodi veritatis suscipit dolor iusto,
        voluptate accusamus? Necessitatibus, ea voluptas! Sunt expedita natus
        optio reiciendis harum temporibus officiis quia quasi, et perspiciatis
        deserunt amet dolores totam excepturi est deleniti iure maiores libero!
        Sunt asperiores accusantium quae unde corporis perferendis reiciendis
        debitis tenetur ipsam, velit quasi in temporibus consectetur? Placeat
        aut tempora doloribus temporibus, sed error commodi quod et consequatur.
        Illo minima dolorum, iure amet provident dignissimos accusamus nam
        repellat consequatur quasi fuga pariatur? Quam ullam quod ad sint
        recusandae, nemo corporis ex error deleniti sunt fugit officia harum
        blanditiis fugiat aliquam beatae enim repudiandae ea repellendus non
        reiciendis eveniet possimus quas sit! Optio debitis ut dignissimos,
        ratione aspernatur illum labore odit mollitia ab. Amet laboriosam
        quibusdam architecto molestiae sequi modi commodi provident consectetur
        voluptatum minima possimus, neque excepturi ullam, laudantium, magni
        earum. Dignissimos, culpa tenetur! Facere, omnis sint. Alias animi dolor
        temporibus excepturi quibusdam fuga odio quisquam ducimus illo officiis
        sint recusandae provident nihil, cumque impedit delectus ipsam error
        iusto inventore. Quisquam nesciunt corrupti, ad rem impedit totam,
        architecto aperiam ea corporis vel nisi odit iste! Totam dolorem amet
        rerum, deleniti velit officiis recusandae ullam at perferendis sapiente,
        voluptas nobis ratione obcaecati! Officiis totam quam voluptates ad
        reprehenderit reiciendis libero ullam. Ipsum soluta hic placeat
        quibusdam expedita dolorem tempora praesentium nobis. Ea, earum officia
        vel blanditiis accusamus accusantium reprehenderit laboriosam sint
        distinctio eligendi odio quam possimus amet necessitatibus ut alias enim
        nisi expedita sed dolorem quis dolor atque saepe voluptates. Vitae,
        consectetur nostrum sit omnis enim dolor. Ratione incidunt aspernatur
        provident atque quae officia corporis delectus vitae, magni excepturi,
        labore expedita fuga soluta molestias libero, illum officiis.
        Repudiandae saepe commodi ad expedita quibusdam accusantium quo animi
        perferendis tempora quis, aspernatur quidem odit mollitia aliquam
        magnam? Aspernatur.
      </div>
      <Portfolio />

      <PricingCard />
    </ComponentWrapper>
  );
};

export default Solution;
