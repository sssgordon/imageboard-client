import request from "superagent";

//display images
export const ALL_IMAGES = "ALL_IMAGES";

const baseUrl = "http://localhost:4000";

function allImages(payload) {
  return {
    type: ALL_IMAGES,
    payload
  };
}

export const getImages = () => (dispatch, getState) => {
  const state = getState();
  const { images } = state;

  if (!images.length) {
    request(`${baseUrl}/image`)
      .then(response => {
        const action = allImages(response.body);

        dispatch(action);
      })
      .catch(console.error);
  }
};

//create images
export const NEW_IMAGE = "NEW_IMAGE";

function newImage(payload) {
  return {
    type: NEW_IMAGE,
    payload
  };
}

export const createImage = data => dispatch => {
  request
    .post(`${baseUrl}/image`)
    .send(data)
    .then(response => {
      const action = newImage(response.body);

      dispatch(action);
    })
    .catch(console.error);
};

//login
export const LOGIN = "LOGIN";

function loginAction(payload) {
  return {
    type: LOGIN,
    payload
  };
}

export const login = (email, password) => dispatch => {
  request
    .post(`${baseUrl}/login`)
    .send({ email, password })
    .then(response => {
      console.log(response);
      const action = loginAction(response.jwt);

      dispatch(action);
    })
    .catch(console.error);
};
