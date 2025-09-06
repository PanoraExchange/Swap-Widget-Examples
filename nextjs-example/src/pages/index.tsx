import dynamic from "next/dynamic";
const Widget = dynamic(() => import("../components/Widget"), {
  ssr: false,
});

export default function Home() {
  return <Widget />;
}

