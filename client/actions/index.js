export function EccList(){

    return{
        type:'ECC_List',
        payload: [
            {id: 1, center_name: 'Active Explorers Cambridge Terrace', ph_number: '043829939', url: 'https://www.activeexplorers.co.nz/locations/cambridge-terrace/', email: 'sasha.stewart@eeg.co.nz', address: 'Level 5, 54-56 Cambridge Terrace', suburb: 'Te Aro', description: 'A safe haven for families working in central Wellington, Active Explorers Cambridge Terrace offers the highest quality care in a secure and welcoming environment.', age: 'all ages', photo: 'ecc.jpeg', username: 'AECT', hash_password: 'AECT' },
            {id: 2, center_name: 'BestStart Tory Street', ph_number: '043858966', url: 'https://best-start.org/centres/beststart-tory-street', email: 'tory@best-start.org', address: '139 Tory Street', suburb: 'Te Aro', description: 'BestStart Tory Street (formerly Early Years Tory), is a richly diverse early learning centre in Wellington’s CBD providing education and childcare for children aged 2 to 5 years old. We love building relationships with our multicultural community and offer flexible hours, with morning and afternoon sessions as well as full day care.', age: '2+', photo: 'ecc.jpeg', username: 'BTC', hash_password: 'BTC' },
            {id: 3, center_name: 'Capital City Preschool', ph_number: '043846560', url: 'https://www.capitalcitypreschool.co.nz/', email: 'preschool@capitalcitypreschool.co.nz', address: '3 MacDonald Crescent', suburb: 'Te Aro', description: 'Capital City Preschool is a non-profit preschool providing education and care for preschool children aged 3-5 years, and has been operating for over 24 years.', age: '3+', photo: 'ecc.jpeg', username: 'CCP', hash_password: 'CCP' },
            {id: 4, center_name: 'Brooklyn Kids Childcare Center', ph_number: '048025782', url: 'https://www.brooklynkids.co.nz/', email: 'manager@brooklynkids.co.nz', address: '37-41 Cleveland Street', suburb: 'Brooklyn', description: 'At Brooklyn Kids Childcare Center, we believer in providing a holistic learning environment where children have the time and space to develop. We want to support children to become lifelong learners, who are passionate and curious about the world around them.', age: 'all ages', photo: 'ecc.jpeg', username: 'BKCC', hash_password: 'BKCC' },
        ]
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


// 
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
