import type { NextPage } from "next";
import { LayoutApp } from "../../components/admin/layout.app";
import { ProfileForm } from "../../components/admin/profile.form";
import { PageLoaing } from "../../components/loading";
import { useFindProfileQuery } from "../../redux/service/profile.service";

const App: NextPage = () => {
  const {
    data,
    isLoading,
    isFetching,
    isError,
    isSuccess,
    error,
  } = useFindProfileQuery("77cb4539-c850-43fe-900e-35dcff912393");

  if (isLoading || isFetching) {
    return <PageLoaing />;
  }

  if (isError) {
    return <div>Error Fetching Data</div>;
  }

  return (
    <LayoutApp>
      {
        isSuccess ? <ProfileForm profile={data.data} /> : null
      }
    </LayoutApp>
  );
};

export default App;
