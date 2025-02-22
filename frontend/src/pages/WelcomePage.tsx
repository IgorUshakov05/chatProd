import React from "react";
import Header from "../components/Header";
import CTAction from "../components/CTA";
import { observer } from "mobx-react";
import { useAuthorization } from "../hook/Auth";
import { authStore } from "../store/index";
// import FAQBlock from "../components/FAQ.tsx";
const HomePage = observer(() => {
  let { data } = useAuthorization();
  authStore.setAuth(data?.success);
  return (
    <div className="bg-gray-50 text-gray-800">
      <Header />
      <CTAction />
    </div>
  );
});

export default HomePage;
