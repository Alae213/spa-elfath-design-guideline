import type { PageData, Section } from "@/lib/pages/types";

// ─────────────────────────────────────────────────────────────────────────────
// Feedback — production truth: QuoteForm.tsx is the ONLY feedback surface.
// No toasts, no aria-live, no spinners anywhere in the site. Verbatim:
// error banner (red-200/50), success replacement panel (brand-300 ✓),
// pending label swap (opacity-60), mount skeletons (system-100 pulse),
// WhatsApp fallback channel. INVENTED and tagged: warning banner,
// error icon, aria-live role pairings.
// ─────────────────────────────────────────────────────────────────────────────

const enA: Section[] = [
  { kind: "heading", id: "banners", number: "01", title: "Banners" },
  {
    kind: "paragraph",
    text: "The banner is the production error voice, verbatim from QuoteForm.tsx: red-200 #FECACA border on red-50 #FEF2F2 ground, a bold red-700 #B91C1C title, a red-600 #DC2626 description — and no icon. It sits at the top of the form; the form stays put. The WhatsApp CTA inside it is green-600 #16A34A, h-9, text-xs — the fallback channel, not a style experiment:",
  },
  {
    kind: "feedbackDemo",
    variant: "banner",
    label: "Error verbatim, warning proposed",
    tErrTitle: "Failed to send",
    tErrDesc: "Something went wrong while sending your request. Please try again.",
    tWa: "Continue on WhatsApp",
    tWarnTitle: "Connection is slow",
    tWarnDesc: "Your request has not been sent yet. You can keep waiting or continue on WhatsApp.",
    tags: ["error · VERBATIM · red-200/50 · no icon", "warning · INVENTED · amber pairing"],
    note: "Error banner: QuoteForm.tsx verbatim — red-200 border, red-50 ground, bold red-700 title, red-600 description, green-600 WhatsApp CTA. No icon ships in production. Warning: INVENTED — the same anatomy in the amber pairing from Colors (#B45309 on amber-50/amber-200), for slow-network and partial-failure moments.",
  },
  {
    kind: "callout",
    paragraphs: [
      {
        strong: "One banner per moment.",
        text: "Production never stacks feedback. An error banner appears only after a failed submit and stays until the next attempt — the submit handler resets the status before sending, so the banner clears when the user tries again, not when they edit. The invented warning follows the same discipline: one message, one moment, one channel — never a feed.",
      },
      {
        strong: "The fallback is always WhatsApp.",
        text: "When the site cannot keep its promise, it hands the user to the school's real channel — wa.me/213560065422 with a prefilled greeting. Green marks that escape hatch in both the error banner and the success panel. It is a deliberate second voice: brand blue speaks the system, green speaks the human.",
      },
    ],
  },
  {
    kind: "dodont",
    doItems: [
      "Banner at the top of the form; the form stays.",
      "Bold title + description, tinted ground, thin border.",
      "WhatsApp CTA in green as the escape hatch.",
    ],
    dontItems: [
      "Toast stacks or auto-dismissing messages.",
      "Error banners without an actionable next step.",
      "Red text on white — the tinted ground is part of the voice.",
    ],
  },
  { kind: "heading", id: "success", number: "02", title: "Success" },
  {
    kind: "paragraph",
    text: "Success is not a message on the form — it replaces the form. QuoteForm.tsx swaps the whole panel for a centered confirmation: a brand-300 #1D65AF tile with a white check, a bold title reading the dictionary string «Request sent successfully», a muted description, and the WhatsApp CTA in brand-400 #193B62 (hover brand-300) so the conversation can continue immediately:",
  },
  {
    kind: "feedbackDemo",
    variant: "success",
    label: "The form becomes the receipt",
    tTitle: "Request sent successfully",
    tDesc: "We will get back to you within 48 hours.",
    tWa: "Continue on WhatsApp",
    tags: ["VERBATIM · replacement panel · brand-300 ✓"],
    note: "QuoteForm.tsx verbatim: the form unmounts and this panel mounts in its place — 56px brand-300 tile, white 24px check, text-lg bold title, system-400 description, brand-400 CTA hovering to brand-300. No banner, no toast: the receipt IS the screen.",
  },
  {
    kind: "callout",
    paragraphs: [
      {
        strong: "Success clears the stage.",
        text: "A submitted form has one job left: prove the promise landed. The replacement panel removes every field, every label, every hint — what remains is the check, the confirmation, and the next step. Nothing invites a second submit by accident.",
      },
      {
        strong: "Confirmation is copy, not color.",
        text: "The dictionary carries the words in all three languages — «Demande envoyée avec succès», «تم إرسال طلبك بنجاح». The tile and the check carry the feeling. Neither works alone: a green check with no words is a mood, words with no mark are an email.",
      },
    ],
  },
  {
    kind: "dodont",
    doItems: [
      "Replace the form with the confirmation panel.",
      "Brand-300 tile with a white check as the mark.",
      "Offer the WhatsApp continuation right there.",
    ],
    dontItems: [
      "Success banners floating over a live form.",
      "Timed auto-dismiss of the confirmation.",
      "Leaving the submit button enabled after success.",
    ],
  },
];

