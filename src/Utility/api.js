import axios from "axios";
const localhost = "http://localhost:9090/api/";
const myApi = axios.create({
  baseURL:
    process.env.NODE_ENV === "development"
      ? localhost
      : "https://babsfindagame.herokuapp.com/api/",
});

export function getEvents() {
  return myApi.get("/events").then(({ data }) => {
    return data.events;
  });
}

export function getEventsByID(event_id) {
  return myApi.get(`events/${event_id}`).then(({ data }) => {
    return data.event;
  });
}

export function getUserByID(firebase_id) {
  return myApi.get(`users/${firebase_id}`).then(({ data }) => {
    return data.user;
  });
}

export function getComments(event_id) {
  return myApi.get(`/events/${event_id}/comments`).then(({ data }) => {
    return data.comments;
  });
}

export function postComment(event_id, comment) {
  return myApi.post(`/events/${event_id}/comments`, comment);
}

export function postEvent(eventToSend) {
  return myApi.post("/events", eventToSend);
}

export function postUser(user) {
  return myApi.post("/users", user);
}

export function patchEvent(event_id, updatedEvent) {
  return myApi.patch(`/events/${event_id}`, updatedEvent).then((data) => {
    console.log(data);
  });
}
export function bookEvent(firebase, event) {
  const bookingEvent = { firebase_id: firebase, event_id: event };
  console.log(bookingEvent);
  return myApi.post(`/user/events`, bookingEvent).then((data) => {
    return data.event;
  });
}

export function patchUser(newUser) {
  return myApi.patch(`/users`, newUser).then(({ data }) => {
    return data.user;
  });
}
export function getUserBookedEvents(firebase_id) {
  return myApi.get(`user/${firebase_id}/events`).then(({ data }) => {
    return data.userEvents;
  });
}

export function cancelEvent(event_id) {
  return myApi.delete(`/events/${event_id}`);
}
export function getUrlUploadImage() {
  return myApi.get("s3url").then(({ data }) => {
    return data.url;
  });
}
