// get paraent List
const allTasks = document.querySelector('#book-list ul');


// delete list 
function deleleList(){
	const btnDel = document.querySelectorAll(".delete");
	// for(let i=0; i<btnDel.length;i++){
	// 	console.log(btnDel[i]);
	// 	
	

	for(let btn of btnDel) {
		btn.addEventListener('click', (e) => {
			let rec = e.target.parentNode;
			
			let allRec = rec.parentNode;
			
			allRec.removeChild(rec);
			
		})
	};
	}
	// Delete Function Fire
	deleleList()
// Add new task (FORM)

	const addForm = document.forms['add-list'];
	addForm.addEventListener('submit',function(e) {
		// console.log("doing click");
		e.preventDefault();
		let existedBoolean;
		const newTask = addForm.querySelector('input[type="text"]').value;
		// Query All Element contain Class="name"
		let allTask = allTasks.getElementsByClassName('name')
		// Checked Existed Value With Loop
		for(let i=0 ; i < allTask.length ; i++){
			let allTaskVal = allTask[i].innerHTML.toLowerCase();
			let newTaskVal = newTask.toLowerCase();
			allTaskVal == newTaskVal ? existedBoolean = true : existedBoolean = false
		}
		// Condition after checking 
		if(existedBoolean){
			alert('Value is Existed')
		} else {
          	// create elements (li span span)
		const taskRow = document.createElement('li');
	
		taskRow.innerHTML="<input type='checkbox' />&nbsp<span class='name'>"+ newTask +"</span><span class='delete'>delete</span>";

		// const newTaskName = document.createElement('span');
		// const deleteTask = document.createElement('span');

		// // set value
		// newTaskName.textContent=newTask;
		// deleteTask.textContent='delete';

		// // set style 
		// newTaskName.classList.add('name');
		// deleteTask.classList.add('delete');

		// // append chile node
		// taskRow.appendChild(newTaskName);
		// taskRow.appendChild(deleteTask);

				allTasks.appendChild(taskRow);
				
			// Delete Function Fire again for query new element
				deleleList()
				checkAllTask()
		}
			
		
		
	
		
		

		
	
	});

	// Search
	const searchForm = document.forms['search-books']
	const inputSearch = searchForm.querySelector('input[type="text"]')

	inputSearch.addEventListener('keyup' , (e) => {
		const searchVal = e.target.value.toLowerCase()
		const taskNames = allTasks.querySelectorAll('.name') 

		for(let i = 0 ; i < taskNames.length; i++){
			if(taskNames[i].textContent.toLowerCase().indexOf(searchVal) == -1 ){
				taskNames[i].parentNode.style.display = 'none'
			} else {
				taskNames[i].parentNode.style.display = 'block'
			}
		}
	})

	///// checked Hidden list

	const checkHidden = document.forms['add-list'].querySelector('input[type="checkbox"]')

	checkHidden.addEventListener('change' , (e)=>{
		let checkedBox = e.target.checked

		allTasks.style.display = checkedBox ? 'none' : 'block' ;

	})


	// Checked Complete list &  expand
	function checkAllTask(){

		const checkAllTask = allTasks.querySelectorAll('input[type="checkbox"]')
		let completeTasks = document.querySelector('#complete-tasks ul')
		
		
		// check completeList
		for(let checkAll of checkAllTask){
		
			checkAll.addEventListener('change' , (e)=> {
				let checkedBox = e.target.checked
			
				if(checkedBox){
					completeTasks.appendChild(checkAll.parentNode)
					let delBtn = completeTasks.querySelector('.delete')
					delBtn.style.display = "none"

				} else {
					
					let delBtn = completeTasks.querySelector('.delete')
					delBtn.style.display = "block"
					allTasks.appendChild(checkAll.parentNode)
				}
						
				let completeTasksBadge = document.querySelector('#complete-tasks .badge')
				let completeTasklength = document.querySelectorAll('#complete-tasks ul li')
	
				completeTasksBadge.innerHTML = completeTasklength.length
			})
		}
		/// Expand
		const arrow = document.querySelector('#complete-title .material-icons')
		arrow.addEventListener('click' , (e)=> {
			if(e.target.textContent === "expand_more"){
				e.target.textContent = "expand_less"
			} else {
				e.target.textContent = "expand_more"
			}

			if(completeTasks.classList.contains('hidden')){
				completeTasks.classList.remove('hidden')
			} else {
				completeTasks.classList.add('hidden')
			}
		})

		////////
	
	}

	checkAllTask()

	///

	