const enB: Section[] = [
  { kind: "heading", id: "pending", number: "03", title: "Pending" },
  {
    kind: "paragraph",
    text: "Pending has no spinner in this system. Production dims the button to opacity-60, disables it, and swaps the label to the dictionary string «Sending…» — the words and the dimming ARE the progress. Also verbatim: the mount skeleton — system-100 #F5F4F3 pulse bars shown while pages assemble:",
  },
  {
    kind: "feedbackDemo",
    variant: "pending",
    label: "Words and dimming are the spinner",
    tSubmit: "Send request",
    tSubmitting: "Sending…",
    tNote: "The button keeps its size and color; only the label and the opacity change.",
    tags: [
      "pending · VERBATIM · label swap · opacity-60",
      "rest · brand-300 · h-11",
      "skeleton · VERBATIM · system-100 pulse",
    ],
    note: "QuoteForm.tsx verbatim: disabled button at opacity-60 reading «Sending…» / «Envoi en cours…» / «جاري الإرسال…». No spinner glyph exists anywhere in the site. Skeleton bars: bg-system-100 #F5F4F3 with animate-pulse — the only loading animation in production.",
  },
  {
    kind: "callout",
    paragraphs: [
      {
        strong: "A label swap beats a spinner.",
        text: "«Sending…» tells the user what is happening in their own language; a spinner tells them only that something is. The button never changes size — the layout holds while the state changes, and the dimming makes a second click pointless.",
      },
      {
        strong: "Skeletons for mounts, labels for actions.",
        text: "Two loading moments, two voices. A page assembling shows structure first — the pulse bars. An action running speaks — the label swap. Never a spinner standing in for either.",
      },
    ],
  },
  {
    kind: "dodont",
    doItems: [
      "Swap the label and dim to opacity-60.",
      "Keep the button's exact size while pending.",
      "Skeletons with system-100 pulse for page mounts.",
    ],
    dontItems: [
      "Spinner glyphs — none exist in this system.",
      "Blocking the page behind a full-screen overlay.",
      "Pending states that let a second submit through.",
    ],
  },
  { kind: "heading", id: "a11y", number: "04", title: "Announcing to everyone" },
  {
    kind: "paragraph",
    text: "This is the part production has not written yet. There is no aria-live, no role, no aria-busy anywhere in the site — sighted users get the banner and the panel, screen-reader users get silence. The standard closes that gap by pairing every status with a role and an icon:",
  },
  {
    kind: "feedbackDemo",
    variant: "a11y",
    label: "Every status gets a role and an icon",
    tErr: "Error",
    tOk: "Success",
    tLoading: "Pending",
    tags: ["INVENTED pairing · role + icon + live"],
    note: "INVENTED — production sets neither roles nor icons today; this is the standard the next implementation should ship. Error: role=alert with an X-circle icon, assertive. Success: role=status with the check tile, polite. Pending: aria-busy on the form, announced by the label swap, polite. The specimens stay silent on this page on purpose — a static role=alert would announce on page load.",
  },
  {
    kind: "callout",
    paragraphs: [
      {
        strong: "If it flashes, it must be announced.",
        text: "Visual feedback that appears and disappears is invisible to assistive tech unless it lives in the accessibility tree. role=alert for errors, role=status for success, aria-busy for pending — the same three moments the sighted voice already covers.",
      },
      {
        strong: "Icons repeat the meaning in shape.",
        text: "The production error banner carries no icon; the standard adds an X-circle beside the title, and the check tile already carries one. Shape + color + words = a message that survives color blindness, greyscale, and a noisy room.",
      },
    ],
  },
  {
    kind: "dodont",
    doItems: [
      "role=alert on errors, role=status on success.",
      "aria-busy on the form while pending.",
      "An icon beside every status title.",
    ],
    dontItems: [
      "Color-only errors, or words-only toasts.",
      "role=alert on a static element (announces on load).",
      "Timed dismissals before the user can read the message.",
    ],
  },
];

