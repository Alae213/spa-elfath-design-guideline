import type { ReactNode } from "react";

// Strict Apple HIG minimal — thin hig-border, transparent/hover only, no fills, no gradients, no 2xl
// Keep typography 13-14px, muted #6e6e73, text #1d1d1f, blue #0071e3 only for links

export function SectionHeading({ id, number, title }: { id: string; number: string; title: string }) {
  return (
    <h2
      id={id}
      className="scroll-mt-24 border-t border-[var(--hig-border)] pt-8 mt-10 flex items-baseline gap-3 text-[17px] font-semibold leading-6 text-[var(--apple-text)]"
    >
      <span className="font-mono text-[12px] font-normal tabular-nums text-[var(--apple-muted)]">{number}</span>
      <span>{title}</span>
    </h2>
  );
}

export function DoList({ items = [] }: { items?: string[] }) {
  return (
    <ul className="space-y-2">
      {(items ?? []).map((t, i) => (
        <li key={i} className="flex gap-2.5 text-right text-[13.5px] leading-6 text-[var(--apple-text)]">
          <span className="mt-[9px] h-[3px] w-[3px] shrink-0 rounded-full bg-[var(--apple-text)]" />
          <span>{t}</span>
        </li>
      ))}
    </ul>
  );
}
export function DontList({ items = [] }: { items?: string[] }) {
  return (
    <ul className="space-y-2">
      {(items ?? []).map((t, i) => (
        <li key={i} className="flex gap-2.5 text-right text-[13.5px] leading-6 text-[var(--apple-muted)]">
          <span className="mt-[9px] h-[3px] w-[3px] shrink-0 rounded-full bg-[var(--apple-muted)]" />
          <span>{t}</span>
        </li>
      ))}
    </ul>
  );
}

// Minimal DoDont — two columns, thin border only, no emerald/red fills
export function DoDontGrid({ doItems = [], dontItems = [] }: { doItems?: string[]; dontItems?: string[] }) {
  return (
    <div className="mt-4 grid gap-4 md:grid-cols-2">
      <div className="border-t border-[var(--hig-border)] pt-3">
        <div className="text-[11px] font-semibold tracking-widest text-[var(--apple-text)]">افعل</div>
        <div className="mt-2">
          <DoList items={doItems ?? []} />
        </div>
      </div>
      <div className="border-t border-[var(--hig-border)] pt-3">
        <div className="text-[11px] font-semibold tracking-widest text-[var(--apple-muted)]">لا تفعل</div>
        <div className="mt-2">
          <DontList items={dontItems ?? []} />
        </div>
      </div>
    </div>
  );
}

