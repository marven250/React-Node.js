import axios from "axios";
import { User } from "../Models/user";

// For project work, take note that axios interprets non-200s responses statuses as errors.
// This means you can handle auth problems using try-catch.

//We can create a client with config for convenience, then call our methods
// on that client instead of on axios directly.  This lets up set up configuration
// without repeating ourselves
const infoClient = axios.create({
  baseURL: "http://localhost:5000",
  // If you don't have the following line, your login won't work!
  withCredentials: true,
});

//Library-express is running on my EC2 with public IP 18.232.125.207
// export async function getAllBooks() {
//   const response = await libraryClient.get("/books");
//   return response.data.map((bookObj) => {
//     const { id, title, author, yearPublished, wordCount } = bookObj;
//     // return new Book(id, title, author, yearPublished, wordCount);
//   });
// }

export async function getAllUsers() {
  const response = await infoClient.get("/users");
  return response.data.map((userObj) => {
    const { id, username, password, email, role } = userObj;
    return new User(id, username, password, email, role);
  });
}

export async function getCurrentUserReimbursements() {
  const response = await infoClient.get(
    `/reimbursements/author/userId/${
      JSON.parse(sessionStorage.getItem("user")).id
    }`
  );
  return response.data.map((currentUserReimbursementObj) => {
    // const { id, username, password, email, role } = userObj;
    // return new User(id, username, password, email, role);
    console.log(
      "this is current user reimbursements: ",
      currentUserReimbursementObj
    );
  });
}

export async function getPendingReimbursements() {
  const response = await infoClient.get("/reimbursements/status/1");
  return response.data.map((pendingReimbursementObj) => {
    //const {id, author,amount, datesubmitted, dateresolved, description, resolver, status} = pendingReimbursementObj;
    console.log("these are pending requests:", pendingReimbursementObj);
  });
}

export async function getApprovedReimbursements() {
  const response = await infoClient.get("/reimbursements/status/2");
  return response.data.map((approvedReimbursementObj) => {
    //const {id, author,amount, datesubmitted, dateresolved, description, resolver, status} = pendingReimbursementObj;
    console.log("these are approved requests:", approvedReimbursementObj);
  });
}

export async function getDeclinedReimbursements() {
  const response = await infoClient.get("/reimbursements/status/3");
  return response.data.map((declinedReimbursementObj) => {
    //const {id, author,amount, datesubmitted, dateresolved, description, resolver, status} = pendingReimbursementObj;
    console.log("these are declined requests:", declinedReimbursementObj);
  });
}

export async function login(un, pw) {
  // console.log("in login function");
  try {
    const response = await infoClient.post("/login", {
      username: un,
      password: pw,
    });
    // console.log("successfully logged in!!");
    const {
      id,
      username,
      password,
      email,
      role,
      firstname,
      lastname,
    } = response.data;
    // console.log("This si our logged in user", response.data);
    // console.log("extracted values:", email, role, id, username);
    return new User(id, username, firstname, lastname, password, email, role);
  } catch (e) {
    if (e.response.status === 401) {
      throw new Error(`Failed to authenticate ${un}`);
    } else {
      // We could throw a different custom error, this exposes a little too much to the user.
      throw e;
    }
  }
}
