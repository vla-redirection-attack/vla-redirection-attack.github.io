/* tweaks-app.jsx — mounts the Tweaks panel and applies theme/accent to <html>.
   The page itself is static; this island only flips root attributes. */

const VLA_TWEAK_DEFAULTS = /*EDITMODE-BEGIN*/{
  "style": "academic",
  "accent": "purpleblue"
}/*EDITMODE-END*/;

const STYLE_OPTS = [
  { value: "academic", label: "Academic" },
  { value: "technical", label: "Technical" },
  { value: "editorial", label: "Editorial" },
];
const ACCENT_OPTS = [
  { value: "purpleblue", label: "Purple + Blue" },
  { value: "crimsonslate", label: "Crimson + Slate" },
  { value: "violetteal", label: "Violet + Teal" },
];

function VLATweaks() {
  const [t, setTweak] = useTweaks(VLA_TWEAK_DEFAULTS);

  React.useEffect(() => {
    document.documentElement.setAttribute("data-theme", t.style);
  }, [t.style]);
  React.useEffect(() => {
    document.documentElement.setAttribute("data-accent", t.accent);
  }, [t.accent]);

  return (
    <TweaksPanel>
      <TweakSection label="Style direction" />
      <TweakRadio
        label="Theme"
        value={t.style}
        options={STYLE_OPTS}
        onChange={(v) => setTweak("style", v)}
      />
      <TweakSection label="Accent" />
      <TweakSelect
        label="Palette"
        value={t.accent}
        options={ACCENT_OPTS}
        onChange={(v) => setTweak("accent", v)}
      />
    </TweaksPanel>
  );
}

ReactDOM.createRoot(document.getElementById("tweaks-root")).render(<VLATweaks />);
