import { Layout } from "./components/layout/component";
import { Tabs } from "./components/tabs/component";
import { restaurants } from "./constants/mocks";

export const App = () => {
  return (
    <Layout className="layout">
      <div className="container">
        <Tabs restaurants={restaurants} />
      </div>
    </Layout>
  );
};
