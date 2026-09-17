import { Sidebar } from "@/components/layout/Sidebar";
import { TopNav } from "@/components/layout/TopNav";

export default function GuidelinesLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen flex flex-col bg-transparent">
      <TopNav />
      <div className="mx-auto flex w-full max-w-[980px] flex-1">
        <aside className="hidden lg:block w-[240px] shrink-0 bg-transparent sticky top-[44px] h-[calc(100vh-44px)] overflow-y-auto">
          <Sidebar />
        </aside>
        <div className="flex-1 min-w-0 flex flex-col bg-transparent">
          <div className="flex-1">{children}</div>
        </div>
      </div>
    </div>
  );
}
