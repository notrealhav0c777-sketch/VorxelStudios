import type { Project } from "@/lib/projects";

export default function ProjectMock({ p }: { p: Project }) {
  const style = { background: p.bg, color: p.fg, fontFamily: p.font, "--a": p.accent } as React.CSSProperties;
  return (
    <div className="mock" style={style} aria-hidden="true">
      <div className="mock-nav"><b>{p.name}</b><span /><span /><span /></div>
      <div className="mock-hero"><h4>{p.headline}</h4><em /></div>
      <div className="mock-blocks"><u /><u /><u /></div>
    </div>
  );
}
