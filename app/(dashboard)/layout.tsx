import Header from "@/components/header";

type Props = {
  children: React.ReactNode;
};

const DashboardLayout = ({ children }: Props) => {
  return (
    <>
      <main>
        <Header />
        {children}
      </main>
    </>
  );
};

export default DashboardLayout;
