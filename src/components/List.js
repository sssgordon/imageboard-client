import React from "react";

function List(props) {
  return (
    <div>
      {props.images.map(image => {
        return (
          <div>
            <h3>{image.title}</h3>
            <img src={image.url} alt="images" />
          </div>
        );
      })}
    </div>
  );
}

export default List;
