## Todo List Application ##
A simple web-based Todo List application where users can add tasks, capitalize sentences, and remove tasks.

## Table of Contents
1. Description
2. Features
3. How to Use
4. File Structure
5. Dependencies
6. License

## Description
This Todo List application allows users to add tasks to a list, capitalize the first letter of each sentence, and remove tasks. The application is built using HTML, CSS, and JavaScript.

## Features
- Add tasks to the list.
- Capitalize the first letter of each sentence before adding to the list.
- Remove tasks from the list.

## How to Use
1. Clone the repository : git clone https://github.com/your-username/your-todo-list-repo.git
2. Open the HTML file:
- Open the todolist.html file in your web browser.
- Enter a task in the input field.
- Click the "ADD" button to add the task to the list.
- Tasks are capitalized before being added to the list.
- Click the trash icon to remove a task from the list.

+---------------------+
| Start: User Inputs  |
+---------------------+
          |
          v
+---------------------+
| Input Task          |
+---------------------+
          |
          v
+---------------------+
| Task Validation     |
|   (Is it empty?)    |
+---------------------+
          | 	   
   	  |+-----No------+
     Yes  |              |
   	  v              |
+---------------------+  |
| Display Alert:      |	 v
| "Please Enter Task" |  |
+---------------------+  |
          |		 |
    	  |+------<------+
 	  |
          v
+---------------------+
|      Click ADD      |
+---------------------+
          |
          v
+---------------------+
| Capitalize Task     |
+---------------------+
          |
          v
+---------------------+
| Create Task Element |
+---------------------+
          |
          v
+---------------------+
|   Display Task      |
+---------------------+
          |
          v
+---------------------+
| Add Event Listener  |
|   (Trash Icon)      |
+---------------------+
          |
          v
+---------------------+
| Remove Task if      |
| complect            |
+---------------------+
          |
          v
+---------------------+
|        End          |
+---------------------+

## File Structure: 
- todolist.html: HTML file for the Todo List interface.
- todolist.css: CSS file for styling the Todo List.
- todolist.js: JavaScript file for the Todo List functionality.
 
## Dependencies:
- Font Awesome (for trash icon): Font Awesome.
- Background image.
