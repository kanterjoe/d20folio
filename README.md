<img src="client/src/d20-folio-logo-1.png" alt="image of d20" style= "width: 200px; margin: 0 auto;">

# Welcome to d20folio 
D&amp;D character folio web app created as a two day project to teach U of MN Trilogy Full Stack Software Cohort on how to build a full stack application from the ground up. 

Boilerplate was started with `19-react/07-Ins_MERN`


***

###Technologies used:
	* React.JS
	* Nodemon
	* if-env
	* ExpressJS
	* Mongoose
	* NodeJS
	* NoSQL (MongoDB)
	* Reactstrap
	* React-router-dom

	
***

###Initializing

Clone the repo into your folder of choice. Once the files have been compiled, please:
> 	npm install

Or

>  yarn install
 
***


###Table Data
<img src="client/src/tables-for-d20folio.png" alt="image of table data on white board" style="width: 500px;">
	*If unable to see image, refer to data tables below*

####User Data Table
	_id: *,
	username: string,
	password: string,
	characters: array (references _id -> Character)
	
####Character Data Table
	_id: *,
	name: string,
	imageUrl: string,
	race: string, [elf, dwarf, human]
	class: string, [warrior, mystic, rogue]
	level: int,
	strength: int,
	dexterity: int,
	intelligence: int,
	constitution: int,
	wisdom: int,
	charisma: int, 
	equipment: [array] (references _id -> Equipment)
	
####Equipment Data Table
	_id: *,
	name: string,
	strength: int,
	dexterity: int,
	intelligence: int,
	constitution: int,
	wisdom: int,
	charisma: int,
	dieSize: int [between 4-12 sided die]
	