export function ContrastTable() {
  const rows = [
    { pair: "نص أساسي #1d1d1f على #ffffff", ratio: "16.1:1", need: "4.5:1", pass: true },
    { pair: "نص ثانوي #515154 على #ffffff", ratio: "7.8:1", need: "4.5:1", pass: true },
    { pair: "نص muted #6e6e73 على #ffffff", ratio: "4.9:1", need: "4.5:1", pass: true },
    { pair: "نص muted #86868b على #ffffff", ratio: "3.4:1", need: "4.5:1", pass: false },
    { pair: "أزرق Apple #0071e3 على #ffffff", ratio: "4.5:1", need: "4.5:1", pass: true },
    { pair: "أزرق على #f5f5f7", ratio: "4.2:1", need: "4.5:1", pass: false },
  ];
  return (
    <div className="mt-4 overflow-hidden border-y border-[var(--hig-border)]">
      <div className="overflow-x-auto">
        <table className="w-full text-right text-[13px]">
          <thead className="border-b border-[var(--hig-border)] text-[11px] font-normal text-[var(--apple-muted)]">
            <tr>
              <th className="px-0 py-2.5 pr-2 font-normal">الزوج اللوني</th>
              <th className="px-3 py-2.5 font-mono font-normal whitespace-nowrap tabular-nums">النسبة</th>
              <th className="px-3 py-2.5 font-mono font-normal whitespace-nowrap tabular-nums">المطلوب AA</th>
              <th className="px-0 py-2.5 font-normal">الحالة</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-[var(--hig-border)]">
            {rows.map((r) => (
              <tr key={r.pair}>
                <td className="px-0 py-2.5 pr-2 text-[13px] leading-5 text-[var(--apple-text)]">{r.pair}</td>
                <td className="px-3 py-2.5 font-mono text-[12px] tabular-nums text-[var(--apple-text)]">{r.ratio}</td>
                <td className="px-3 py-2.5 font-mono text-[12px] tabular-nums text-[var(--apple-muted)]">{r.need}</td>
                <td className={`px-0 py-2.5 text-[12px] ${r.pass ? "text-[var(--apple-text)]" : "text-red-600 dark:text-red-400"}`}>
                  {r.pass ? "ناجح" : "راسب"}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p className="py-2.5 text-[12px] leading-5 text-[var(--apple-muted)]">
        اختبر أي لون جديد بـ WebAIM Contrast Checker. النجاح = 4.5:1 للنص العادي، 3:1 للنص الكبير والحدود.
      </p>
    </div>
  );
}

export function SemanticTokens() {
  const tokens = [
    { name: "--color-text-primary", val: "#1d1d1f", use: "عناوين ونص أساسي" },
    { name: "--color-text-secondary", val: "#515154", use: "وصف ثانوي" },
    { name: "--color-bg", val: "#ffffff", use: "خلفية" },
    { name: "--color-accent", val: "#0071e3", use: "روابط وأزرار" },
    { name: "--color-error", val: "#BE123C", use: "أخطاء" },
    { name: "--color-success", val: "#0A7A42", use: "نجاح" },
  ];
  return (
    <div className="mt-4 divide-y divide-[var(--hig-border)] border-y border-[var(--hig-border)]">
      {tokens.map((t) => (
        <div key={t.name} className="flex items-center justify-between gap-3 py-2.5">
          <span className="flex items-center gap-2.5">
            <span className="h-3 w-3 rounded-full border border-[var(--hig-border)]" style={{ background: t.val }} />
            <span className="font-mono text-[12px] text-[var(--apple-text)]">{t.name}</span>
            <span className="hidden sm:inline font-mono text-[11px] text-[var(--apple-muted)]">{t.val}</span>
          </span>
          <span className="text-[12px] text-[var(--apple-muted)]">{t.use}</span>
        </div>
      ))}
    </div>
  );
}

export function SpacingRuler() {
  const steps = [8, 16, 24, 32, 48];
  return (
    <div className="mt-4 border-y border-[var(--hig-border)] py-4">
      <div className="flex items-end gap-6">
        {steps.map((s) => (
          <div key={s} className="flex flex-col items-center gap-1.5">
            <div className="w-[1px] bg-[var(--apple-muted-2)]" style={{ height: s }} />
            <span className="font-mono text-[11px] tabular-nums text-[var(--apple-muted)]">{s}</span>
          </div>
        ))}
        <span className="mr-auto text-[12px] text-[var(--apple-muted)]">نظام 8px — مضاعفات ثابتة</span>
      </div>
      <p className="mt-3 text-[12px] leading-5 text-[var(--apple-muted)]">
        اترك تنفّسًا حول كل كتلة. التخطيط يبقى مقروءًا عند 200% تكبير، تباعد أسطر 1.4–1.6.
      </p>
    </div>
  );
}

export function TouchTargetDemo() {
  return (
    <div className="mt-4 flex items-center gap-4 border-y border-[var(--hig-border)] py-4">
      <div className="flex h-11 w-11 items-center justify-center border border-dashed border-[var(--apple-muted-2)] text-[11px] font-mono tabular-nums text-[var(--apple-muted)]">
        44
      </div>
      <div className="h-8 w-8 border border-[var(--hig-border)] bg-[var(--apple-hover)]" aria-hidden />
      <p className="text-[12px] leading-5 text-[var(--apple-muted)]">
        الحد الأدنى للمس <span className="font-mono text-[var(--apple-text)]">44×44px</span> مع فاصل 8px. الأصغر يسبب نقرًا خاطئًا.
      </p>
    </div>
  );
}

export function MotionDemo() {
  return (
    <div className="mt-4 border-y border-[var(--hig-border)] py-4">
      <p className="text-[13px] leading-6 text-[var(--apple-text)]">حركة وظيفية 200–300ms فقط. توضح علاقة، لا تزين.</p>
      <pre className="mt-3 overflow-x-auto border border-[var(--hig-border)] bg-[var(--system-100)] p-3 text-left font-mono text-[11px] leading-5 text-[var(--apple-text)]" dir="ltr">
        {`@media (prefers-reduced-motion: reduce) {
  * { animation: none !important; transition: none !important; }
}`}
      </pre>
      <p className="mt-2 text-[12px] leading-5 text-[var(--apple-muted)]">احترم “تقليل الحركة” ووفّر تلاشي بسيطًا بدل حركة كبيرة.</p>
    </div>
  );
}

export function AltChecklist() {
  return (
    <div className="mt-4 divide-y divide-[var(--hig-border)] border-y border-[var(--hig-border)]">
      <div className="flex gap-3 py-2.5">
        <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-[var(--apple-text)]" />
        <p className="text-[13px] leading-6 text-[var(--apple-text)]">
          صورة معلومة — <span className="text-[var(--apple-muted)]">alt وصفي: “واجهة مصنع الفتح للحديد — عنابة”</span>
        </p>
      </div>
      <div className="flex gap-3 py-2.5">
        <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-[var(--apple-muted)]" />
        <p className="text-[13px] leading-6 text-[var(--apple-muted)]">زخرفية فقط — alt=&quot;&quot; فارغ، لا يقرأها قارئ الشاشة</p>
      </div>
      <div className="flex gap-3 py-2.5">
        <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-[var(--apple-muted)]" />
        <p className="text-[13px] leading-6 text-[var(--apple-muted)]">لا تترك alt فارغًا لصورة معلومة، ولا تكرر “صورة1.jpg”</p>
      </div>
    </div>
  );
}

export function PageGoalDemo() {
  return (
    <div className="mt-4 border border-[var(--hig-border)] p-4">
      <div className="text-[11px] tracking-widest text-[var(--apple-muted)]">ABOVE THE FOLD — 5 ثوانٍ</div>
      <div className="mt-2 text-[14px] font-semibold text-[var(--apple-text)]">عنوان واضح + دعم رقمي + CTA واحد</div>
      <p className="mt-1 text-[13px] leading-6 text-[var(--apple-muted)]">
        تعرّف على قطاعاتنا → دعوة فعل واحدة غير متنافسة. لا تُغرق الشاشة الأولى بكل شيء.
      </p>
      <div className="mt-3 text-[13px] text-[var(--apple-blue)]">تواصل معنا →</div>
    </div>
  );
}

// Keep legacy export for MDXRemote mapping — no visual change, just re-export minimal
export function Accordion({ title, children }: { title: string; children: ReactNode }) {
  return (
    <div className="mt-6 border-t border-[var(--hig-border)] pt-4">
      <div className="text-[13px] font-semibold text-[var(--apple-text)]">{title}</div>
      <div className="mt-2">{children}</div>
    </div>
  );
}
