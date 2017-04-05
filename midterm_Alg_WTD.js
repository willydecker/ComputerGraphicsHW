<html>
<head>
<h1> Linked Lists
<p id="linkedList">
</p>
</h1>
<form>

<input type="text" id="last"> Last Name<input type="text"> Position <br><br>
<input type="text" id="first"> First Name<input type="text"> Position <br><br>
<input type="text" id="phone"> Phone Number<input type="text"> Position <br><br>

<button type="button" onclick="addToList()">Add</button>
<button type="button">Remove</button>
</form>

</head>
</html>




<script>
function addToList(){
    var last = document.getElementById("last").value;
    var first = document.getElementById("first").value;
    var phone = document.getElementById("phone").value;

    var myLinkedList = new LinkedList();
    myLinkedList.append(last,first,phone);
}

function LinkedList() {

    let Node = function(lastName,firstName,phoneNum){

        this.last = lastName;
        this.first = firstName;
        this.phone = parseInt(phoneNum);
        this.next = null;
    };

    let length = 0;
    let head = null;

    this.append = function(lastName,firstName,phoneNum){

        let node = new Node(lastName,firstName,phoneNum),
            current;

        if (head === null){ //first node on list
            head = node;
        } else {

            current = head;

            //loop the list until find last item
            while(current.next){
                current = current.next;
            }

            //get last item and assign next to added item to make the link
            current.next = node;
        }

        length++; //update size of list
    };

    // this.insert = function(position, element){

    //     //check for out-of-bounds values
    //     if (position >= 0 && position <= length){

    //         let node = new Node(lastName,firstName,phoneNum);
    //         var current = head;
    //         var previous = 0;
    //         var index = 0;

    //         if (position === 0){ //add on first position

    //             node.next = current;
    //             head = node;

    //         } 
    //         else {
    //             while (index++ < position){
    //                 previous = current;
    //                 current = current.next;
    //             }
    //             node.next = current;
    //             previous.next = node;
    //         }

    //         length++; //update size of list

    //         return true;

    //     } 
    //     else {
    //         return false;
    //     }
    // };

    // this.removeAt = function(position){

    //     //check for out-of-bounds values
    //     if (position > -1 && position < length){

    //         let current = head,
    //             previous,
    //             index = 0;

    //         //removing first item
    //         if (position === 0){
    //             head = current.next;
    //         } 
    //         else {

    //             while (index++ < position){

    //                 previous = current;
    //                 current = current.next;
    //             }

    //             //link previous with current's next - skip it to remove
    //             previous.next = current.next;
    //         }

    //         length--;

    //         var myArray = [current.lastName,current.firstName,current.phoneNum]
    //         return myArray;
    //     } 
    //     else {
    //         return null;
    //     }
    // };

    // this.remove = function(element){

    //     let index = this.indexOf(element);
    //     return this.removeAt(index);
    // };

    // this.indexOf = function(element){

    //     let current = head,
    //         index = 0;

    //     while (current) {
    //         if (element === current.element) {
    //             return index;
    //         }
    //         index++;
    //         current = current.next;
    //     }

    //     return -1;
    // };

    // this.isEmpty = function() {
    //     return length === 0;
    // };

    // this.size = function() {
    //     return length;
    // };

    // this.getHead = function(){
    //     return head;
    // };

    this.toString = function(){

        let current = head,
            string = '';

        while (current) {
            string += current.lastName + " " + current.firstName + " " + current.phoneNum;

            current = current.next;
        }
        return string;

    };

    this.print = function(){
        console.log(this.toString());
    };
}

</script>