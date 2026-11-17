export default function ContentBlocks({ blocks }) {
  return (
    <div className="prose-e2e">
      {blocks.map((block, index) => {
        if (block.type === "heading") {
          const Tag = `h${block.level || 2}`;
          return <Tag key={`${block.type}-${index}`}>{block.text}</Tag>;
        }

        if (block.type === "paragraph") {
          return <p key={`${block.type}-${index}`}>{block.text}</p>;
        }

        if (block.type === "list") {
          return (
            <div key={`${block.type}-${index}`} className="mt-8">
              {block.intro ? (
                <p className="font-display text-h4 text-ink-950">{block.intro}</p>
              ) : null}
              <ul className={block.intro ? "mt-4" : ""}>
                {block.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          );
        }

        if (block.type === "definitionList") {
          return (
            <div key={`${block.type}-${index}`} className="mt-8">
              {block.intro ? (
                <p className="font-display text-h4 text-ink-950">{block.intro}</p>
              ) : null}
              <dl>
                {block.items.map((item) => (
                  <div key={item.term}>
                    <dt>{item.term}</dt>
                    {item.description ? <dd>{item.description}</dd> : null}
                  </div>
                ))}
              </dl>
            </div>
          );
        }

        return null;
      })}
    </div>
  );
}
