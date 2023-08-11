import ComponentWrapper from "@/components/ComponentWrapper";
import Title from "../Title";
import Button from "@/components/Button";
import SubTitle from "../SubTitle";
import Subscription from "./Subscription";

const ManageSubscription = () => {
  return (
    <div className="space-y-4">
      <Title>Manage Subscription</Title>
      <div className="space-y-6">
        <Subscription />
        <Subscription />
        <Subscription />
        <Subscription />
      </div>
    </div>
  );
};

export default ManageSubscription;
