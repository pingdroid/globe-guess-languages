import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Lingua — Guess the Language" },
      {
        name: "description",
        content:
          "A fast, beautiful language-guessing game. Read a snippet, identify the language, build streaks across 40+ tongues.",
      },
      { property: "og:title", content: "Lingua — Guess the Language" },
      {
        property: "og:description",
        content:
          "A fast, beautiful language-guessing game. Read a snippet, identify the language, build streaks across 40+ tongues.",
      },
      { name: "theme-color", content: "#0b1020" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <iframe
      src="/lingua.html"
      title="Lingua language game"
      style={{
        position: "fixed",
        inset: 0,
        width: "100%",
        height: "100dvh",
        border: 0,
        background: "#0b1020",
      }}
    />
  );
}
