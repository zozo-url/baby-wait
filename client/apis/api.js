import request from "superagent";

const DayCareUrl =
  'http://catalogue.data.govt.nz/api/3/action/datastore_search_sql?sql=SELECT * FROM"26f44973-b06d-479d-b697-8d7943c97c57"';

export function getInfo() {
  return request.get(DayCareUrl).then(res => res.body);
}

export function append(data) {
  return request
    .post(DayCareUrl)
    .send(DayCareInfo)
    .then(res => res.body);
}

const ParentDbUrl = 'http://localhost:3000/v1/parents'


export function getEccList (filterWord ,callback) {
  return request
      .get(ParentDbUrl + '/ecc' + '?filterWord=' + filterWord)
      .end((err,res) => {
          callback(err, res.body)
      })
}

export function getChildWaitlistData(id, callback) {
  return request.get(ParentDbUrl + "/childwaitlist/" + id).end((err, res) => {
    console.log(err);
    console.log(res);
    callback(err, res.body);
  });
}

export function postParentUser(parent, callback) {
  return request
      .post(ParentDbUrl + '/createparentuser')
      .send(parent)
      .end((err,res) => {
          console.log(err)
          console.log(res)
      })
}

export function getParentUserByUsername(parentUsername, callback) {
  console.log(user);
  return request
      .post(ParentDbUrl + '/getparentbyusername')
      .send(parentUsername)
      .end((err,res) => {
          console.log(err)
          console.log(res)
      })
}

export function postRegisteredChild(newChild, callback) {
  return request
      .post(ParentDbUrl + '/createchild')
      .send(newChild)
      .end((err,res) => {
          console.log(err)
          console.log(res)
      })
}
export function login(creds, callback) {
  const token = creds.token;
  return request
  .post(ParentDbUrl + '/login')
  .send(creds)
  .then(res => res.body.token)
  .catch (err => {
    throw err
  })
      // capture the token, send it to localstorage
}

const EccDbUrl = 'http://localhost:3000/v1/eccs'

export function getEccPendingData (id, callback) {
  return request
      .get(EccDbUrl + '/pending')
      .send(id)
      .end((err,res) => {
          console.log(err)
          console.log(res)
      })
}
