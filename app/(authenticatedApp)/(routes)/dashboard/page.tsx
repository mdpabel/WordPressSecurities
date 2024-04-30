import { currentUser } from '@clerk/nextjs';
import { Title } from '@/components/Title';

const Dashboard = async () => {
  const user = await currentUser();
  const fullName = user?.firstName + ' ' + user?.lastName;

  return <Title>Welcome {fullName}</Title>;
};

export default Dashboard;
