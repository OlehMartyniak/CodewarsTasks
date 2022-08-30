// You want to show your users which of their friends are online and available to chat!

// Given an input of an array of objects containing usernames, status and time since last
// activity (in mins), create a function to work out who is online, offline and away.

// If someone is online but their lastActivity was more than 10 minutes ago they are to be
// considered away.

let users = [
  {
    username: "David",
    status: "online",
    lastActivity: 10,
  },
  {
    username: "Lucy",
    status: "offline",
    lastActivity: 9,
  },
  {
    username: "Bob",
    status: "online",
    lastActivity: 100,
  },
];

// {
//     online: ['David'],
//     offline: ['Lucy'],
//     away: ['Bob']
//   }

const whosOnline = (friends) => {
  let friendsStatus = {};

  for (let obj of friends) {
    if (obj.status === "online" && obj.lastActivity <= 10) {
      friendsStatus.online
        ? friendsStatus.online.push(obj.username)
        : (friendsStatus.online = [obj.username]);
    }
    if (obj.status === "offline") {
      friendsStatus.offline
        ? friendsStatus.offline.push(obj.username)
        : (friendsStatus.offline = [obj.username]);
    }
    if (obj.lastActivity > 10 && obj.status === "online") {
      friendsStatus.away
        ? friendsStatus.away.push(obj.username)
        : (friendsStatus.away = [obj.username]);
    }
  }
  return friendsStatus
}

console.log(whosOnline(users));
