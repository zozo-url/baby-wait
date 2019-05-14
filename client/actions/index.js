import { getEccList, getChildWithParentId } from '../apis/api'

export function EccList(payload){

    return{
        type:'ECC_List',
        payload
    }
}

export function saveUsersChildren(payload){
    return {
        type: 'CHILD_LIST',
        payload
    }
}

export function setFilterEccWord(suburb) {
    return {
        type:'FILTER_WORD',
        suburb
    }
}

export function filteredList(theList) {
    return {
        type:'FILTERED_LIST', 
        theList
    }
}

export function fetchECCList(filterWord) {
    return dispatch => {
        getEccList(filterWord, (err, eccList) => {
            dispatch(EccList(eccList))
        })
    }
    
}

export function fetchChildrenOfParent(parentId) {
    return dispatch => {
        getChildWithParentId(parentId, (err, childrenList) => {
            dispatch(saveUsersChildren(childrenList))
        })
    }
}

export function EccWaitlistInfo(){

    return{
        type:'ECC_WAITLIST',
        payload: [
            {
                "center_name": "Active Explorers Cambridge Terrace",
                "child_status": "waitlist",
                "child_rank": 1,
                "child_first_name": "Abi2",
                "child_last_name": "Lodo",
                "parent_first_name": "Devon",
                "parent_last_name": "Longbottom",
                "parent_email": "bigdogggottaeat@example.com"
            },
            {
                "center_name": "Active Explorers Cambridge Terrace",
                "child_status": "waitlist",
                "child_rank": 2,
                "child_first_name": "Sarah",
                "child_last_name": "Evans",
                "parent_first_name": "Simon",
                "parent_last_name": "Guy",
                "parent_email": "guyman@example.com"
            },
            {
                "center_name": "Active Explorers Cambridge Terrace",
                "child_status": "waitlist",
                "child_rank": 3,
                "child_first_name": "Josh",
                "child_last_name": "Boyman",
                "parent_first_name": "Lisa",
                "parent_last_name": "Cool",
                "parent_email": "lisa111@example.com"
            }
        ]
    }
}

export function EccPendingInfo(){

    return{
        type:'ECC_PENDING',
        payload: [
            {
                "center_name": "Active Explorers Cambridge Terrace",
                "child_status": "pending",
                "child_rank": 1,
                "child_first_name": "Abi2",
                "child_last_name": "Lodo",
                "parent_first_name": "Devon",
                "parent_last_name": "Longbottom",
                "parent_email": "bigdogggottaeat@example.com"
            },
            {
                "center_name": "Active Explorers Cambridge Terrace",
                "child_status": "pending",
                "child_rank": 2,
                "child_first_name": "Ella",
                "child_last_name": "Evans",
                "parent_first_name": "Simon",
                "parent_last_name": "Guy",
                "parent_email": "guyman@example.com"
            },
            {
                "center_name": "Active Explorers Cambridge Terrace",
                "child_status": "pending",
                "child_rank": 3,
                "child_first_name": "Josh",
                "child_last_name": "Boyman",
                "parent_first_name": "Lisa",
                "parent_last_name": "Cool",
                "parent_email": "lisa111@example.com"
            }
        ]
    }
}


export function childList(){

    return{
        type:'CHILD_LIST',
        payload: [
            {
                "first_name": "Abi2",
                "status": "pending",
                "rank_ecc": 1,
                "rank_parent": 1,
                "center_name": "Active Explorers Cambridge Terrace"
            },
            {
                "first_name": "Abi2",
                "status": "waitlist",
                "rank_ecc": 1,
                "rank_parent": 3,
                "center_name": "BestStart Tory Street"
            },
            {
                "first_name": "Abi2",
                "status": "waitlist",
                "rank_ecc": 1,
                "rank_parent": 2,
                "center_name": "Active Explorers Cambridge Terrace"
            }
         ]
    }
}