const en: PageData = {
  slug: "components/core-ui/feedback",
  accent: "#ff3b30",
  hero: {
    title: "Feedback",
    intro:
      "Feedback is the site keeping its promises. Production speaks it in exactly three moments — the error banner after a failed submit, the success panel that replaces the form, the pending label swap while the request flies — plus the mount skeleton. All four are documented verbatim here, with the WhatsApp fallback in green as the standing escape hatch. What production has not written — warnings, icons, live-region announcements — is invented here, tagged as such, and written as the standard for the next implementation.",
  },
  sections: [...enA, ...enB],
};

const arA: Section[] = [
  { kind: "heading", id: "banners", number: "01", title: "اللافتات" },
  {
    kind: "paragraph",
    text: "اللافتة هي صوت الخطأ في الإنتاج، منسوخة من QuoteForm.tsx: حدّ red-200 ‏#FECACA على أرض red-50 ‏#FEF2F2، وعنوان bold بلون red-700 ‏#B91C1C، ووصف بلون red-600 ‏#DC2626 — وبلا أيقونة. تجلس أعلى النموذج والنموذج يبقى مكانه. وزر واتساب داخلها بلون green-600 ‏#16A34A بارتفاع h-9 ونص text-xs — القناة البديلة لا تجربة تنسيق:",
  },
  {
    kind: "feedbackDemo",
    variant: "banner",
    label: "خطأ منسوخ، وتحذير مقترح",
    tErrTitle: "فشل الإرسال",
    tErrDesc: "حدث خطأ أثناء إرسال طلبك. حاول مرة أخرى.",
    tWa: "المتابعة عبر واتساب",
    tWarnTitle: "الاتصال بطيء",
    tWarnDesc: "لم يُرسل طلبك بعد. يمكنك الانتظار أو المتابعة عبر واتساب.",
    tags: ["error · VERBATIM · red-200/50 · no icon", "warning · INVENTED · amber pairing"],
    note: "لافتة الخطأ: QuoteForm.tsx منسوخة — حدّ red-200 وأرض red-50 وعنوان bold بلون red-700 ووصف بلون red-600 وزر واتساب بلون green-600. لا أيقونة في الإنتاج. التحذير: مبتكر — نفس التشريح بزوج العنبر من الألوان (#B45309 على amber-50/amber-200) للشبكة البطيئة والفشل الجزئي.",
  },
  {
    kind: "callout",
    paragraphs: [
      {
        strong: "لافتة واحدة لكل لحظة.",
        text: "الإنتاج لا يكدّس التنبيهات أبدًا. تظهر لافتة الخطأ بعد فشل الإرسال فقط وتبقى حتى المحاولة التالية — يعيد معالج الإرسال الحالة إلى «عادي» قبل الإرسال، فتختفي اللافتة حين يحاول المستخدم مجددًا لا حين يعدّل. والتحذير المبتكر يتبع الانضباط نفسه: رسالة واحدة، لحظة واحدة، قناة واحدة — لا تدفق أبدًا.",
      },
      {
        strong: "البديل دائمًا واتساب.",
        text: "حين لا يستطيع الموقع الوفاء بوعدِه، يسلّم المستخدم لقناة المدرسة الحقيقية — wa.me/213560065422 بتحية جاهزة. الأخضر يعلّم هذا المخرج في اللافتة ولوحة النجاح معًا. إنه صوت ثانٍ مقصود: الأزرق يتكلم باسم النظام، والأخضر باسم الإنسان.",
      },
    ],
  },
  {
    kind: "dodont",
    doItems: [
      "لافتة أعلى النموذج؛ والنموذج يبقى.",
      "عنوان bold + وصف، أرض ملوّنة، حدّ رفيع.",
      "زر واتساب بالأخضر كمخرج بديل.",
    ],
    dontItems: [
      "أكوام toast أو رسائل تختفي ذاتيًا.",
      "لافتات خطأ بلا خطوة تالية قابلة للفعل.",
      "نص أحمر على أبيض — الأرض الملوّنة جزء من الصوت.",
    ],
  },
  { kind: "heading", id: "success", number: "02", title: "النجاح" },
  {
    kind: "paragraph",
    text: "النجاح ليس رسالة فوق النموذج — بل يحل محلّه. يستبدل QuoteForm.tsx اللوحة كلها بتأكيد متمركز: مربّع brand-300 ‏#1D65AF بعلامة صح بيضاء، وعنوان bold يقرأ سلسلة القاموس «تم إرسال طلبك بنجاح»، ووصف هادئ، وزر واتساب بلون brand-400 ‏#193B62 (يومض brand-300) ليكمل الحوار فورًا:",
  },
  {
    kind: "feedbackDemo",
    variant: "success",
    label: "النموذج يصير الإيصال",
    tTitle: "تم إرسال طلبك بنجاح",
    tDesc: "سنعود إليك خلال 48 ساعة.",
    tWa: "المتابعة عبر واتساب",
    tags: ["VERBATIM · replacement panel · brand-300 ✓"],
    note: "QuoteForm.tsx منسوخة: النموذج يُزال وتُركّب هذه اللوحة محله — مربّع brand-300 بحجم 56px وعلامة صح بيضاء 24px وعنوان bold بحجم text-lg ووصف system-400 وزر brand-400 يومض إلى brand-300. لا لافتة ولا toast: الإيصال هو الشاشة.",
  },
  {
    kind: "callout",
    paragraphs: [
      {
        strong: "النجاح يصفّي المسرح.",
        text: "النموذج المُرسَل لا يبقى له عمل سوى إثبات أن الوعد وصل. لوحة الاستبدال تزيل كل حقل وكل ملصق وكل تلميح — يبقى الصح والتأكيد والخطوة التالية. لا شيء يدعو إلى إرسال ثانٍ بالخطأ.",
      },
      {
        strong: "التأكيد كلمات لا لون.",
        text: "القاموس يحمل الكلمات بثلاث لغات — «Demande envoyée avec succès» و«تم إرسال طلبك بنجاح». والمربّع والعلامة يحملان الإحساس. لا يكفي أحدهما: صح أخضر بلا كلمات مزاج، وكلمات بلا علامة بريد إلكتروني.",
      },
    ],
  },
  {
    kind: "dodont",
    doItems: [
      "استبدل النموذج بلوحة التأكيد.",
      "مربّع brand-300 بصح أبيض كعلامة.",
      "اعرض المتابعة عبر واتساب هناك.",
    ],
    dontItems: [
      "لافتات نجاح تطفو فوق نموذج حي.",
      "إخفاء مؤقت للتأكيد بعد مهلة.",
      "ترك زر الإرسال فعّالًا بعد النجاح.",
    ],
  },
];

