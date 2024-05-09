import HeaderDashboard from "./header/HeaderDashboard";
import MainDashboard from "./main/MainDashboard";

export function Dashboard() {
  return (
    <>
      <div className="flex flex-col">
        <HeaderDashboard />
        <MainDashboard />
      </div>
    </>
  );
}
