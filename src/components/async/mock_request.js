const users = {
  4: {
    name: 'hehe',
  },
  5: {
    name: 'haha',
  },
}

export default function request(url) {
  return new Promise((resolve, reject) => {
    const userID = parseInt(url.substr('/users/'.length), 10)
    process.nextTick(() => {
      users[userID] ?
        resolve(users[userID]) :
        reject({
          error: `User with ${userID} not found.`,
        })
    })
  })
}