import { useChatStore } from "../store/useChatStore";

function ActiveTabSwitch() {
  const activeTab = useChatStore((state) => state.activeTab);
  const setActiveTab = useChatStore((state) => state.setActiveTab);

  return (
    <div className="tabs tabs-box bg-transparent shadow-none p-2 m-2 flex bg-slate-900/40 p-1 rounded-xl">
      <button
        onClick={() => setActiveTab("chats")}
        className={`tab flex-1 ${
          activeTab === "chats"
            ? "bg-cyan-500/20 text-cyan-400"
            : "text-slate-400"
        }`}
      >
        Chats
      </button>

      <button
        onClick={() => setActiveTab("contacts")}
        className={`tab flex-1 ${
          activeTab === "contacts"
            ? "bg-cyan-500/20 text-cyan-400"
            : "text-slate-400"
        }`}
      >
        Contacts
      </button>
    </div>
  );
}
export default ActiveTabSwitch;
