export const Label = ({ text }) => {
  return (
    <label
      value={text}
      css={{
        alignItems: "center",
        display: "flex",
        height: "-webkit-fill-available;",
      }}
    >
      {text}
    </label>
  );
};