const arB: Section[] = [
  { kind: "heading", id: "pending", number: "03", title: "الانتظار" },
  {
    kind: "paragraph",
    text: "لا دوّار انتظار في هذا النظام. يخفت الإنتاج الزر إلى opacity-60 ويعطّله ويبدّل الملصق بسلسلة القاموس «جاري الإرسال…» — الكلمات والتعتيم هما التقدم. وأيضًا منسوخة: هياكل التحميل — أعمدة system-100 ‏#F5F4F3 نابضة تُعرض أثناء تجمّع الصفحات:",
  },
  {
    kind: "feedbackDemo",
    variant: "pending",
    label: "الكلمات والتعتيم هما الدوّار",
    tSubmit: "أرسل الطلب",
    tSubmitting: "جاري الإرسال…",
    tNote: "الزر يحفظ حجمه ولونه؛ يتغير الملصق والعتامة فقط.",
    tags: [
      "pending · VERBATIM · label swap · opacity-60",
      "rest · brand-300 · h-11",
      "skeleton · VERBATIM · system-100 pulse",
    ],
    note: "QuoteForm.tsx منسوخة: زر معطّل بعتامة opacity-60 يقرأ «جاري الإرسال…» / «Envoi en cours…» / «Sending…». لا يوجد دوّار في أي مكان بالموقع. أعمدة الهيكل: bg-system-100 ‏#F5F4F3 مع animate-pulse — حركة التحميل الوحيدة في الإنتاج.",
  },
  {
    kind: "callout",
    paragraphs: [
      {
        strong: "تبديل الملصق يتفوق على الدوّار.",
        text: "«جاري الإرسال…» تخبر المستخدم بما يحدث بلغته؛ والدوّار يخبره فقط أن شيئًا ما يحدث. الزر لا يغيّر حجمه — يبقى التخطيط ثابتًا والتعتيـم يجعل النقرة الثانية بلا معنى.",
      },
      {
        strong: "هياكل للتحميل، ملصقات للأفعال.",
        text: "لحظتا تحميل بصوتين. صفحة تتجمع تعرض البنية أولًا — الأعمدة النابضة. وفعل يجري يتكلم — تبديل الملصق. لا دوّار ينوب عن أيٍّ منهما.",
      },
    ],
  },
  {
    kind: "dodont",
    doItems: [
      "بدّل الملصق واخفت إلى opacity-60.",
      "احفظ حجم الزر تمامًا أثناء الانتظار.",
      "هياكل بنبضة system-100 لتحميل الصفحات.",
    ],
    dontItems: [
      "أيقونات دوّارة — لا وجود لها في هذا النظام.",
      "حجب الصفحة خلف طبقة كاملة الشاشة.",
      "حالات انتظار تسمح بإرسال ثانٍ.",
    ],
  },
  { kind: "heading", id: "a11y", number: "04", title: "الإعلان للجميع" },
  {
    kind: "paragraph",
    text: "هذا الجزء لم يكتبه الإنتاج بعد. لا aria-live ولا role ولا aria-busy في أي مكان بالموقع — المبصرون يحصلون على اللافتة واللوحة، ومستخدمو قارئات الشاشة يحصلون على الصمت. يغلق المعيار هذه الفجوة بإقران كل حالة بدور وأيقونة:",
  },
  {
    kind: "feedbackDemo",
    variant: "a11y",
    label: "كل حالة تأخذ دورًا وأيقونة",
    tErr: "خطأ",
    tOk: "نجاح",
    tLoading: "انتظار",
    tags: ["INVENTED pairing · role + icon + live"],
    note: "مبتكر — الإنتاج لا يضبط أدوارًا ولا أيقونات اليوم؛ هذا هو المعيار الذي ينبغي أن تشحنه التنفيذية القادمة. الخطأ: role=alert بأيقونة دائرة X وassertive. النجاح: role=status بمربّع الصح وpolite. الانتظار: aria-busy على النموذج ويعلنه تبديل الملصق وpolite. العينات تبقى صامتة في هذه الصفحة عمدًا — role=alert ثابتة ستُعلن عند تحميل الصفحة.",
  },
  {
    kind: "callout",
    paragraphs: [
      {
        strong: "ما يومض يجب أن يُعلن.",
        text: "التنبيه البصري الذي يظهر ويختفي غير مرئي للتقنيات المساعدة إن لم يسكن شجرة الوصولية. role=alert للأخطاء، وrole=status للنجاح، وaria-busy للانتظار — اللحظات الثلاث التي يغطيها الصوت المبصر أصلًا.",
      },
      {
        strong: "الأيقونات تكرر المعنى بالشكل.",
        text: "لافتة الخطأ في الإنتاج بلا أيقونة؛ والمعيار يضيف دائرة X بجانب العنوان، ومربّع الصح يحمل علامته أصلًا. شكل + لون + كلمات = رسالة تنجو من عمى الألوان والتدرج الرمادي والغرفة الصاخبة.",
      },
    ],
  },
  {
    kind: "dodont",
    doItems: [
      "role=alert للأخطاء وrole=status للنجاح.",
      "aria-busy على النموذج أثناء الانتظار.",
      "أيقونة بجانب كل عنوان حالة.",
    ],
    dontItems: [
      "أخطاء باللون فقط أو toast بالكلمات فقط.",
      "role=alert على عنصر ثابت (تُعلن عند التحميل).",
      "إخفاء مؤقت قبل أن يتمكن المستخدم من القراءة.",
    ],
  },
];

