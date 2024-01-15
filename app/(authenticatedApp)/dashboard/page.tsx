import { currentUser } from '@clerk/nextjs';
import { Title } from '@/components/ui/Title';

const Dashboard = async () => {
  const user = await currentUser();
  const fullName = user?.firstName + ' ' + user?.lastName;

  return <Title>Welcome {fullName}</Title>;
};

export default Dashboard;
