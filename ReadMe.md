
## GINA'S DAYCARE


#### DESCRIPTION OF APP:
Tot Spot is a waitlist application that connects parents with Early Childhood Centres. It allows parents to keep track of their children's’ applications and their position within each waitlist. For ECCs, it allows them to manage and update their waitlist in order to keep parents informed. 


### -----MVP-----


#### PARENT

- User can search for ECCs by location
- User can register and log in
- User can save information about their child/children
- User can add child to a waitlist
- User can see what waitlists their child/children are on and what position they are in the cue

#### ECC

- User can register their business and log in
- User can edit the description of their business that will show up in the parent ECC search
- User can see who has applied to be on the waitlist and can add them to it/delete their request
- User can see their business waitlist, edit the order cue, and delete applicants
- User can update their business waitlist and have this change affect parents personal waitlists



### WIREFRAMES:








### FRONT END:


#### LIST OF COMPONENTS:
  | Component Name | Description |
  | --- | --- |
  | ParentRegister | Parent user signing up |
  | ParentLogin | Parent user logging in to their account |
  | ChildRegister | Registering child info for adding to waitlists |
  | ParentDashboard | See what children you have registered + waitlists your children are on + ability to edit/delete children from your account/from waitlists + rank ECC’s |
  | FilterLocation | Select a location you want to view the ECC’s in |
  | EccList | List of ECC’s that have been filtered by location |
  | WaitlistApplication | Register your child for a waitlist |
  | --- | --- |
  | EccRegister | ECC user sign up |
  | EccLogin | ECC user log in |
  | EccDashboard | List of applicants for this ECC, with a pending and a waitlist list + ability to edit/delete applicants |
  | EccSettings | change/update settings to do with the presentation of this ECC in the parent’s EccList |



#### LIST OF REDUCERS:

#### LIST OF ACTIONS:




### BACK END:


#### LIST OF DATA TABLES:


#### PARENT
  | Column Name | Data Type | Purpose |
  | --- | --- | --- |
  | id | integer.increment | unique identifier for parent user |
  | first_name | string | to refer to parent user |
  | last_name | string | to help identify family connections |
  | username | string.unique | for user log in |
  | hash_password | string | |
  | email | string.unique | allow user to be contacted |
  
  
#### CHILD
  | Column Name | Data Type | Purpose |
  | --- | --- | --- |
  | id | integer.increment | unique identifier for child |
  | first_name | string | to refer to child in waitlist |
  | last_name | string | to help identify family connections |
  | date_of_birth | string | to identify when a child qualifies for care/leaving to start school |
  | parent_id | integer | join child to their parent |
  
  
#### ECC
  | Column Name | Data Type | Purpose |
  | --- | --- | --- |
  | id | integer.increment | unique identifier for ecc user |
  | center_name | string | for search/display |
  | ph_number | string.unique | for parent to contact |
  | email | string.unique | for parent to contact |
  | address | string | for search/display |
  | suburb | string | for search by location |
  | description | string | describe what they need |
  | photo | string | for display of location space to parent |
  
  
#### WAITLIST
  | Column Name | Data Type | Purpose |
  | --- | --- | --- |
  | child_id | integer | to join from child table |
  | ecc_id | integer | to join from ECC table |
  | rank_ecc | integer | assign a rank value to children in waitlists |
  | rank_parent | integer | assign a rank value of parents preferred ECC's |



### LIST OF SERVER SIDE FUNCTIONS:
 

 #### PARENT 
  | Type | Description |
  | --- | --- |
  | POST |  register info to parent table |
  | GET | log in with parent username + password |
  | POST | child info to child table (+ parentID) |
  | GET | GET ECC list .where location == |
  | POST | child to waitlist (+ childID, status = pending, rank_ecc and rank_parent = null) |
  | GET | join parent + children + waitlist + ecc tables |
  | DELETE | child from waitlist |
  | UPDATE | rank_parent |



 #### ECC's
  | POST | register info to ECC table |
  | GET | log in with ECC username + password |
  | UPDATE | ecc info |
  | GET | join ecc info + child info .where status = pending |
  | GET | join ecc info + child info .where status =waitlist |
  | UPDATE | rank_ecc and status for selected child |
  | DELETE | child in a waitlist table  |



#### API:


#### DB:


#### ROUTES:



