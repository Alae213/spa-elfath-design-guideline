import type { MDXComponents } from "mdx/types";
import { Callout, DoDont } from "@/components/mdx/Callout";

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    Callout,
    DoDont,
    h2: (props) => <h2 className="mt-10 mb-4 text-[22px] font-semibold tracking-tight text-foreground" {...props} />,
    h3: (props) => <h3 className="mt-6 mb-3 text-[17px] font-semibold text-foreground" {...props} />,
    p: (props) => <p className="my-4 leading-7 text-[15px] text-foreground" {...props} />,
    a: (props) => <a className="text-brand-300 underline underline-offset-4 hover:text-brand-400 dark:text-brand-300 dark:hover:text-brand-400" {...props} />,
    code: (props) => <code className="rounded bg-system-100 px-1.5 py-0.5 font-mono text-[13px] border border-hig-border text-foreground" {...props} />,
    pre: (props) => <pre className="my-6 overflow-x-auto rounded-lg border border-hig-border bg-system-100 p-4 text-sm text-foreground dark:bg-system-100" {...props} />,
    ul: (props) => <ul className="my-4 list-disc pl-6 space-y-1 text-foreground marker:text-system-300" {...props} />,
    ol: (props) => <ol className="my-4 list-decimal pl-6 space-y-1 text-foreground marker:text-system-300" {...props} />,
    blockquote: (props) => <blockquote className="border-l-4 border-brand-300 pl-4 italic text-system-400 my-6 dark:text-system-400 dark:border-brand-300/60" {...props} />,
    ...components,
  };
}