const ar: PageData = {
  slug: "components/core-ui/feedback",
  accent: "#ff3b30",
  hero: {
    title: "التغذية الراجعة",
    intro:
      "التغذية الراجعة هي الموقع يفي بوعوده. يتكلمها الإنتاج في ثلاث لحظات بالضبط — لافتة الخطأ بعد فشل الإرسال، ولوحة النجاح التي تحل محل النموذج، وتبديل ملصق الانتظار بينما يطير الطلب — إضافة إلى هيكل التحميل. الأربعة كلها موثّقة هنا منسوخة، مع قناة واتساب البديلة بالأخضر كمخرج دائم. وما لم يكتبه الإنتاج — التحذيرات والأيقونات وإعلانات المناطق الحية — مبتكر هنا ومعلَّم كذلك ومكتوب بوصفه معيار التنفيذ القادم.",
  },
  sections: [...arA, ...arB],
};

const frA: Section[] = [
  { kind: "heading", id: "banners", number: "01", title: "Bannières" },
  {
    kind: "paragraph",
    text: "La bannière est la voix d'erreur de la production, verbatim de QuoteForm.tsx : bordure red-200 #FECACA sur fond red-50 #FEF2F2, titre gras red-700 #B91C1C, description red-600 #DC2626 — et aucune icône. Elle se place en haut du formulaire ; le formulaire reste en place. Le CTA WhatsApp à l'intérieur est green-600 #16A34A, h-9, text-xs — le canal de repli, pas une expérimentation de style :",
  },
  {
    kind: "feedbackDemo",
    variant: "banner",
    label: "Erreur verbatim, avertissement proposé",
    tErrTitle: "Échec de l'envoi",
    tErrDesc: "Une erreur est survenue lors de l'envoi de votre demande. Veuillez réessayer.",
    tWa: "Continuer sur WhatsApp",
    tWarnTitle: "Connexion lente",
    tWarnDesc: "Votre demande n'a pas encore été envoyée. Vous pouvez attendre ou continuer sur WhatsApp.",
    tags: ["error · VERBATIM · red-200/50 · no icon", "warning · INVENTED · amber pairing"],
    note: "Bannière d'erreur : QuoteForm.tsx verbatim — bordure red-200, fond red-50, titre gras red-700, description red-600, CTA WhatsApp green-600. Aucune icône en production. Avertissement : INVENTÉ — la même anatomie dans le pair ambre des Couleurs (#B45309 sur amber-50/amber-200), pour les réseaux lents et les échecs partiels.",
  },
  {
    kind: "callout",
    paragraphs: [
      {
        strong: "Une bannière par moment.",
        text: "La production n'empile jamais les retours. Une bannière d'erreur n'apparaît qu'après un envoi raté et reste jusqu'à la tentative suivante — le gestionnaire d'envoi remet le statut à l'état neutre avant d'expédier, si bien que la bannière s'efface quand l'utilisateur réessaie, pas quand il modifie. L'avertissement inventé suit la même discipline : un message, un moment, un canal — jamais un flux.",
      },
      {
        strong: "Le repli est toujours WhatsApp.",
        text: "Quand le site ne peut pas tenir sa promesse, il confie l'utilisateur au vrai canal de l'école — wa.me/213560065422 avec une salutation préremplie. Le vert marque cette porte de sortie dans la bannière et le panneau de succès. C'est une seconde voix voulue : le bleu parle pour le système, le vert pour l'humain.",
      },
    ],
  },
  {
    kind: "dodont",
    doItems: [
      "Bannière en haut du formulaire ; le formulaire reste.",
      "Titre gras + description, fond teinté, bordure fine.",
      "CTA WhatsApp en vert comme porte de sortie.",
    ],
    dontItems: [
      "Piles de toasts ou messages auto-dismiss.",
      "Bannières d'erreur sans étape suivante actionnable.",
      "Texte rouge sur blanc — le fond teinté fait partie de la voix.",
    ],
  },
  { kind: "heading", id: "success", number: "02", title: "Succès" },
  {
    kind: "paragraph",
    text: "Le succès n'est pas un message sur le formulaire — il le remplace. QuoteForm.tsx échange tout le panneau contre une confirmation centrée : une tuile brand-300 #1D65AF avec une coche blanche, un titre gras reprenant la chaîne du dictionnaire « Demande envoyée avec succès », une description atténuée, et le CTA WhatsApp en brand-400 #193B62 (survol brand-300) pour que la conversation continue immédiatement :",
  },
  {
    kind: "feedbackDemo",
    variant: "success",
    label: "Le formulaire devient le reçu",
    tTitle: "Demande envoyée avec succès",
    tDesc: "Nous vous répondrons sous 48 heures.",
    tWa: "Continuer sur WhatsApp",
    tags: ["VERBATIM · replacement panel · brand-300 ✓"],
    note: "QuoteForm.tsx verbatim : le formulaire se démonte et ce panneau se monte à sa place — tuile brand-300 de 56px, coche blanche de 24px, titre text-lg gras, description system-400, CTA brand-400 survolant en brand-300. Pas de bannière, pas de toast : le reçu EST l'écran.",
  },
  {
    kind: "callout",
    paragraphs: [
      {
        strong: "Le succès vide la scène.",
        text: "Un formulaire envoyé n'a plus qu'un travail : prouver que la promesse est arrivée. Le panneau de remplacement ôte chaque champ, chaque étiquette, chaque indice — restent la coche, la confirmation et l'étape suivante. Rien n'invite à un second envoi par accident.",
      },
      {
        strong: "La confirmation, c'est du texte, pas de la couleur.",
        text: "Le dictionnaire porte les mots dans les trois langues — « Demande envoyée avec succès », «تم إرسال طلبك بنجاح». La tuile et la coche portent le sentiment. Ni l'un sans l'autre : une coche verte sans mots est une humeur, des mots sans marque sont un e-mail.",
      },
    ],
  },
  {
    kind: "dodont",
    doItems: [
      "Remplacer le formulaire par le panneau de confirmation.",
      "Tuile brand-300 avec coche blanche comme marque.",
      "Proposer la continuation WhatsApp sur place.",
    ],
    dontItems: [
      "Bannières de succès flottant sur un formulaire vivant.",
      "Dismissal temporisé de la confirmation.",
      "Laisser le bouton d'envoi actif après le succès.",
    ],
  },
];

