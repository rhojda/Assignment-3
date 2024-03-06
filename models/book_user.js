const books_users = [
  { bookId: "0", userEmail: "rhojda@pratt.edu", status: "Finished" },
  { bookId: "1", userEmail: "rhojdah@pratt.edu", status: "Reading" },
  { bookId: "2", userEmail: "rhojda@pratt.edu", status: "To-do" },
  { bookId: "3", userEmail: "rhojda@pratt.edu", status: "To-do" }
];

exports.statuses = [ //making the statuses universally available
  "To-do", "Reading", "Finished"
]

exports.add = (book_user) => {
  books_users.push(book_user);
}

exports.update = (idx, book_user) => {
  books_users[idx] = book_user;
}

exports.upsert = (book_user) => {
  let idx = books_users.findIndex((bu) => {
    return bu.bookId == book_user.bookId && bu.userEmail == book_user.userEmail;
  });
  if (idx == -1) {
    exports.add(book_user);
  } else {
    exports.update(idx, book_user);
  }
}

exports.get = (bookId, userEmail) => {
  return books_users.find((book_user) => {
    return book_user.bookId == bookId && book_user.userEmail == userEmail;
  });
}

exports.AllForUser = (userEmail) => {
  return books_users.filter((book_user) => {
    return book_user.userEmail == userEmail;
  });
}

