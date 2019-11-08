import React from "react";

function CreateForm(props) {
  return (
    <form onSubmit={props.onSubmit}>
      <input
        onChange={props.onChange}
        value={props.values.title}
        name="title"
        placeholder="title"
      />
      <input
        onChange={props.onChange}
        value={props.values.url}
        name="url"
        placeholder="url"
      />
      <button type="submit">Submit</button>
    </form>
  );
}

export default CreateForm;
