import Item from "../components/Item";
import Header from "../components/Header";
import AddItem from "../components/AddItem";
import ItemContainer from "../components/ItemContainer";

export default function Home() {
  return (
    <main className="bg-main-bg">
      <Header content="To Do List" />
      <ItemContainer
        itemLists={[
          {
            content: "Mollit commodo excepteur eiusmod deserunt ea ipsum Lorem in consequat aliquip officia.",
            id: "5",
            cleared: true,
            editMode: false,
          },
          { content: "Duis nisi sunt nulla aliquip.", id: "6", cleared: false, editMode: false },
          { content: "Amet ad Lorem aute ut.", id: "7", cleared: true, editMode: true },
          {
            content: "Esse esse cupidatat aliquip qui sunt consequat sit est ut.",
            id: "8",
            cleared: false,
            editMode: true,
          },
          {
            content: "Pariatur aliqua cillum in sit enim fugiat laboris incididunt sit commodo sit et.",
            id: "9",
            cleared: false,
            editMode: true,
          },
          { content: "Commodo cillum velit duis do in in ad ut id.", id: "10", cleared: true, editMode: true },
        ]}
      />
      <AddItem content="" />
    </main>
  );
}
