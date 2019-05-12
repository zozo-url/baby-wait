import { getDayCareInfo } from "../api/getDaycareInfo"

export function fetchDayCareInfo() {
  console.log("Thunking");
  return dispatch => {
    console.log("in thunk");
    getDayCareInfo().then(Daycare => {
      console.log(Daycare);
      dispatch(saveDataToFile(Daycare));
    });
  };
}