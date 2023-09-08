"use client";

import {
  EmailShareButton,
  FacebookShareButton,
  LinkedinShareButton,
  TwitterShareButton,
} from "react-share";
import {
  EmailIcon,
  FacebookIcon,
  LinkedinIcon,
  TwitterIcon,
} from "../common/icons";
import ViewCount from "./ViewCount";

interface ISocialShare {
  url: string;
  id: string;
}

const SocialShare = ({ url, id }: ISocialShare) => {
  return (
    <div className="grid grid-cols-2 pb-4 space-y-4 md:grid-cols-5 md:space-y-0 md:space-x-4 ">
      <ViewCount id={id} />
      <div className="md:hidden"></div>
      <FacebookShareButton url={url}>
        <div
          style={{
            backgroundColor: "#4460A0",
            color: "#fff",
          }}
          className="flex items-center px-5 py-1 mr-4 space-x-3 rounded cursor-pointer md:mr-0"
        >
          <span>
            <FacebookIcon />
          </span>
          <span className="md:block">Share</span>
        </div>
      </FacebookShareButton>

      <TwitterShareButton url={url}>
        <div
          style={{
            backgroundColor: "#2795E9",
            color: "#fff",
          }}
          className="flex items-center px-5 py-1 mr-4 space-x-3 rounded cursor-pointer md:mr-0"
        >
          <span>
            <TwitterIcon />
          </span>
          <span className="md:block">Tweet</span>
        </div>
      </TwitterShareButton>

      <LinkedinShareButton url={url}>
        <div
          style={{
            backgroundColor: "#007EBB",
            color: "#fff",
          }}
          className="flex items-center px-5 py-1 mr-4 space-x-3 rounded cursor-pointer md:mr-0"
        >
          <span>
            <LinkedinIcon />
          </span>
          <span className="md:block">Share</span>
        </div>
      </LinkedinShareButton>

      <EmailShareButton url={url}>
        <div
          style={{
            backgroundColor: "#CD2900",
            color: "#fff",
          }}
          className="flex items-center px-5 py-1 mr-4 space-x-3 rounded cursor-pointer md:mr-0"
        >
          <span>
            <EmailIcon />
          </span>
          <span className="md:block">Email</span>
        </div>
      </EmailShareButton>
    </div>
  );
};

export default SocialShare;