const frB: Section[] = [
  { kind: "heading", id: "pending", number: "03", title: "En attente" },
  {
    kind: "paragraph",
    text: "Pas de spinner dans ce système. La production atténue le bouton à opacity-60, le désactive et échange l'étiquette contre la chaîne du dictionnaire « Envoi en cours… » — les mots et l'atténuation SONT la progression. Verbatim également : le squelette de montage — barres system-100 #F5F4F3 en pulse affichées pendant l'assemblage des pages :",
  },
  {
    kind: "feedbackDemo",
    variant: "pending",
    label: "Les mots et l'atténuation font le spinner",
    tSubmit: "Envoyer la demande",
    tSubmitting: "Envoi en cours…",
    tNote: "Le bouton garde sa taille et sa couleur ; seule l'étiquette et l'opacité changent.",
    tags: [
      "pending · VERBATIM · label swap · opacity-60",
      "rest · brand-300 · h-11",
      "skeleton · VERBATIM · system-100 pulse",
    ],
    note: "QuoteForm.tsx verbatim : bouton désactivé à opacity-60 lisant « Envoi en cours… » / « جاري الإرسال… » / « Sending… ». Aucun glyph spinner n'existe dans le site. Barres de squelette : bg-system-100 #F5F4F3 avec animate-pulse — la seule animation de chargement en production.",
  },
  {
    kind: "callout",
    paragraphs: [
      {
        strong: "Un échange d'étiquette bat un spinner.",
        text: "« Envoi en cours… » dit à l'utilisateur ce qui se passe dans sa langue ; un spinner dit seulement que quelque chose se passe. Le bouton ne change jamais de taille — la mise en page tient pendant que l'état change, et l'atténuation rend un second clic inutile.",
      },
      {
        strong: "Squelettes pour les montages, étiquettes pour les actions.",
        text: "Deux moments de chargement, deux voix. Une page qui s'assemble montre la structure d'abord — les barres en pulse. Une action en cours parle — l'échange d'étiquette. Jamais un spinner à la place de l'un ou de l'autre.",
      },
    ],
  },
  {
    kind: "dodont",
    doItems: [
      "Échanger l'étiquette et atténuer à opacity-60.",
      "Garder la taille exacte du bouton pendant l'attente.",
      "Squelettes au pulse system-100 pour les montages de pages.",
    ],
    dontItems: [
      "Glyphs spinner — aucun n'existe dans ce système.",
      "Bloquer la page derrière un overlay plein écran.",
      "États d'attente laissant passer un second envoi.",
    ],
  },
  { kind: "heading", id: "a11y", number: "04", title: "Annoncer à tous" },
  {
    kind: "paragraph",
    text: "C'est la partie que la production n'a pas encore écrite. Aucun aria-live, aucun role, aucun aria-busy nulle part dans le site — les utilisateurs voyants reçoivent la bannière et le panneau, les utilisateurs de lecteurs d'écran reçoivent le silence. La norme comble ce fossé en appariant chaque statut à un rôle et une icône :",
  },
  {
    kind: "feedbackDemo",
    variant: "a11y",
    label: "Chaque statut reçoit un rôle et une icône",
    tErr: "Erreur",
    tOk: "Succès",
    tLoading: "En attente",
    tags: ["INVENTED pairing · role + icon + live"],
    note: "INVENTÉ — la production ne pose ni rôles ni icônes aujourd'hui ; c'est la norme que la prochaine implémentation doit livrer. Erreur : role=alert avec une icône X-circle, assertive. Succès : role=status avec la tuile à coche, polite. En attente : aria-busy sur le formulaire, annoncé par l'échange d'étiquette, polite. Les spécimens restent muets sur cette page exprès — un role=alert statique s'annoncerait au chargement.",
  },
  {
    kind: "callout",
    paragraphs: [
      {
        strong: "Ce qui clignote doit être annoncé.",
        text: "Un retour visuel qui apparaît et disparaît est invisible pour les technologies d'assistance tant qu'il ne vit pas dans l'arbre d'accessibilité. role=alert pour les erreurs, role=status pour le succès, aria-busy pour l'attente — les trois moments que la voix voyante couvre déjà.",
      },
      {
        strong: "Les icônes répètent le sens en forme.",
        text: "La bannière d'erreur de la production ne porte pas d'icône ; la norme ajoute un X-circle à côté du titre, et la tuile à coche porte déjà la sienne. Forme + couleur + mots = un message qui survit au daltonisme, aux niveaux de gris et à une pièce bruyante.",
      },
    ],
  },
  {
    kind: "dodont",
    doItems: [
      "role=alert sur les erreurs, role=status sur le succès.",
      "aria-busy sur le formulaire pendant l'attente.",
      "Une icône à côté de chaque titre de statut.",
    ],
    dontItems: [
      "Erreurs en couleur seule, ou toasts en mots seuls.",
      "role=alert sur un élément statique (s'annonce au chargement).",
      "Dismissals temporisés avant que l'utilisateur puisse lire.",
    ],
  },
];

const fr: PageData = {
  slug: "components/core-ui/feedback",
  accent: "#ff3b30",
  hero: {
    title: "Retours d'information",
    intro:
      "Le feedback, c'est le site qui tient ses promesses. La production le parle en exactement trois moments — la bannière d'erreur après un envoi raté, le panneau de succès qui remplace le formulaire, l'échange d'étiquette pendant l'envoi — plus le squelette de montage. Les quatre sont documentés verbatim ici, avec le repli WhatsApp en vert comme porte de sortie permanente. Ce que la production n'a pas écrit — avertissements, icônes, annonces en régions vivantes — est inventé ici, étiqueté comme tel, et écrit comme la norme de la prochaine implémentation.",
  },
  sections: [...frA, ...frB],
};

export const feedback: Record<"ar" | "en" | "fr", PageData> = { ar, en, fr };





